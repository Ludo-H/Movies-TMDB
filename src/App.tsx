import React, { Fragment } from 'react';
import Routes from './components/Routes/Index';
import FavoritesProvider from './store/FavoritesProvider';

const App = () => {

  return (
    <FavoritesProvider>
      <Routes/>
    </FavoritesProvider>
  );
};

export default App;
