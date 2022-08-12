import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { authApi } from '../API/authApi';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { registerSuccess } from '../Redux/Reducers/authReducer'

const Register = () => {

  const isAuth = useSelector(state => state.auth.isAuth)
  const dispatch = useDispatch()

  const fetchRegister = async (data, setError) => {
    const response = await authApi.getRegister(data, setError)
    if (response.id) {
      alert('Welcome!');
      dispatch(registerSuccess()) 
    }
  }

  if(isAuth) {
    return <Navigate to="/products" />
  }

  const loginSchema = yup.object().shape({
    email: yup.string().email("Enter your email")
        .required("Required"),
    username: yup.string()
        .min(5, "Must be longer than 5 characters")
        .required("Required"),
    password: yup.string()
        .min(5, "Must be longer than 5 characters")
        .required("Required")
  });

  const LoginForm = () => {
    const { register, setError, handleSubmit, formState:{ errors } } = useForm({
      mode: 'onBlur',
      resolver: yupResolver(loginSchema)});
      const onSubmit = (data) => {
        fetchRegister(data, setError)
    }
    return(
      <div className="Auth-form-container w-25 mx-auto mt-5">
        <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title text-center">Register</h3>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                {...register("email")}
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
              <p className='text-danger'>{errors.email?.message}</p>
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                {...register("username")}
                className="form-control mt-1"
                placeholder="Enter username"
              />
              <p className='text-danger'>{errors.username?.message}</p>
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                {...register("password")}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
              <p className='text-danger'>{errors.password?.message}</p>
              <p className='text-danger'>{errors.common?.message}</p>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-dark">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };
  return(
    <LoginForm />
  )
}

export default Register;