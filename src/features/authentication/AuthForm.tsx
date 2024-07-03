import axios from "axios";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiUser3Fill, RiMailFill, RiLockPasswordFill } from "react-icons/ri";

import * as AuthApi from "@/services/apiAuth";
import { userLoginSchema, userSignupSchema } from "@/schemas/auth.zod";
import type { User, UserSignup } from "@/schemas/auth.zod";
import type { AuthType, ResponseError } from "@/data/types";
import styles from "./Auth.module.css";

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
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  async function onSubmit(data: UserSignup) {
    try {
      let user: User;

      if (authType === "signup") {
        user = await AuthApi.createUser(data);
      } else {
        user = await AuthApi.createUserSession(data);
      }

      navigate("/");
    } catch (e) {
      if (axios.isAxiosError<ResponseError>(e)) {
        setError(e.response?.data.error ?? e.message);
      } else if (e instanceof Error) {
        console.error(e.message);
      }
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
      {error && <p className={styles.networkErrorMessage}>{error}</p>}
      {authType === "signup" && (
        <div className={styles.formInput}>
          <RiUser3Fill className={styles.icon} />
          <input {...register("username")} type="text" placeholder="Username" />
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
        />
        <p className={styles.errorMessage}>{errors.email?.message}</p>
      </div>

      <div className={styles.formInput}>
        <RiLockPasswordFill className={`${styles.icon} ${styles.lock}`} />
        <input
          {...register("password")}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
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
        >
          Demo the app with a guest login?
        </button>
      )}

      <button
        type="submit"
        className={styles.loginRegisterButton}
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
