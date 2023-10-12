import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";

function SignupForm({ isLogin, login }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    if (formData.confirmPassword === formData.password) {
      event.preventDefault();
      navigate("/dashboard");
      isLogin(true);
      console.log(formData);
      toast.success("Login Successfully");
    } else {
      event.preventDefault();
      toast.error("Password Not Matched");
      return;
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <button></button>
          <button></button>
        </div>
        <div className="flex">
          <label>
            <div>
              First Name<sup>*</sup>
            </div>
            <input
              className="w-45 px-3 py-1 mr-3 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-blue-500 text-lg"
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={changeHandler}
              autoComplete="given-name"
              required
            />
          </label>
          <label className="ml-5">
            <div>
              Last Name<sup>*</sup>
            </div>
            <input
              className="w-45 px-3 py-1 mr-5 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-blue-500 text-lg"
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={changeHandler}
              autoComplete="family-name"
              required
            />
          </label>
        </div>

        <label>
          <div>
            Email Address<sup>*</sup>
          </div>
          <input
            className="w-45 px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-blue-500 text-lg"
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={changeHandler}
            autoComplete="new-email"
            required
          />
        </label>
        <div className="flex ">
          <label>
            <div>
              Create Password<sup>*</sup>
            </div>
            <div className="flex">
              <input
                className="w-45 px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-blue-500 text-lg"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={changeHandler}
                autoComplete="new-password"
                required
              />
              <span
                onClick={() => setShowPassword((notVisible) => !notVisible)}
                className="text-xl mr-4"
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
          </label>

          <label>
            <div>
              Confirm Password<sup>*</sup>
            </div>
            <div className="flex">
              <input
                className="ww-45 px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-500 text-blue-500 text-lg"
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={changeHandler}
                autoComplete="new-password"
                required
              />
              <span
                onClick={() => setShowPassword((notVisible) => !notVisible)}
                className="text-xl"
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-10 ml-20"
          >
            Create Account
          </button>
        </div>
      </form>
    </>
  );
}

export default SignupForm;
