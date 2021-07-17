import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { ILink } from '@interfaces/index';
import { AppState } from '@store/index';
import { toggleSidebar } from '@store/actions/app-action';
import { resetGame } from '@store/actions/game-actions';
import { setCurrentCategory } from '@store/actions/categories-actions';

import './sidebar.scss';

interface Props {
  isOpened: boolean;
}

export const Sidebar: React.FC<Props> = ({ isOpened }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentCategory = useSelector((state: AppState) => state.categories.currentCategory);
  const allCategories = useSelector((state: AppState) => state.categories.categories);
  const [categories, setCategories] = useState<ILink[]>([]);

  useEffect(() => {
    setCategories([
      {
        title: 'Categories',
        active: true,
        to: '/categories',
      },
      ...allCategories.map((item) => {
        return {
          title: item.category,
          active: false,
          to: '/cards',
        };
      }),
      {
        title: 'Statistics',
        active: false,
        to: '/statistics',
      },
    ])
  }, [allCategories]);

  useEffect(() => {
    setCategories(
      categories.map((link) => {
        link.active = false;
        if (location.pathname === '/cards') {
          if (link.title === currentCategory?.category) link.active = true;
        } else {
          if (location.pathname === link.to) {
            link.active = true;
          }
        }

        return link;
      }),
    );
  }, [isOpened]);

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
            {categories.map((item, index) => {
              const navClasses = classNames('nav__item', {
                'nav__item--active': item.active,
              });
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
