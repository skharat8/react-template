import clsx from "clsx";
import styles from "./Button.module.css";

function Button({
  type = "button",
  variant = "primary",
  size,
  onClick,
  disabled,
  ref,
  className,
  children,
}: ButtonProps) {
  let sizeClass;
  if (size === "small") sizeClass = "px-3 py-2 text-sm";
  if (size === "medium") sizeClass = "px-6 py-5 text-lg";
  if (size === "large") sizeClass = "px-6 py-5 text-3xl";

  let variantClass;
  if (variant === "primary") variantClass = styles.btnPrimary;
  if (variant === "link") variantClass = styles.btnLink;
  if (variant === "demo") variantClass = styles.btnGuestDemo;
  if (variant === "small-caps") variantClass = styles.btnSmallCaps;

  const classNames = clsx(styles.btnBase, sizeClass, variantClass, className);

  return (
    <button
      // NO_LINT ButtonProps already defines accepted types
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
      disabled={disabled}
      ref={ref}
      className={classNames}
    >
      {children}
    </button>
  );
}

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large" | undefined;
  variant?: "primary" | "link" | "demo" | "small-caps";
  onClick?: () => void;
  disabled?: boolean;
  ref?: React.MutableRefObject<HTMLButtonElement | null>;
  className?: string;
  children: React.ReactNode;
};

export default Button;
