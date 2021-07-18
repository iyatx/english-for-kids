import React, { useState } from 'react';

import './login.scss';
import { userLogin } from '../../../api';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '@store/actions/app-action';
import { AppState } from '@store/index';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setValid] = useState(false);
  const token = useSelector((state: AppState) => state.app.token);
  const dispatch = useDispatch();

  const validate = () => {
    if (username === '' || password === '' || password.length < 8) setValid(false);
    else setValid(true);
  };

  const handleInputUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);
    validate();
  }

  const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validate();
  }

  const submitForm = async () => {
    const token = await userLogin({username, password});
    if (token) {
      dispatch(setToken(token));
    }
  }

  return (
    <div className='login'>
      {token && <Redirect from='/login' to='/admin/category' />}
      <div className='login__container container'>
        <h3 className='login__title text-lg'>Log In</h3>
        <form className='login__form form'>
          <input
            type='text'
            placeholder='admin'
            className='form__input form__username'
            onChange={handleInputUsername}
          />
          <input
            type='password'
            placeholder='123456789'
            className='form__input form__password'
            onChange={handleInputPassword}
          />
        </form>
        <div className='login__buttons'>
          <button className='btn login__button'>Cancel</button>
          <button className='btn login__button' disabled={!isValid} onClick={submitForm}>Login</button>
        </div>
      </div>
    </div>
  )
}