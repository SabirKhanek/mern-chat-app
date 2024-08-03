// pages/Home.tsx
import React, { useState } from "react";
import Menu from "../../components/menu";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [joinCode, setJoinCode] = useState("");
  const navigate = useNavigate();

  const navigateToVideoChat = (page: string) => {
    navigate(`/video-chat/${page}/${joinCode}`);
  };

  return (
    <div className="app">
      <Menu
        joinCode={joinCode}
        setJoinCode={setJoinCode}
        setPage={navigateToVideoChat}
      />
    </div>
  );
};

export default Home;
