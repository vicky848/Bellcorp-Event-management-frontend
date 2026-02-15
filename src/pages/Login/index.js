import { useState, useContext } from "react";
import API from "../../services/api";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import './index.css'

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", form);
    login(res.data.token);
    navigate("/events");
  };

  return (
  <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="email-input"
      /> <br/>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="password-input"
      /> <br/> 
     <div className="login-button-container">
       <button className="login-button">Login</button>
     </div>
    </form>
  </div>
  );
}
