import React from 'react';
import { ICategories } from '@interfaces/index';
import CategoriesCard from '@components/categories/categories-card';
import './categories-container.scss';

interface Props {
  categories: ICategories[];
}

export const CategoriesContainer: React.FC<Props> = ({ categories }) => {
  return (
    <>
      <div className="categories__container">
        {categories.map((card) => (
          <CategoriesCard card={card} key={`categories-card-${card.title}`} />
        ))}
      </div>
    </>
  );
};
