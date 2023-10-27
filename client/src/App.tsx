import React, { FC, lazy } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/index';

const TrandingPage = lazy(() =>  import ('./pages/TrandingPage'))

import './App.css';

const App: FC = () => {

  return (
    <Provider store={store}>
      <TrandingPage/>
    </Provider>
  )
}

export default App
