"use client";

import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
  //sign in with Google
  const googleProvider = new GoogleAuthProvider();
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      //console.log(result.user); // test
      route.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  //sign in with Facebook = Currently will not work until FB app is published.
  const fbProvider = new FacebookAuthProvider();
  const FacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);
      console.log(result);
      route.push("./dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  // if there is an user, no point in showing the login
  useEffect(() => {
    if (user) {
      route.push("./dashboard");
    }
  }, [route, user]);

  return (
    <div className="shadow-lg rounded-lg mt-30 p-10 text-gray-800">
      <h2 className="text-2xl font-medium">Register Today</h2>
      <div className="py-6">
        <h3 className="py-6">Choose one of the providers below to sign in:</h3>
      </div>
      <div className="flex flex-col gap-6">
        <button
          onClick={GoogleLogin}
          className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-4"
        >
          <FcGoogle className="text-3xl" />
          Sign in with Google
        </button>
        <button
          onClick={FacebookLogin}
          className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-4"
        >
          <AiFillFacebook className="text-3xl text-blue-400" />
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
}
