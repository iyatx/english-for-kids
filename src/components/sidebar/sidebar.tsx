import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { ILink } from '@interfaces/index';
import { toggleSidebar } from '@store/actions/app-action';
import { resetGame } from '@store/actions/game-actions';
import { setCurrentCategory } from '@store/actions/categories-actions';

import './sidebar.scss';

interface Props {
  isOpened: boolean;
  token: string;
}

const links = [
  {
    title: 'Categories',
    active: true,
    to: '/categories',
  },
  {
    title: 'Statistics',
    active: false,
    to: '/statistics',
  },
  {
    title: 'Admin',
    active: false,
    to: '/admin/category',
  }
]

export const Sidebar: React.FC<Props> = ({ isOpened, token }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [items, setItems] = useState(links);

  useEffect(() => {
    const activeItems = items.map((item) => {
      item.active = item.to === location.pathname;
      return item;
    });

    setItems(activeItems);
  }, [location]);

  const switchCategories = (link: ILink) => {
    dispatch(setCurrentCategory(link.title));
    dispatch(resetGame());
    dispatch(toggleSidebar());
  };

  return (
    <>
      <div className={classNames('sidebar', { 'sidebar-opened': isOpened })}>
        <nav className="sidebar__nav nav">
          <ul className="nav__list">
            {items.map((item, index) => {
              const navClasses = classNames('nav__item', {
                'nav__item--active': item.active,
              });
              if (item.title === 'Admin' && !token) return null;
              return (
                <li
                  className={navClasses}
                  key={index}
                  onClick={() => switchCategories(item)}
                >
                  <Link to={item.to} className="nav__link">
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};
