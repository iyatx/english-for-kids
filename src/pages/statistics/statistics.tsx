import React, { useState } from 'react';

import './statistics.scss';
import { useDispatch } from 'react-redux';
import { getItems } from '@store/actions/statistics-actions';
import { Link } from 'react-router-dom';
import Table from '@components/statistics/table';

export const StatisticsPage: React.FC = () => {
  const dispatch = useDispatch();
  const [updateTable, setUpdateTable] = useState(false);

  const resetStatistics = () => {
    localStorage.clear();
    dispatch(getItems());
    setUpdateTable(true);
  };

  return (
    <div className="statistics">
      <div className="statistics__container container">
        <h2 className="text-lg">Statistics</h2>
        <div className="statistics__buttons">
          <button
            className="statistics__button text-xs"
            onClick={resetStatistics}
          >
            Reset Table
          </button>
          <Link to="/difficult" className="statistics__button text-xs">
            Repeat Difficult Words
          </Link>
        </div>
        <div className="statistics__table">
          <Table updateTable={updateTable} setUpdateTable={setUpdateTable} />
        </div>
      </div>
    </div>
  );
};
