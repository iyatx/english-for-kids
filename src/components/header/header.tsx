import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@store/index';
import { switchMode, toggleSidebar } from '@store/actions/app-action';
import { toggleGameStarted } from '@store/actions/game-actions';
import Sidebar from '@components/sidebar';

import './header.scss';

export const Header = () => {
  const isOpened = useSelector(
    (state: AppState) => state.app.sidebarVisibility,
  );
  const getToken = useSelector((state: AppState) => state.app.token);
  const dispatch = useDispatch();

  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(getToken);
  }, [getToken])

  const handlerSwitchMode = function(event: React.ChangeEvent) {
    const checkbox = event.target as HTMLInputElement;
    dispatch(switchMode(checkbox.checked ? 'PLAY' : 'TRAIN'));
    dispatch(toggleGameStarted(false));
  };

  return (
    <header className={`header ${isOpened ? 'opened' : ''}`}>
      <div className='header__container container'>
        <div
          className={`header__burger`}
          onClick={() => dispatch(toggleSidebar())}
        >
          <div className='header__burger-line' />
        </div>
        <div className='header__auth'>
          <div className='header__mode'>
            <div className='header__mode-title'>Train</div>
            <div className='header__switcher switcher'>
              <input
                id='switcher'
                className='switcher__input'
                name='switcher'
                type='checkbox'
                onChange={handlerSwitchMode}
              />
              <label className='switcher__label' htmlFor='switcher' />
            </div>
            <div className='header__mode-title'>Play</div>
          </div>
          {!token && <Link to='/login' className='btn header__login'>Log In</Link>}
        </div>
      </div>
      {isOpened && (
        <div
          className='sidebar__overlay'
          onClick={() => dispatch(toggleSidebar())}
        />
      )}
      <Sidebar isOpened={isOpened} token={token} />
    </header>
  );
};
