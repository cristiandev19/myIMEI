// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { AppRouter } from './routers/AppRouters';
import { AuthContext } from './auth/AuthContext';


function App() {
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider value={ { user, setUser } } >
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
