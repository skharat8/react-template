import axios from "axios";
import { userSchema, type UserLogin, type UserSignup } from "@schemas/auth.zod";

axios.defaults.withCredentials = true;

// Sessions API
export async function createUserSession(data: UserLogin) {
  await axios.post(
    `${import.meta.env.VITE_SERVER_ENDPOINT}/api/sessions/login`,
    data
  );
}

export async function deleteUserSession() {
  await axios.delete(
    `${import.meta.env.VITE_SERVER_ENDPOINT}/api/sessions/logout`
  );
}

// Users API
export async function createUser(data: UserSignup) {
  await axios.post(`${import.meta.env.VITE_SERVER_ENDPOINT}/api/users`, data);
}

export async function getCurrentUser() {
  const res = await axios.get(
    `${import.meta.env.VITE_SERVER_ENDPOINT}/api/users/me`
  );

  return userSchema.parse(res.data);
}

export async function getUser(userId: string) {
  const res = await axios.get(
    `${import.meta.env.VITE_SERVER_ENDPOINT}/api/users/:${userId}`
  );

  return userSchema.parse(res.data);
}
