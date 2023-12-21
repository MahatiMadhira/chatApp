/* RENDER AUTH PAGE IF USER DOES NOT EXIST, RENDER CHAT PAGE IF USER EXISTS */
import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;//create new user instance
  } else {
    return <ChatsPage user={user} />;//return existing user chats
  }
}

export default App;

