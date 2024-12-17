import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
type authStore = {
  authUser: any;
  isSigningUp: boolean;
  isLoggining: boolean;
  isUpdatingProfile: boolean;
  isCheckingAuth: boolean;
  checkAuth: () => Promise<void>;
  signUp: (formdata: object) => Promise<void>;
  login: (formdata: object) => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<authStore>((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggining: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (e: any) {
      console.log("error in checkAuth: ", e.message);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signUp: async (formdata) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", formdata);
      set({ authUser: res.data });
      toast.success("Account Created Successfully");
    } catch (e: any) {
      toast.error(e.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (formdata) => {
    set({ isLoggining: true });
    try {
      const res = await axiosInstance.post("/auth/login", formdata);
      set({ authUser: res.data });
      toast.success("Logged In Successfully");
    } catch (e: any) {
      toast.error(e.response.data.message);
    } finally {
      set({ isLoggining: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged Out Sucessfully");
    } catch (e: any) {
      toast.error(e.response.data.message);
    }
  },
}));
