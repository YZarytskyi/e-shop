import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ModalPassword } from './Modals/Modals';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { authApi } from '../API/authApi';
import { setAuth } from '../Redux/Reducers/authReducer';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

const Login = () => {

  const isAuth = useSelector(state => state.auth.isAuth)

  const [modalShowPassword, setModalShowPassword] = useState(false);
  const dispatch = useDispatch()

  const handlerPassword = (e) => {
    e.preventDefault()
    setModalShowPassword(true)
  }

  const fetchAuth = async (data, setError) => {
    const response = await authApi.getAuth(data, setError)
    if (response.token) {
      dispatch(setAuth(response.token))
    }
  }

  if(isAuth) {
    return <Navigate to="/products" />
  }

  const loginSchema = yup.object().shape({
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
      fetchAuth(data, setError)
    }
    return(
      <div className="Auth-form-container w-25 mx-auto mt-5">
        <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title text-center">Login</h3>
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
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <u onClick={(e) => handlerPassword(e)} role="button">password</u>?
            </p>
            <ModalPassword
              show={modalShowPassword}
              onHide={() => setModalShowPassword(false)}
            />
          </div>
        </form>
      </div>
    );
  };
  return(
    <LoginForm />
  )
}

export default Login;