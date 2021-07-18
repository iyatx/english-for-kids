import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@store/index';
import { AdminCategoryCard } from '@components/admin/admin-category-card/admin-category-card';

import './admin.scss';

export const AdminPage: React.FC = () => {
  const token = useSelector((state: AppState) => state.app.token);
  const categories = useSelector((state: AppState) => state.categories.categories);

  return (
    <div className='admin'>
      <div className='admin__container container'>
        <div className='admin__categories'>
          {
            categories.map((item, index) => {
              return <AdminCategoryCard category={item} key={index} />
            })
          }
          <AdminCategoryCard spawn={true} />
        </div>
      </div>
    </div>
  );
};