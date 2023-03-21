import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Sign Up</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Password" />
            <button>Registe</button>
          </form>
        </div>
        <div className="right">
          <h1>Hello</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolorem
            magnam assumenda quam sequi omnis. Quaerat odio cum in maxime!
          </p>
          <span>Do you have an account?</span>
          <Link to="/">
            {" "}
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
