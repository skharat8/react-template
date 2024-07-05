import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createUser } from "@/services/apiAuth";
import type { UserSignup } from "@/schemas/auth.zod";

function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isPending: isSignupPending } = useMutation({
    mutationFn: (data: UserSignup) => createUser(data),
    onSuccess: () => {
      navigate("/", { replace: true });
    },
    onError: err => {
      console.error(err);
      toast.error(
        "Failed to create new account! Username or email already exists",
        { style: { background: "pink" } }
      );
    },
  });

  return { signup, isSignupPending };
}

export default useSignup;
