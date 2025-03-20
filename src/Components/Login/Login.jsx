import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle, FaEye, FaEyeSlash, FaSignInAlt } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, GoogleSignIn, GithubSignIn, error, clearError } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || "/";
  
  // Clear any auth errors when component mounts or unmounts
  useEffect(() => {
    clearError();
    return () => clearError();
  }, [clearError]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        // Error is now handled in AuthProvider
      });
  };

  const handleGoogleSignIn = () => {
    GoogleSignIn()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        // Error is now handled in AuthProvider
      });
  };

  const handleGithubSignIn = () => {
    GithubSignIn()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        // Error is now handled in AuthProvider
      });
  };

  return (
    <div className="bg-amber-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-amber-600 p-6 text-white text-center">
            <h1 className="text-3xl font-bold flex items-center justify-center">
              <FaSignInAlt className="mr-2" /> Login to Chef Hut
            </h1>
            <p className="mt-2 text-amber-100">Access your account to explore delicious recipes</p>
          </div>
          
          <div className="p-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-medium">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full bg-gray-50 focus:bg-white transition-colors"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-medium">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className="input input-bordered w-full pr-10 bg-gray-50 focus:bg-white transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <label className="label">
                  <span className="label-text-alt text-right text-blue-600 hover:underline cursor-pointer">
                    Forgot password?
                  </span>
                </label>
              </div>

              {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                  <p>{error}</p>
                </div>
              )}

              <div className="form-control mt-6">
                <button className="btn btn-primary bg-amber-600 hover:bg-amber-700 border-0">
                  Login
                </button>
              </div>
            </form>

            <div className="divider my-6">OR</div>

            <div className="space-y-3">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline border-gray-300 hover:bg-gray-100 hover:border-gray-300 hover:text-current w-full text-gray-700"
              >
                <FaGoogle className="mr-2 text-xl text-red-500" /> Sign in with Google
              </button>
              
              <button
                onClick={handleGithubSignIn}
                className="btn btn-outline border-gray-300 hover:bg-gray-100 hover:border-gray-300 hover:text-current w-full text-gray-700"
              >
                <FaGithub className="mr-2 text-xl text-gray-800" /> Sign in with Github
              </button>
            </div>

            <p className="text-center mt-6 text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-amber-600 hover:underline font-medium">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
