import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    general: "",
  });

  const [showPass, setShowPass] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [token] = useToken(user);

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

  const handleConfirmPassword = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPass: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password's don't match" });
      setUserInfo({ ...userInfo, confirmPass: "" });
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  useEffect(() => {
    if (hookError) {
      switch (hookError?.code) {
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
  }, [hookError]);

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className=" flex justify-center p-8 sm:px-6 lg:px-8 items-center">
      <PageTitle title="Login" />
      <div className="max-w-md w-full space-y-4 p-8 bg-gray-200 rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome!</h2>
          <p className="mt-2 text-sm text-gray-600">Please sign up a account</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <span className="h-px w-16 bg-gray-300"></span>
          <span className="text-gray-500 font-normal">OR</span>
          <span className="h-px w-16 bg-gray-300"></span>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
          <input type="hidden" name="remember" value="true" />
          <div className="relative">
            <label className="text-sm  font-bold text-gray-700 tracking-wide">
              Email
            </label>
            <input
              className=" w-full text-base py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="email"
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
          <div className="mt-8 content-center relative">
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Confirm Password
            </label>
            <input
              className="w-full content-center text-base py-2 px-3 rounded border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type={showPass ? "text" : "password"}
              onBlur={handleConfirmPassword}
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
                Agreed to Terms and Services
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Sign Up
            </button>
          </div>
          <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
            <span>Don't have an account?</span>
            <Link
              to="/login"
              className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
