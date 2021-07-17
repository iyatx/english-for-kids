import React from 'react';
import './admin-category-card.scss';
import { ICategory } from '@interfaces/categories';

interface Props {
  category?: ICategory;
  spawn?: boolean;
}

export const AdminCategoryCard: React.FC<Props> = ({ category, spawn }) => {
  return (
    <div className='admin__category-card admin-card'>
      {category && (<>
        <button className='btn admin-card__delete'>&#215;</button>
        <h3 className='admin-card__category text-sm'>{category.category}</h3>
        <h4 className='admin-card__words text-sm'>Words: {category.totalCount}</h4>
        <div className='admin-card__buttons'>
          <button className='btn admin-card__button text-sm'>Update</button>
          <button className='btn admin-card__button text-sm'>Add word</button>
        </div>
      </>)}

      {spawn && (<>
        <h3 className='admin-card__category text-md'>Create new Category</h3>
        <img src='assets/images/add.png' className='admin-card__spawn-image' alt='' />
      </>)}
    </div>
  );
};