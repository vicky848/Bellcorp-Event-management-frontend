import { useState } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";
import './index.css'

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    navigate("/login");
  };

  return (
   <div className="register-container">
     <form onSubmit={handleSubmit} className="register-form">
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="register-name-input"
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="register-email-input"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="register-password-input"
      />
     <div className="register-button-container">
       <button className="register-button">Register</button>
     </div>
    </form>
   </div>
  );
}
