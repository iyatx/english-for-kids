import React, { useState } from 'react';
import './admin-category-card.scss';
import { ICategory } from '@interfaces/categories';
import { API } from '../../../api';
import { useDispatch } from 'react-redux';
import { setCategoriesData } from '@store/actions/categories-actions';

interface Props {
  category: ICategory;
}

export const AdminCategoryCard: React.FC<Props> = ({ category }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [categoryField, setCategoryField] = useState(category.category);

  const handleChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCategoryField(value);
  }

  const handleUpdateCategory = () => {
    setEdit(false);
    if (categoryField === category.category) return;

    const data = {
      _id: category._id,
      category: categoryField
    }

    API
      .put('/category', data)
      .then(() => {
        dispatch(setCategoriesData())
      });
  }

  const handleDeleteCategory = () => {
    const attention = confirm('Вы точно хотите удалить категорию?');
    if (attention) {
      API
        .delete(`/category/${category._id}`)
        .then(() => {
          dispatch(setCategoriesData())
        })
    }
  }

  return (
    <div className='admin__category-card admin-card'>
      { !edit
        ? (
          <>
            <button className='btn admin-card__delete' onClick={handleDeleteCategory}>&#215;</button>
            <h3 className='admin-card__category text-sm'>{category.category}</h3>
            <h4 className='admin-card__words text-sm'>Words: {category.totalCount}</h4>
            <div className='admin-card__buttons'>
              <button className='btn admin-card__button text-sm' onClick={() => setEdit(true)}>Update</button>
              <button className='btn admin-card__button text-sm'>Add word</button>
            </div>
          </>
        ) : (
          <>
            <input className='admin-card__input' type='text' value={categoryField} onChange={handleChangeCategory} />
            <div className='admin-card__buttons edit-mode'>
              <button className='btn admin-card__button admin-card__button--cancel text-sm' onClick={() => setEdit(false)}>Cancel</button>
              <button className='btn admin-card__button text-sm' onClick={handleUpdateCategory}>Update</button>
            </div>
          </>
        )}
    </div>
  );
}