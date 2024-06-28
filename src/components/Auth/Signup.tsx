import { RiUser3Fill } from "react-icons/ri";

export default function Signup({ formData, handleChange }: SignupProps) {
  return (
    <div className="form-input">
      <RiUser3Fill className="icon" />
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />
    </div>
  );
}

type SignupProps = {
  formData: object;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
