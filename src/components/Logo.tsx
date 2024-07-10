import logo from "@images/app-logo-96x96.png";

function Logo({
  width = "3.9rem",
  marginBottom = "",
  hasHoverEffect = false,
}: LogoProps) {
  let styles: Record<string, string> = { width, marginBottom };
  let hoverClass = "";

  if (hasHoverEffect) {
    styles = {
      ...styles,
      willChange: "filter",
      transition: "filter 300ms",
    };

    hoverClass = "hover:scale-110 hover:transform hover:drop-shadow-logo";
  }

  return (
    <img className={hoverClass} style={styles} src={logo} alt="Main App Logo" />
  );
}

type LogoProps = {
  width?: string;
  marginBottom?: string;
  hasHoverEffect?: boolean;
};

export default Logo;
