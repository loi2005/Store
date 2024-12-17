import { useState } from "react";

function CheckEmail() {
  const [email, setEmail] = useState("");
  const [message, setMEssage] = useState("");
  const clickCheckEmail = () => {
    if (!email.trim()) {
      setMEssage("Email not empty!");
      return;
    }
    if (!isValidEmail(email)) {
      setMEssage("invalid not format!");
      return;
    }
    setMEssage("ThanK For Subscribing!");
    setEmail("");
  };
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return { email, setEmail, message, clickCheckEmail };
}

export default CheckEmail;
