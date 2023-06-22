import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

export default function Login() {
  return (
    <div>
      <h2>Register Today</h2>
      <div>
        <h3>Choose one of the providers below to sign in:</h3>
      </div>
      <div>
        <button>
          <FcGoogle />
          Sign in with Google
        </button>
        <button>
          <AiFillFacebook />
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
}
