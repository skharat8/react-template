import axios from "axios";
import { userSchema } from "@/schemas/auth.zod";
import type { User, UserLogin, UserSignup } from "@/schemas/auth.zod";

const { VITE_SERVER_ENDPOINT: BASE_URL } = import.meta.env;
axios.defaults.withCredentials = true;

export async function createUser(data: UserSignup): Promise<User> {
  const res = await axios.post(`${BASE_URL}/api/users`, data);
  return userSchema.parse(res.data);
}

export async function createUserSession(data: UserLogin): Promise<User> {
  const res = await axios.post(`${BASE_URL}/api/sessions/login`, data);
  return userSchema.parse(res.data);
}

export async function deleteUserSession() {
  await axios.delete(`${BASE_URL}/api/sessions/logout`);
}
