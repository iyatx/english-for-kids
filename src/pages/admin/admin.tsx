import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '@store/index';
import { AdminCategoryCard } from '@components/admin/admin-category-card/admin-category-card';

import './admin.scss';
import SpawnCard from '@components/admin/spawn-card';
import AdminCreateCategory from '@components/admin/admin-create-category';

export const AdminPage: React.FC = () => {
  const categories = useSelector((state: AppState) => state.categories.categories);
  const [createCategoryMode, setCreateCategoryMode] = useState(false);

  return (
    <div className='admin'>
      <div className='admin__container container'>
        <div className='admin__categories'>
          {
            categories.map((item, index) => {
              return <AdminCategoryCard category={item} key={index} />
            })
          }
          {createCategoryMode && <AdminCreateCategory setCreateMode={setCreateCategoryMode} />}
          <SpawnCard title='Add Category' setMode={setCreateCategoryMode} />
        </div>
      </div>
    </div>
  );
};