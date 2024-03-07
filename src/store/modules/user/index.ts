import { defineStore } from "pinia";
import { type UserInfo } from "./type";
import type { LoginData } from "@/types/user/type";
import service from "@/request/service";
const useUserStore = defineStore('user', {
  state: (): UserInfo => ({
    name: '',
    avatar: '',
    job: '',
    organization: '',
    location: '',
    email: '',
    introduction: '',
    personalWebsite: '',
    jobName: '',
    organizationName: '',
    locationName: '',
    phone: '',
    registrationDate: '',
    accountId: '',
    certification: undefined,
    role: '',
  }),

  getters: {

  },

  actions: {
    async login(loginForm: LoginData) {
      try {
        const res = await service.userLogin(loginForm);
        debugger;
      } catch (err) {
        // 清除token
      }
    }
  }
});

export default useUserStore;