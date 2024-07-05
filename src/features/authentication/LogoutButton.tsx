import { RiLogoutBoxRLine } from "react-icons/ri";

import ButtonIcon from "@/components/ButtonIcon";
import SpinnerMini from "@/components/SpinnerMini";
import useLogout from "./useLogout";

function LogoutButton() {
  const { logout, isLogoutPending } = useLogout();

  return (
    // NO_LINT
    // @ts-expect-error Mutation function from React Query is ok to pass here.
    <ButtonIcon disabled={isLogoutPending} onClick={logout}>
      {isLogoutPending ? <SpinnerMini /> : <RiLogoutBoxRLine />}
    </ButtonIcon>
  );
}

export default LogoutButton;
