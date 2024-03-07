import type { LoginData, LoginRes } from "@/types/user/type";
import http from "./http";
import { API } from "./api";

export default {
  userLogin(dto: LoginData) {
    return http.post<LoginRes>(API.USER_LOGIN, dto);
  }
};