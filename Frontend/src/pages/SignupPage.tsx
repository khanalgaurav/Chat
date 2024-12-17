import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, { LoaderIcon } from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore";

type Props = {};
type FormData = {
  fullName: string;
  email: string;
  password: string;
};
const SignupPage = (props: Props) => {
  const { signUp, isSigningUp } = useAuthStore();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
  });

  const validate = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");

    return true;
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const valid = validate();
    if (valid === true) signUp(formData);
  };
  return (
    <div className="md:flex-row flex flex-col md:justify-normal justify-center border border-blue-500 h-[44rem]">
      <div className="md:w-1/2 border border-red-500 flex items-center justify-center">
        <div className="w-fit">
          <div className="text-center mb-10">
            <h1 className="text-5xl mb-2">Signup</h1>
            <h2>Get Started With Fiscord</h2>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                type="text"
                className="grow"
                placeholder="Fullname"
                value={formData.fullName}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="text"
                className="grow"
                placeholder="Email"
                value={formData.email}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                type="password"
                className="grow"
                value={formData.password}
                placeholder="********"
              />
            </label>
            <button type="submit" className="btn w-full" disabled={isSigningUp}>
              {isSigningUp ? (
                <>
                  <LoaderIcon className="animate-spin" />
                  Loading
                </>
              ) : (
                "Signup"
              )}
            </button>

            <p className="text-center">
              Already have an account ?{" "}
              <Link to={"/login"}>
                <span className="text-blue-500">Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default SignupPage;
