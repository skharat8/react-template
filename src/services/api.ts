import type { UserLogin, UserSignup } from "@schemas/auth.zod";
import axios from "axios";

async function createUser(data: UserSignup) {
  await axios.post(`${import.meta.env.VITE_SERVER_ENDPOINT}/api/users`, data);
}

async function createUserSession(data: UserLogin) {
  await axios.post(
    `${import.meta.env.VITE_SERVER_ENDPOINT}/api/sessions/login`,
    data
  );
}

export { createUser, createUserSession };
