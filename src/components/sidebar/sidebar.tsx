import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { categories as data } from '@assets/cards';
import { ILink } from '@interfaces/index';
import { AppState } from '@store/index';
import { toggleSidebar } from '@store/actions/app-action';
import { resetGame } from '@store/actions/game-actions';
import { setCurrentCategory } from '@store/actions/cards-actions';

import './sidebar.scss';

const categories = data.map((item) => {
  return {
    title: item,
    active: false,
    to: '/cards',
  };
});

const links: Array<ILink> = [
  {
    title: 'Categories',
    active: true,
    to: '/categories',
  },
  ...categories,
  {
    title: 'Statistics',
    active: false,
    to: '/statistics',
  },
];

interface Props {
  isOpened: boolean;
}

export const Sidebar: React.FC<Props> = ({ isOpened }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState(links);
  const currentCategory = useSelector(
    (state: AppState) => state.cards.currentCategory,
  );

  useEffect(() => {
    setCategories(
      categories.map((link) => {
        link.active = false;
        if (link.title === currentCategory) link.active = true;

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
