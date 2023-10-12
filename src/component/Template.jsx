import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import frame from "../assets/frame.png";

function Template({ title, descOne, descTwo, image, formType,isLogin  }) {
  return (
    <>
      <div className="flex">
        <div className="border-2 bg-gray-900">
          <header className="text-center">
            <h2>{title}</h2>
            <div>{descOne}</div>
            <div>{descTwo}</div>
          </header>
          <div className="ml-3 ">
            {formType === "login" ? <LoginForm isLogin ={isLogin } /> : <SignupForm isLogin ={isLogin } />}
            <div className="mb-3"></div>
            <span  className="ml-24 font-bold">or</span>
            <div></div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-5 ml-9 mb-7">
              Sign Up with Google
            </button>
          </div>
        </div>

        <div  className='relative w-11/12 max-w-[450px] rounded-xl ml-6'>
          <img src={frame} alt="" width={558} height={504} loading="lazy" />
          <img className='absolute top-6 right-6 rounded-xl' src={image} alt="" width={400} height={400} loading="lazy" />
        </div>
      </div>
    </>
  );
}

export default Template;
