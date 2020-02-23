
import React from 'react';
// import './App.css';
import { ToastProvider } from 'react-toast-notifications';
import Routes from './routes';
import {CatsProvider} from './Context/CatsContext';


function App() {
  return (
    <ToastProvider>
    <CatsProvider>
    <Routes />
    </CatsProvider>
    </ToastProvider>
  );
}

export default App;
