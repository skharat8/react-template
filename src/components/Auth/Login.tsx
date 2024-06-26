import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Login() {
  return (
    <div className="form">
      <div className="input">
        <MdEmail />
        <input type="email" />
      </div>
      <div className="input">
        <RiLockPasswordFill />
        <input type="password" />
      </div>
    </div>
  );
}
