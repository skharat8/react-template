import { NavLink } from "react-router-dom";

function NavbarItem({ to, item, selectedItem }: NavbarItemProps) {
  const baseStyles = `flex flex-grow items-center justify-center border-r-2 border-primary-800 py-10px
  hover:bg-secondary-200 hover:text-black text-black`;

  const inactiveStyles = `${baseStyles} bg-primary-500`;
  const activeStyles = `${baseStyles} bg-secondary-500 `;

  function getNavLinkStyles({ isActive }: { isActive: boolean }) {
    return isActive ? activeStyles : inactiveStyles;
  }

  return (
    <NavLink to={to} className={getNavLinkStyles}>
      {({ isActive }) => (isActive ? selectedItem : item)}
    </NavLink>
  );
}

type NavbarItemProps = {
  to: string;
  item: React.ReactElement;
  selectedItem: React.ReactElement;
};

export default NavbarItem;
