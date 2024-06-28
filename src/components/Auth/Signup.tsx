import { RiUser3Fill } from "react-icons/ri";

export default function Signup() {
  return (
    <div className="form-input">
      <RiUser3Fill className="icon" />
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        required
      />
    </div>
  );
}
