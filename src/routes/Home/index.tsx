import React from 'react';
import { useHomeHook } from './hooks';

import SharedButton from '../../components/shared/SharedButton';
import Header from '../../components/Header';
const Home = () => {
  const { logoutRequestHandler } = useHomeHook();

  return (
    <>
      <div>
        <Header />
        <SharedButton label="LogOut" onClick={logoutRequestHandler} />
      </div>
    </>
  );
};

export default Home;
