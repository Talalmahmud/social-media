import { Link } from "react-router-dom";
import "./login.scss";
const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolorem
            magnam assumenda quam sequi omnis. Quaerat odio cum in maxime!
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>LogIn</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />

            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
