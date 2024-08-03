// components/Videos.tsx
import React, { useRef, useState } from "react";
import { db as firestore } from "../shared/firebase";
import { Mode } from "../shared/types";
import HangupIcon from "../icons/hangup.svg";
import MoreIcon from "../icons/more-vertical.svg";
import CopyIcon from "../icons/copy.svg";
import {
  collection,
  addDoc,
  getDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  doc,
  setDoc,
  query,
  getDocs,
} from "firebase/firestore";

interface VideosProps {
  mode: Mode;
  callId: string;
  setPage: (p: string) => void;
}

const servers = {
  iceServers: [
    {
      urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
    },
  ],
  iceCandidatePoolSize: 10,
};

const pc = new RTCPeerConnection(servers);

const Videos: React.FC<VideosProps> = ({ mode, callId, setPage }) => {
  const [webcamActive, setWebcamActive] = useState(false);
  const [roomId, setRoomId] = useState(callId);
  const localRef = useRef<HTMLVideoElement>(null);
  const remoteRef = useRef<HTMLVideoElement>(null);

  const setupSources = async () => {
    const localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    const remoteStream = new MediaStream();

    localStream.getTracks().forEach((track) => {
      pc.addTrack(track, localStream);
    });

    pc.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        remoteStream.addTrack(track);
      });
    };

    if (localRef.current) localRef.current.srcObject = localStream;
    if (remoteRef.current) remoteRef.current.srcObject = remoteStream;

    setWebcamActive(true);
    console.log("OUTSIDE CREATE MODE");
    console.log(mode);
    if (mode === "create") {
      console.log("INSIDE CREATE MODE");

      const callDoc = doc(collection(firestore, "calls"));
      const offerCandidates = collection(callDoc, "offerCandidates");
      const answerCandidates = collection(callDoc, "answerCandidates");

      setRoomId(callDoc.id);

      pc.onicecandidate = (event) => {
        event.candidate && addDoc(offerCandidates, event.candidate.toJSON());
      };

      const offerDescription = await pc.createOffer();
      await pc.setLocalDescription(offerDescription);

      const offer = {
        sdp: offerDescription.sdp,
        type: offerDescription.type,
      };

      await setDoc(callDoc, { offer });

      onSnapshot(callDoc, (snapshot) => {
        const data = snapshot.data();
        if (!pc.currentRemoteDescription && data?.answer) {
          const answerDescription = new RTCSessionDescription(data.answer);
          pc.setRemoteDescription(answerDescription);
        }
      });

      onSnapshot(answerCandidates, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            const candidate = new RTCIceCandidate(change.doc.data());
            pc.addIceCandidate(candidate);
          }
        });
      });
    } else if (mode === "join") {
      const callDoc = doc(firestore, "calls", callId);
      const answerCandidates = collection(callDoc, "answerCandidates");
      const offerCandidates = collection(callDoc, "offerCandidates");

      pc.onicecandidate = (event) => {
        event.candidate && addDoc(answerCandidates, event.candidate.toJSON());
      };

      const callData = (await getDoc(callDoc)).data();

      const offerDescription = callData?.offer;
      await pc.setRemoteDescription(
        new RTCSessionDescription(offerDescription)
      );

      const answerDescription = await pc.createAnswer();
      await pc.setLocalDescription(answerDescription);

      const answer = {
        type: answerDescription.type,
        sdp: answerDescription.sdp,
      };

      await updateDoc(callDoc, { answer });

      onSnapshot(offerCandidates, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            let data = change.doc.data();
            pc.addIceCandidate(new RTCIceCandidate(data));
          }
        });
      });
    }

    pc.onconnectionstatechange = () => {
      if (pc.connectionState === "disconnected") {
        hangUp();
      }
    };
  };

  const hangUp = async () => {
    pc.close();

    if (roomId) {
      const roomRef = doc(firestore, "calls", roomId);
      const answerCandidates = collection(roomRef, "answerCandidates");
      const offerCandidates = collection(roomRef, "offerCandidates");

      const answerQuery = query(answerCandidates);
      const answerSnapshot = await getDocs(answerQuery);
      answerSnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });

      const offerQuery = query(offerCandidates);
      const offerSnapshot = await getDocs(offerQuery);
      offerSnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });

      await deleteDoc(roomRef);
    }

    window.location.reload();
  };

  return (
    <div className="videos">
      <video ref={localRef} autoPlay playsInline className="local" muted />
      <video ref={remoteRef} autoPlay playsInline className="remote" />

      <div className="buttonsContainer">
        <button
          onClick={hangUp}
          disabled={!webcamActive}
          className="hangup button"
        >
          <img src={HangupIcon}></img>
        </button>
        <div tabIndex={0} role="button" className="more button">
          <img src={MoreIcon} />
          <div className="popover">
            <button
              onClick={() => {
                navigator.clipboard.writeText(roomId);
              }}
            >
              <img src={CopyIcon} /> Copy joining code
            </button>
          </div>
        </div>
      </div>

      {!webcamActive && (
        <div className="modalContainer">
          <div className="modal">
            <h3>Turn on your camera and microphone and start the call</h3>
            <div className="container">
              <button onClick={() => setPage("home")} className="secondary">
                Cancel
              </button>
              <button onClick={setupSources}>Start</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
