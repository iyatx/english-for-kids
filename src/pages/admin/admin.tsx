import React, { useEffect, useState } from 'react';
import './admin.scss';
import { AdminCategoryCard } from '@components/admin/admin-category-card/admin-category-card';
import { useSelector } from 'react-redux';
import { AppState } from '@store/index';
import { Redirect } from 'react-router-dom';
import { getAllCategories } from '../../api';
import { ICategory } from '@interfaces/categories';

export const AdminPage: React.FC = () => {
  const token = useSelector((state: AppState) => state.app.token);
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    getAllCategories().then(data => setCategories(data));
  }, []);

  return (
    <div className='admin'>
      {!token && <Redirect to='/' />}
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