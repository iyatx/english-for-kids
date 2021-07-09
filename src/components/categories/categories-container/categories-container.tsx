import React from 'react';
import { ICategories } from '@interfaces/index';
import CategoriesCard from '@components/categories/categories-card';
import './categories-container.scss';
import { useSelector } from 'react-redux';
import { AppState } from '@store/index';
import classNames from 'classnames';

interface Props {
  categories: ICategories[];
}

export const CategoriesContainer: React.FC<Props> = ({ categories }) => {
  const mode = useSelector((state: AppState) => state.app.mode);

  return (
    <>
      <div
        className={classNames('categories__container', {
          'play-mode': mode === 'PLAY',
        })}
      >
        {categories.map((card) => (
          <CategoriesCard card={card} key={`categories-card-${card.title}`} />
        ))}
      </div>
    </>
  );
};
