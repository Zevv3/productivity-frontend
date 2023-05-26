import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { FirebaseAppProvider } from 'reactfire';
import 'firebase/auth';

import { Home } from './components';
import { firebaseConfig } from './firebaseConfig';
import { theme } from './Theme/themes';

import './styles.css';

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path='/' element={<Home title={'Daily Planner'} />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </FirebaseAppProvider>
  </React.StrictMode>
);

