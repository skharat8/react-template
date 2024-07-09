import AvatarMale from "@images/avatar-male.svg";

function Avatar({ size = "small" }: AvatarProps) {
  return (
    <div className="overflow-hidden rounded-full bg-secondary-600 shadow-md">
      <img
        src={AvatarMale}
        alt="Profile Avatar"
        width={size === "small" ? "45em" : "100em"}
        height={size === "small" ? "45em" : "100em"}
      />
    </div>
  );
}

type AvatarProps = {
  size?: "small" | "medium";
};

export default Avatar;
