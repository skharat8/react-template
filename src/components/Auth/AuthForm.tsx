import axios from "axios";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiUser3Fill, RiMailFill, RiLockPasswordFill } from "react-icons/ri";

import { userLoginSchema, userSignupSchema } from "@schemas/auth.zod";
import type { UserSignup } from "@schemas/auth.zod";
import type AuthType from "@data/types";
import * as Api from "@services/api";
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
  const [failedRequest, setFailedRequest] = useState("");
  const navigate = useNavigate();

  async function onSubmit(data: UserSignup) {
    try {
      if (authType === "signup") {
        await Api.createUser(data);
        navigate("/");
      } else {
        await Api.createUserSession(data);
        navigate("/home");
      }
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setFailedRequest(e.message);
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

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      {failedRequest !== "" && (
        <p className={styles.networkErrorMessage}>{failedRequest}</p>
      )}
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
          type="password"
          placeholder="Password"
        />
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
