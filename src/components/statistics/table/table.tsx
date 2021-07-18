import React, { useEffect, useState } from 'react';
import { TableHead } from './../table-head/table-head';
import { TableBody } from './../table-body/table-body';
import { getItems } from '@store/actions/statistics-actions';
import { ICardStatistics } from '@interfaces/index';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@store/index';

import './table.scss';

const TableHeadItems = [
  {
    title: '№',
    dataSort: '',
    icon: '',
  },
  {
    title: 'Category',
    dataSort: 'category',
    icon: 'icon-arrow-sort',
  },
  {
    title: 'Word',
    dataSort: 'word',
    icon: 'icon-arrow-sort',
  },
  {
    title: 'Translation',
    dataSort: 'translation',
    icon: 'icon-arrow-sort',
  },
  {
    title: 'Train Mode',
    dataSort: 'trainClick',
    icon: 'icon-arrow-sort',
  },
  {
    title: 'Play Mode',
    dataSort: 'playClick',
    icon: 'icon-arrow-sort',
  },
  {
    title: 'Fails',
    dataSort: 'fails',
    icon: 'icon-arrow-sort',
  },
  {
    title: '%',
    dataSort: 'percent',
    icon: 'icon-arrow-sort',
  },
];

interface ISortArray {
  sortBy: string;
  type: string;
}

interface Props {
  updateTable: boolean;
  setUpdateTable: (value: boolean) => void;
}

export const Table: React.FC<Props> = ({ updateTable, setUpdateTable }) => {
  const dispatch = useDispatch();
  const itemsFromStore = useSelector((state: AppState) => state.statistics.items);
  const [items, setItems] = useState<ICardStatistics[]>([]);
  const [sortArray, setSortArray] = useState<ISortArray>({
    sortBy: 'category',
    type: '',
  });

  useEffect(() => {
    dispatch(getItems());
    setUpdateTable(true);
  }, []);

  useEffect(() => {
    if (!updateTable) return;

    setItems(itemsFromStore);
    setUpdateTable(false);
  }, [updateTable]);

  useEffect(() => {
    const { sortBy } = sortArray;
    if (
      sortBy === 'category' ||
      sortBy === 'word' ||
      sortBy === 'translation'
    ) {
      sortByText(sortArray);
    }

    if (
      sortBy === 'trainClick' ||
      sortBy === 'playClick' ||
      sortBy === 'fails' ||
      sortBy === 'percent'
    ) {
      sortByNumber(sortArray);
    }
  }, [sortArray]);

  const getSortType = (element: HTMLElement): void => {
    const sort = element.dataset.sort || '';
    const sortObj = {
      sortBy: sort,
      type: 'asc',
    };

    if (element.classList.contains('desc')) {
      element.classList.remove('desc');
      sortObj.type = 'asc';
    } else {
      element.classList.add('desc');
      sortObj.type = 'desc';
    }

    setSortArray(sortObj);
  };

  const sortByText = (sortArray: ISortArray) => {
    const { type } = sortArray;
    const sortBy = sortArray.sortBy as 'category' | 'word' | 'translation';

    if (type === 'desc') {
      setItems(
        items.sort((a, b) => {
          if (a[sortBy] > b[sortBy]) return 1;
          if (a[sortBy] < b[sortBy]) return -1;
          return 0;
        }),
      );
    }

    if (type === 'asc') {
      setItems(
        items.sort((a, b) => {
          if (a[sortBy] < b[sortBy]) return 1;
          if (a[sortBy] > b[sortBy]) return -1;
          return 0;
        }),
      );
    }
  };

  const sortByNumber = (sortArray: ISortArray) => {
    const { type } = sortArray;
    const sortBy = sortArray.sortBy as
      | 'trainClick'
      | 'playClick'
      | 'fails'
      | 'percent';

    if (type === 'asc') setItems(items.sort((a, b) => a[sortBy] - b[sortBy]));
    if (type === 'desc') setItems(items.sort((a, b) => b[sortBy] - a[sortBy]));
  };

  const handleSort = (event: React.MouseEvent<HTMLElement>): void => {
    const element = event.currentTarget as HTMLElement;
    getSortType(element);
  };

  return (
    <table className="table">
      <TableHead items={TableHeadItems} handleSort={handleSort} />
      <TableBody items={items} />
    </table>
  );
};
