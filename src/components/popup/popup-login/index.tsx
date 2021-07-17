import React from 'react';

export const PopupLogin: React.FC = () => {
    return (
      <div className='popup'>
        <div className='popup__container'>
          <h3 className='popup__title'>Log In</h3>
          <form className='popup__form form'>
            <input type='text' className='form__username' />
            <input type='password' className='form__password' />
          </form>
          <div className='popup__buttons'>
            <button className='btn popup__button'>Cancel</button>
            <button className='btn popup__button'>Login</button>
          </div>
        </div>
      </div>
    )
};