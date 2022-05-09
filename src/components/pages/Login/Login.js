// import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import useToken from "../../hooks/useToken";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "./SocialLogin";


const Login = () => {
  const [showPass,setShowPass] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    generalError: "",
  });

  //authState hook
  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);

  //reset password
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const [token] = useToken(user);

  if (loading) {
    <Loading />;
  }

  //redirecting the user after login
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      toast.success("Login Success");
      setTimeout(() => {
        navigate(from);
      }, 1000);
    }
  }, [token]);

  //get email
  const handleEmail = (event) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(event.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: event.target.value });
      setErrors({ ...errors, emailError: "" });
    } else {
      setErrors({ ...errors, emailError: "Invalid Email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  //get password
  const handlePassword = (event) => {
    const passRegex = /.{6,}/;
    const validPass = passRegex.test(event.target.value);
    if (validPass) {
      setUserInfo({ ...userInfo, password: event.target.value });
      setErrors({ ...errors, passwordError: "" });
    } else {
      setErrors({
        ...errors,
        passwordError: "Password must be at least 6 characters",
      });
    }
  };

  //login auth
  const handleLogin = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  //showing error message in toast
  useEffect(() => {
    if (hookError) {
      switch (hookError?.code) {
        case "auth/invalid-email":
          toast.error("Invalid email");
          break;
        case "auth/wrong-password":
          toast.error("invalid password");
          break;
        case "auth/user-not-found":
          toast.error("user not found");
          break;
        default:
          toast.error("something went wrong");
          break;
      }
    }
  }, [hookError]);

  //reset password
  const handleResetPassword = async () => {
    if (userInfo.email) {
      await sendPasswordResetEmail(userInfo.email);
      toast("Password reset Email sent");
    } else {
      toast("Please enter your Email");
    }
  };

  return (
    <div className=" flex justify-center p-8 sm:px-6 lg:px-8 items-center">
      <PageTitle title="Login" />
      <div className="max-w-md w-full space-y-4 p-8 bg-gray-200 rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome Back!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to your account
          </p>
        </div>
       <SocialLogin/>
        <div className="flex items-center justify-center space-x-2">
          <span className="h-px w-16 bg-gray-300"></span>
          <span className="text-gray-500 font-normal">OR</span>
          <span className="h-px w-16 bg-gray-300"></span>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <input type="hidden" name="remember" value="true" />
          <div className="relative">
            <label className="text-sm  font-bold text-gray-700 tracking-wide">
              Email
            </label>
            <input
              className=" w-full text-base py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="email"
              // ref={emailRef}
              onBlur={handleEmail}
              placeholder="mail@gmail.com"
              required
            />
          </div>
          <div className="mt-8 content-center relative">
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Password
            </label>
            <input
              className="w-full content-center text-base py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type={showPass ? "text" : "password"}
              // ref={passwordRef}
              onBlur={handlePassword}
              placeholder="Enter your password"
              required
            />
            <p
              className="absolute top-8 right-3 cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            >
              {!showPass ? (
                <AiFillEye size={"24px"} color={"#555"} />
              ) : (
                <AiFillEyeInvisible size={"24px"} color={"#555"} />
              )}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded"
                required
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <button
                onClick={handleResetPassword}
                className="font-medium text-indigo-500 hover:text-red-500"
              >
                Forgot your password?
              </button>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Sign in
            </button>
          </div>
          <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
            <span>Don't have an account?</span>
            <Link
              to="/signup"
              className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
