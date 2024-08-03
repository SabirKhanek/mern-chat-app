// pages/VideoChat.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Videos from "../../components/video";
import { Mode } from "../../shared/types";

const VideoChat: React.FC = () => {
  const params = useParams();
  const mode = params.mode;
  const callId = params.callId;
  const history = useNavigate();

  const setPage = (page: string) => {
    history(`/${page}`);
  };

  return (
    <Videos mode={mode as Mode} callId={callId as string} setPage={setPage} />
  );
};

export default VideoChat;
