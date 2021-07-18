import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './admin-header.scss';
import { useDispatch } from 'react-redux';
import { setToken } from '@store/actions/app-action';
import classNames from 'classnames';

const links = [
  {
    title: 'Categories',
    to: '/admin/category',
    active: false,
  },
  {
    title: 'Words',
    to: '/admin/words',
    active: false,
  }
]

export const AdminHeader = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [items, setItems] = useState(links);

  useEffect(() => {
    const links = items.map((item) => {
      item.active = item.to === location.pathname;
      return item;
    })
    setItems(links);
  }, [location]);

  return (
    <header className='admin-header'>
      <div className='admin-header__container container'>
        <nav className='admin-header__nav nav'>
          <ul className='nav__list'>
            {
              items.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={classNames(
                  'nav__item',
                      {'nav__item--active': item.active}
                    )}
                  >
                    <Link to={item.to} className='nav__link text-sm'>{ item.title }</Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
        <div className='admin-header__auth'>
          <Link to='/categories' className='admin-header__logout text-sm' onClick={() => dispatch(setToken(''))}>Log out</Link>
        </div>
      </div>
    </header>
  );
};