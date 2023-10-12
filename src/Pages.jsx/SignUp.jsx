import React from "react";
import Template from "../component/Template";
import login from '../assets/login.png'

function SignUp({isLogin}) {
return(
  <div className="flex justify-center items-center">
    <Template
    formType="SignUp"
    title="Join the millions learning to code with StudyNotion for free"
   descOne="Build skills for today, tomorrow, and beyond."
   descTwo="Education to future-proof your career."
   image={login }
   isLogin ={isLogin }
    />
  </div>
)
}

export default SignUp;
