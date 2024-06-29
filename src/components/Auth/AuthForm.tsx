import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiUser3Fill, RiMailFill, RiLockPasswordFill } from "react-icons/ri";

import { userLoginSchema, userSignupSchema } from "@schemas/auth.zod";
import type { UserLogin, UserSignup } from "@schemas/auth.zod";
import type AuthType from "@data/types";

function AuthForm({ authType }: AuthFormProps) {
  const validationSchema =
    authType === "login" ? userLoginSchema : userSignupSchema;

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<UserSignup>({
    resolver: zodResolver(validationSchema),
  });

  const loginButtonRef = useRef<HTMLButtonElement | null>(null);

  function onSubmit(data: UserLogin | UserSignup) {
    console.log(data);
  }

  function handleGuestLogin() {
    clearErrors("email");
    clearErrors("password");
    setValue("email", "guest@gmail.com");
    setValue("password", "guest_password");
    loginButtonRef.current?.click();
  }

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      {authType === "signup" && (
        <div className="form-input">
          <RiUser3Fill className="icon" />
          <input {...register("username")} type="text" placeholder="Username" />
          <p className="error-message">{errors.username?.message}</p>
        </div>
      )}

      <div className="form-input">
        <RiMailFill className="icon" />
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          autoComplete="email"
        />
        <p className="error-message">{errors.email?.message}</p>
      </div>

      <div className="form-input">
        <RiLockPasswordFill className="icon lock" />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <p className="error-message">{errors.password?.message}</p>
      </div>

      {authType === "login" && (
        <button
          type="button"
          className="guest-button-link"
          onClick={handleGuestLogin}
        >
          Demo the app with a guest login?
        </button>
      )}

      <button
        type="submit"
        className="login-register-button"
        ref={loginButtonRef}
      >
        {authType}
      </button>
    </form>
  );
}

type AuthFormProps = {
  authType: AuthType;
};

export default AuthForm;
