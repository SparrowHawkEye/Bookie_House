import React, { useEffect } from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../hooks/useToken";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineGithub } from "react-icons/ai";
import Loading from "../../Shared/Loading/Loading";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [token] = useToken(user || user1);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (error) {
      toast.error(error?.code);
    } else if (error1) {
      toast.error(error1?.code);
    }
  }, [error, error1]);

  useEffect(() => {
    if (token) {
      toast.success("Login Success");
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1000);
    }
  }, [token]);

  if (loading || loading1) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex flex-row justify-center items-center space-x-3">
        <span className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white  hover:bg-white hover:shadow-lg cursor-pointer transition ease-in duration-300">
          <button onClick={() => signInWithGoogle()}>
            <FcGoogle size={"24px"} />
          </button>
        </span>
        <span className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-black  hover:bg-gray-600 hover:text-white hover:shadow-lg cursor-pointer transition ease-in duration-300">
          <button onClick={() => signInWithGithub()}>
            <AiOutlineGithub size={"24px"} />
          </button>
        </span>
      </div>
    </div>
  );
};

export default SocialLogin;
