import React, { useState } from "react";
import Template from "../component/Template";
import signup from "../assets/signup.png"

function Login({isLogin , login}) {
 return(
 <div className="flex justify-center items-center">
  <Template
   formType="login"
   title="Welcome Back"
   descOne="Build skills for today, tomorrow, and beyond."
   descTwo="Education to future-proof your career."
   image={signup}
   isLogin={isLogin}
   login={login}
  />
 </div>
 )
}

export default Login;
