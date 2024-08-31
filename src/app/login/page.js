'use client'
import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "@/firebase/firebase.config";

const LoginPage = () => {

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth,provider)
        .then(()=>{
            alert('Google Sign In successful')
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        
    }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Together we will build a new better Bangladesh.
              Together we will build a new better Bangladesh.
              Together we will build a new better Bangladesh.
              Together we will build a new better Bangladesh.
              
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white btn-primary">Login</button>
              </div>
            </form>
            <button className="btn mx-8 mb-6 bg-green-600 text-white">Login With Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
