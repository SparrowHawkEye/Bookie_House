import React, { useEffect, useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import auth from "../../../firebase.init";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible, AiOutlineGithub } from "react-icons/ai";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  console.log(auth);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [showPass, setShowPass] = useState(false);

  const [signInWithEmail, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [signInWithGitHub, userGithub, errorGithub] = useSignInWithGithub(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const handleEmail = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };
  const handlePassword = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Minimum 6 characters!" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmail(userInfo.email, userInfo.password);
  };

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || userGoogle || userGithub) {
      navigate(from);
    }
  }, [from, navigate, user, userGithub, userGoogle]);

  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("Sent email");
  };

  useEffect(() => {
    const error = hookError || errorGoogle || errorGithub;
    if (error) {
      switch (error?.code) {
        case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;

        case "auth/invalid-password":
          toast("Wrong password. Intruder!!");
          break;
        default:
          toast("something went wrong");
      }
    }
  }, [hookError, errorGoogle, errorGithub]);

  if (loading) {
    return <Loading />;
  }
  console.log(user, userGoogle, userGithub);
  return (
    <div className=" flex justify-center p-8 sm:px-6 lg:px-8 items-center">
      <PageTitle title="Login" />
      <div className="max-w-md w-full space-y-4 p-8 bg-gray-200 rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcom Back!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to your account
          </p>
        </div>
        <div className="flex flex-row justify-center items-center space-x-3">
          <span className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white  hover:bg-white hover:shadow-lg cursor-pointer transition ease-in duration-300">
            <button onClick={() => signInWithGoogle()}>
              <FcGoogle size={"24px"} />
            </button>
          </span>
          <span className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-black  hover:bg-gray-600 hover:text-white hover:shadow-lg cursor-pointer transition ease-in duration-300">
            <button onClick={() => signInWithGitHub()}>
              <AiOutlineGithub size={"24px"} />
            </button>
          </span>
        </div>
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
              ref={emailRef}
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
              ref={passwordRef}
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
                onClick={resetPassword}
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
