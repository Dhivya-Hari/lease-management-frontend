import { useNavigate } from "react-router-dom";
import { FaBuilding, FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-left">
          <FaBuilding className="login-logo" />
          <h1>Smart Lease</h1>
          <p>
            Manage properties, tenants, leases, payments, and reports from one
            professional admin portal.
          </p>
        </div>

        <div className="login-right">
          <h2>Welcome Back</h2>
          <p className="login-subtitle">Login to continue</p>

          <form onSubmit={handleLogin}>
            <div className="input-group-custom">
              <FaEnvelope />
              <input type="email" placeholder="Email address" required />
            </div>

            <div className="input-group-custom">
              <FaLock />
              <input type="password" placeholder="Password" required />
            </div>

            <div className="login-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <span>Forgot password?</span>
            </div>

            <button className="login-btn">Login</button>
          </form>

          <p className="demo-text">
            Demo: admin@lease.com / admin123
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;