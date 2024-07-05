import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiUser3Fill, RiMailFill, RiLockPasswordFill } from "react-icons/ri";

import SpinnerMini from "@/components/SpinnerMini";
import { userLoginSchema, userSignupSchema } from "@/schemas/auth.zod";
import type { UserSignup } from "@/schemas/auth.zod";
import type { AuthType } from "@/data/types";
import styles from "./Auth.module.css";
import useLogin from "./useLogin";
import useSignup from "./useSignup";

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
  const { login, isLoginPending } = useLogin();
  const { signup, isSignupPending } = useSignup();
  const [showPassword, setShowPassword] = useState(false);

  function onSubmit(data: UserSignup) {
    if (authType === "signup") {
      signup(data);
    } else {
      login(data);
    }
  }

  function handleGuestLogin() {
    clearErrors("email");
    clearErrors("password");
    setValue("email", "guest@gmail.com");
    setValue("password", "guest_password");
    loginButtonRef.current?.click();
  }

  function toggleShowPassword() {
    setShowPassword(prevShowPassword => !prevShowPassword);
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      {authType === "signup" && (
        <div className={styles.formInput}>
          <RiUser3Fill className={styles.icon} />
          <input
            {...register("username")}
            type="text"
            placeholder="Username"
            disabled={isLoginPending || isSignupPending}
          />
          <p className={styles.errorMessage}>{errors.username?.message}</p>
        </div>
      )}

      <div className={styles.formInput}>
        <RiMailFill className={styles.icon} />
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          autoComplete="email"
          disabled={isLoginPending || isSignupPending}
        />
        <p className={styles.errorMessage}>{errors.email?.message}</p>
      </div>

      <div className={styles.formInput}>
        <RiLockPasswordFill className={`${styles.icon} ${styles.lock}`} />
        <input
          {...register("password")}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          disabled={isLoginPending || isSignupPending}
        />
        <button
          type="button"
          className={styles.showPasswordBtn}
          onClick={toggleShowPassword}
        >
          {showPassword ? "Hide" : "Show"}
        </button>

        <p className={styles.errorMessage}>{errors.password?.message}</p>
      </div>

      {authType === "login" && (
        <button
          type="button"
          className={styles.guestButtonLink}
          onClick={handleGuestLogin}
          disabled={isLoginPending || isSignupPending}
        >
          Demo the app with a guest login?
        </button>
      )}

      <button
        type="submit"
        className={styles.loginRegisterButton}
        ref={loginButtonRef}
        disabled={isLoginPending || isSignupPending}
      >
        {isLoginPending || isSignupPending ? <SpinnerMini /> : authType}
      </button>
    </form>
  );
}

type AuthFormProps = {
  authType: AuthType;
};

export default AuthForm;
