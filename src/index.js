import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyles} from './styles/GlobalStyles';
import DataContextProvider from './contexts/DataContext';
import AuthContextProvider from './contexts/Auth';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DataContextProvider>
        <GlobalStyles />
          <App />
      </DataContextProvider>
    </AuthContextProvider>
    </React.StrictMode>,
  document.getElementById('root')
);
