function ButtonIcon({ onClick, disabled, children }: ButtonIconProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="rounded-lg border-none bg-transparent p-2 transition hover:bg-secondary-200
        [&_svg]:h-9 [&_svg]:w-9 [&_svg]:text-primary-900"
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
