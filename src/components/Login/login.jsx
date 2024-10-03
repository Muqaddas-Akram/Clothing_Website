import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EFE8C2] relative">
      {/* Decorative Background Shapes */}
      <div
        className="absolute top-0 left-0 bg-[#6F6A42] opacity-80"
        style={{
          borderRadius: "0px 0px 270px 0px",
          width: "270px",
          height: "270px",
        }}
      ></div>
      <div
        className="absolute bg-[#6F6A42] opacity-80 bottom-0 left-0"
        style={{
          borderRadius: "0px 200px 0px 0px",
          width: "200px",
          height: "200px",
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0"
      >
        <img
          src="src/assets/images/wave.png"
          alt="Wave"
          className="object-cover"
        />
      </div>

      {/* Login Form Container */}
      <div className="relative z-10 w-full max-w-md rounded-lg p-10 m-14">
        <h2 className="text-3xl font-bold text-center text-[#272727] mb-4">
          Login
        </h2>
        <p className="text-center text-lg font-semibold mb-6 text-[#272727]">
          Please enter your Login and your Password
        </p>

        <form className="space-y-4">
          <div className="flex items-center border border-black rounded-xl px-4 py-2">
            <FaUser className="text-[#272727] mr-2" />
            <input
              type="text"
              placeholder="Username or Email"
              className="w-full outline-none text-lg text-[#272727] placeholder-[#272727] bg-transparent"
            />
          </div>
          <div className="flex items-center border border-black rounded-xl px-4 py-2 mt-4">
            <FaLock className="text-[#272727] mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none text-lg text-[#272727] placeholder-[#272727] bg-transparent"
            />
          </div>

          <div className="flex justify-end ">
            <a
              href="#"
              className="text-sm text-[#6F6A42] -mt-4 hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-[#272727] font-bold py-2 rounded-xl text-lg border-2 border-black"
          >
            Login
          </button>
        </form>

        <div className="mt-6">
          <button className="w-full flex items-center justify-center bg-neutral-700 text-[#EFE8C2] py-2 rounded-xl">
            <img
              className="h-5 w-5 mr-2"
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google"
            />
            Or, sign-in with Google
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-s font-bold text-[#272727]">
            Not a member yet?{" "}
            <a
              href="#"
              className="text-[#6F6A42] font-semibold hover:underline italic"
            >
              Register!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
