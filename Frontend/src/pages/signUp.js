import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:3000/api/auth/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      navigate(from, { replace: true });
    } catch (error) {
      alert("Signup failed");
    }
  };

  const handleRegister = () => {
    navigate("/");
  };

  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
      <div className="mb-5">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h3 className=" text-center py-5 font-bold text-lg">
            Please Create An Account!
          </h3>

          {/* NAME FIELD */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">Name is required</p>
            )}
          </div>

          {/* EMAIL FIELD */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">Email is required</p>
            )}
          </div>

          {/* PASSWORD FIELD */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                Password is required
              </p>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover mt-2">
                Forgot password?
              </a>
            </label>
          </div>

          {/* SUBMIT */}
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn w-full bg-green-500 hover:bg-green-600 text-white"
              value="Sign up"
            />
          </div>

          {/* LOGIN LINK */}
          <div className="text-center my-2">
            Already have an account?
            <Link to="/signin">
              <button className="ml-2 underline">Login here</button>
            </Link>
          </div>
        </form>

        {/* SOCIAL BUTTONS */}
        <div className="text-center space-x-3">
          <button
            onClick={handleRegister}
            className="btn btn-circle bg-green-500 hover:bg-green-600 text-white"
          >
            <FaGoogle />
          </button>
          <button className="btn btn-circle bg-green-500 hover:bg-green-600 text-white">
            <FaFacebookF />
          </button>
          <button className="btn btn-circle bg-green-500 hover:bg-green-600 text-white">
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
