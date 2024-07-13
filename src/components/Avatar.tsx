import AvatarMale from "@images/avatar-male.svg";

function Avatar({ size = "medium" }: AvatarProps) {
  const avatarSize = {
    small: "35rem",
    medium: "40rem",
    large: "70rem",
  };

  return (
    <div className="bg-accentPink-600 overflow-hidden rounded-full shadow-sm">
      <img
        src={AvatarMale}
        alt="Profile Avatar"
        width={avatarSize[size]}
        height={avatarSize[size]}
      />
    </div>
  );
}

type AvatarProps = {
  size?: "small" | "medium" | "large";
};

export default Avatar;
