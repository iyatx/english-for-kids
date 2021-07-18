import React, { useState } from 'react';
import { API } from '../../../api';
import { useDispatch } from 'react-redux';
import { setCategoriesData } from '@store/actions/categories-actions';

interface Props {
  setCreateMode: (value: boolean) => void;
}

export const AdminCreateCategory: React.FC<Props> = ({ setCreateMode }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');

  const createCategory = () => {
    API
      .post('/category', { category })
      .then(() => {
        dispatch(setCategoriesData());
        setCreateMode(false);
      });
  }

  return (
    <div className='admin-card'>
      <input
        className='admin-card__input'
        type='text'
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />
      <div className='admin-card__buttons edit-mode'>
        <button
          className='btn admin-card__button admin-card__button--cancel text-sm'
          onClick={() => setCreateMode(false)}
        >
          Cancel
        </button>
        <button
          className='btn admin-card__button text-sm'
          onClick={createCategory}
        >
          Create
        </button>
      </div>
    </div>
  )
}