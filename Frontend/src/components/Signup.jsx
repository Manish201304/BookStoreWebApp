import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";


function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-[600px]">
          <div className="modal-box dark:bg-black dark:text-white border ">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link
                to="/"
                className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Login!</h3>
              {/* FullName */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="outline-none py-1 border-2 rounded-md w-96 px-3 dark:bg-black dark:text-white"
                  {...register("name",{required: true})}
                />
              <br />
              {errors.name && <span className="text-sm text-red-600">This field is required</span>}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="outline-none py-1 border-2 rounded-md w-96 px-3 dark:bg-black dark:text-white"
                  {...register("email", {required: true})}
                  />
                  <br/>
                  {errors.email && <span className="text-sm text-red-600">This field is required</span>}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="outline-none py-1 border-2 rounded-md w-96 px-3 dark:bg-black dark:text-white"
                  {...register("password", {required: true})}
                />
                <br />
                {errors.password && <span className="text-sm text-red-600">This field is required</span>}
              </div>
              {/* Login button */}
              <div className="flex justify-between mt-6">
                <button className="bg-pink-500 border-2 text-white px-4 py-2 rounded-md hover:bg-pink-600 duration-200">
                  Login
                </button>
                <p>
                  Have Account?{" "}
                  <button
                    className="underline cursor-pointer text-blue-500"
                    onClick={() => {
                      document.getElementById("my_modal_3").showModal();
                    }}
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
