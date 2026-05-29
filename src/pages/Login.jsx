function Login() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Welcome Back</h1>
        <p>Login to your Fruit Shop account</p>

        <form>
          <input
            type="email"
            placeholder="Enter Email"
          />

          <input
            type="password"
            placeholder="Enter Password"
          />

          <button type="submit">
            Login
          </button>
        </form>

        <div className="login-links">
          <a href="#">Forgot Password?</a>
          <a href="#">Create Account</a>
        </div>

      </div>
    </div>
  );
}

export default Login;