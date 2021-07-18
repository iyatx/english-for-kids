import React from 'react';

import './spawn-card.scss'

interface Props {
  title: string;
  setMode: (value: boolean) => void;
}

export const SpawnCard: React.FC<Props> = ({ title, setMode }) => {
  return (
    <div className='admin-card admin-card__spawn' onClick={() => setMode(true)}>
      <h3 className='admin-card__category text-md'>{ title }</h3>
      <img src='../assets/images/add.png' className='admin-card__spawn-image' alt='' />
    </div>
  )
}