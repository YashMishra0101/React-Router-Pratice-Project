import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";

function LoginForm({ isLogin, login }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const changeHandler = (event) => {
    setFormData((preveData) => ({
      ...preveData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    navigate("/dashboard");
    isLogin(true);
    console.log(formData);
    toast.success("Login Successfully");
  };
  return (
    <>
      <div className="mt-4">
        <form onSubmit={submitHandler}>
          <label>
            <div>
              Email Address<sup>*</sup>
            </div>
            <input
              className="w-64 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-blue-500 text-lg"
              type="email"
              name="email"
              placeholder="Enter email address"
              onChange={changeHandler}
              value={formData.email}
              autoComplete="email"
              required
            />
          </label>
          <label>
            <div>
              Password<sup>*</sup>
            </div>
            <div className="flex">
              <input
                className="w-64 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-blue-500 text-lg"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                onChange={changeHandler}
                value={formData.password}
                autoComplete="new-password"
                required
              />
              <span
                onClick={() => setShowPassword((notVisible) => !notVisible)}
                className="text-xl mt-3"
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
          </label>
          <div className="ml-20">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-5"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
