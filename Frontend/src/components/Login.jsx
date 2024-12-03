import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-black dark:text-white border">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <a
              href="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </a>
            <h3 className="font-bold text-lg">Login!</h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none py-1 border-2 rounded-md w-80 px-3 dark:bg-black"
                {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className="text-red-600 text-sm">This field is required</span>}
            </div>
            {/* Password */}
            <div className="mt-10 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="outline-none py-1 border-2 rounded-md w-80 px-3 dark:bg-black"
                {...register("password", { required: true })}
                />
                <br />
                {errors.password && <span className="text-red-600 text-sm">This field is required</span>}
            </div>
            {/* Login button */}
            <div className="flex justify-between mt-6">
              <button className="bg-pink-500 border-2 text-white px-4 py-2 rounded-md hover:bg-pink-600 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline cursor-pointer text-blue-500"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
