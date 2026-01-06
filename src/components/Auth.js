
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Auth = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Click on the checkbox to get authenticated</h1>
      {/* Add className 'authText' and exact text the test expects */}
      <p className="authText">
        {isAuthenticated ? "you are authenticated" : "you are not authenticated"}
      </p>
      <label>
        <input type="checkbox" checked={isAuthenticated} onChange={toggleAuth} />
        I'm not a robot
      </label>
    </div>
  );
};

export default Auth;
