import React from 'react';
import { IconBase } from '@components/icon-base/icon-base';

interface ITableHead {
  title: string;
  dataSort: string;
  icon: string;
}

interface Props {
  items: ITableHead[];
  handleSort: (event: React.MouseEvent<HTMLElement>) => void;
}

export const TableHead: React.FC<Props> = ({ items, handleSort }) => {
  return (
    <thead>
      <tr>
        {items.map((item, index) => {
          return (
            <th onClick={handleSort} data-sort={item.dataSort} key={index}>
              {item.title}
              <span className="table__icon">
                <IconBase name={item.icon} />
              </span>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
