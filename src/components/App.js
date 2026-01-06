
import React from "react";
import { AuthProvider } from "./AuthContext";
import Auth from "./Auth";
import './../styles/App.css';

function App() {
  return (
    <AuthProvider>
      <Auth />
    </AuthProvider>
  );
}

export default App;
