// components/Menu.tsx
import React from "react";

interface MenuProps {
  joinCode: string;
  setJoinCode: React.Dispatch<React.SetStateAction<string>>;
  setPage: (p: string)=>void;
}

const Menu: React.FC<MenuProps> = ({ joinCode, setJoinCode, setPage }) => {
  return (
    <div className="home">
      <div className="create box">
        <button onClick={() => setPage("create")}>Create Call</button>
      </div>
      <div className="answer box">
        <input
          value={joinCode}
          onChange={(e) => setJoinCode(e.target.value)}
          placeholder="Join with code"
        />
        <button onClick={() => setPage("join")}>Answer</button>
      </div>
    </div>
  );
};

export default Menu;
