import { useState } from "react";
import API from "../services/api";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });

  const register = async () => {
    await API.post("/auth/register", form);
    window.location.href = "/login";
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input placeholder="Email" onChange={(e) => setForm({...form, email:e.target.value})}/>
      <input placeholder="Password" type="password" onChange={(e) => setForm({...form, password:e.target.value})}/>
      <button className="button" onClick={register}>Register</button>
    </div>
  );
}