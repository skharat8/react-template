import { RiMailFill, RiLockPasswordFill } from "react-icons/ri";

export default function Login({ formData, handleChange }: LoginProps) {
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
          value={formData.email}
          onChange={handleChange}
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
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
}

type LoginProps = {
  formData: object;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
