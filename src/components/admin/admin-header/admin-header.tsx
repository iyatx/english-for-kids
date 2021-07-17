import React from 'react';
import { Link } from 'react-router-dom';

import './admin-header.scss';
import { useDispatch } from 'react-redux';
import { setToken } from '@store/actions/app-action';

export const AdminHeader = () => {
  const dispatch = useDispatch();

  return (
    <header className='admin-header'>
      <div className='admin-header__container container'>
        <nav className='admin-header__nav nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link to='/admin/category' className='nav__link text-sm'>Categories</Link>
            </li>
            <li className='nav__item'>
              <Link to='/admin/category' className='nav__link text-sm'>Words</Link>
            </li>
          </ul>
        </nav>
        <div className='admin-header__auth'>
          <Link to='/categories' className='admin-header__logout text-sm' onClick={() => dispatch(setToken(''))}>Log out</Link>
        </div>
      </div>
    </header>
  );
};