import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHomeHook } from './hooks';

import SharedButton from '../../components/shared/SharedButton';

import Header from '../../components/Header';
import StoreState from '../../store/utils/StoreTypes';

const Home = () => {
  const { logoutRequestHandler } = useHomeHook();

  return (
    <div>
      <Header />

      <SharedButton label="LogOut" onClick={logoutRequestHandler} />
    </div>
  );
};

export default Home;
