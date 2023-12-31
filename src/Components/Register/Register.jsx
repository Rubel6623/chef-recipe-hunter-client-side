import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
    const [error,setError]=useState('');
    const [showPassword, setShowPassword] = useState(false);
    const {createUser}=useContext(AuthContext);

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const handleRegister=(event)=>{
        event.preventDefault();
        setError('');
        const form=event.target;
        const email=form.email.value;
        const name=form.name.value;
        const password=form.password.value;
        const confirm=form.confirm.value;
        console.log(name,email,password,confirm);
        if(!/(?=.*[A-Z])/.test(password)){
          setError('Please add at least one Uppercase');
          return;
        }
        else if(!/(?=.*[!@#$&*])/.test(password)){
          setError('Please add a special character...');
          return;
        }
        else if(password!==confirm){
            setError('Your Password did not match');
            return;
        }
        else if(password.length<6){
            setError('Password must be 6 characters or longer');
            return;
        }
        else if(!/(?=.*[0-9])/.test(password)){
          setError('Please add at least two numbers');
          return;
        }
        createUser(email,password)
        .then(result=>{
          const loggedUser=result.user;
          console.log(loggedUser);
          form.reset();
        })
        .catch(error=>{
          console.log(error);
          setError(error.message);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
          <h1 className="text-5xl font-bold">Please Register !</h1>
       
        <div className="card w-full max-w-sm shadow-2xl bg-base-100 mx-24">

          <form onSubmit={handleRegister} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                name='email'
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
                type={showPassword ? "text" : "password"}
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
               <label>
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={toggleShowPassword}
                  className='mt-2'
                />
                Show Password
              </label>

              <label className="label">
                <span className="label-text mt-3">Confirm Password</span>
              </label>

              <input
                type="password"
                name='confirm'
                placeholder="password"
                className="input input-bordered"
                required
              />

            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            
          <p className='text-center text-red-600'>{error}</p>
          </form>
          <h3 className='text-center mb-3'>Already have an Account? <Link to='/login' className='text-red-600'>Login</Link></h3>
        </div>
      </div>
    </div>
    );
};

export default Register;