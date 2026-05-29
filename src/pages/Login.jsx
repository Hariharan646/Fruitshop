import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful! (Demo)");
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome Back 👋</h1>
        <p className="sub">Login to your FruitShop account</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="login-footer">
          <a href="#">Forgot Password?</a>
          <a href="#">Create Account</a>
        </div>
      </div>
    </div>
  );
}

export default Login;