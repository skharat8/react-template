import axios from "axios";
import { userSchema } from "@/schemas/auth.zod";

const { VITE_SERVER_ENDPOINT: BASE_URL } = import.meta.env;
axios.defaults.withCredentials = true;

export async function getCurrentUser() {
  const res = await axios.get(`${BASE_URL}/api/users/me`);
  return userSchema.parse(res.data);
}

export async function getUser(userId: string) {
  const res = await axios.get(`${BASE_URL}/api/users/:${userId}`);
  return userSchema.parse(res.data);
}
