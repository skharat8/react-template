function ButtonIcon({ onClick, disabled, children }: ButtonIconProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="rounded-sm border-none bg-transparent p-3 transition hover:bg-pink-200
        [&_svg]:h-9 [&_svg]:w-9 [&_svg]:text-secondary-400"
    >
      {children}
    </button>
  );
}

type ButtonIconProps = {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
};

export default ButtonIcon;
