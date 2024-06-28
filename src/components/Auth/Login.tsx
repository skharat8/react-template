import { RiMailFill, RiLockPasswordFill } from "react-icons/ri";

export default function Login() {
  return (
    <>
      <div className="form-input">
        <RiMailFill className="icon" />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          required
        />
      </div>

      <div className="form-input">
        <RiLockPasswordFill className="icon lock" />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
      </div>
    </>
  );
}
