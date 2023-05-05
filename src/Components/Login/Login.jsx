import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle} from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {
  const [user,setUser]=useState(null);
  const {signIn,GoogleSignIn,GithubSignIn}=useContext(AuthContext);
  const navigate=useNavigate();
  const location=useLocation();
  console.log(location);

  const from=location.state?.from?.pathname || '/';

  const handleLogin=(event)=>{
    event.preventDefault();

    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password)

    signIn(email,password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser);
      form.reset();
      navigate(from, {replace:true})
    })
    .catch(error=>{
      console.error(error)
    })
  }

  const handleGoogleSignIn=()=>{
    GoogleSignIn()
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser);
      setUser(loggedUser);
      navigate(from, {replace:true})
    })
    .catch(error=>{
      console.error(error);
    })
  }

  const handleGithubSignIn=()=>{
    GithubSignIn()
    .then(result=>{
      const loggedUser=result.user;
      setUser(loggedUser);
      navigate(from,{replace:true})
  })
  .catch(error=>{
      console.error(error);
  })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
          <h1 className="text-5xl font-bold">Login now!</h1>
       
        <div className="card w-full max-w-sm shadow-2xl bg-base-100 mx-24">

          <form onSubmit={handleLogin} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>

          </form>
          <h3 className="text-center mb-3">Don't have an Account? <Link to='/register' className="text-red-600"> Register</Link></h3>
        </div>

        <h3>OR</h3>
        <div >
        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary px-24"><FaGoogle className="me-2 text-xl text-green-600"></FaGoogle> Sign in with Google</button>
        </div>
        <h3>OR</h3>
        <div>
          <button onClick={handleGithubSignIn} className="btn btn-outline btn-primary px-24"><FaGithub className="me-2 text-xl text-green-600"></FaGithub> Sign in with Github</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
