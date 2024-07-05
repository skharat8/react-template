import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createUserSession } from "@/services/apiAuth";
import type { UserLogin } from "@/schemas/auth.zod";

function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoginPending } = useMutation({
    mutationFn: (data: UserLogin) => createUserSession(data),
    onSuccess: () => {
      navigate("/", { replace: true });
    },
    onError: err => {
      console.error(err);
      toast.error(err.message, { style: { background: "pink" } });
    },
  });

  return { login, isLoginPending };
}

export default useLogin;
