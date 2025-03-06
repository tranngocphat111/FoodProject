import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-5xl text-center text-primary">Login</h1>
      </div>
    </div>
  );
}
