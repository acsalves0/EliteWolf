import React from 'react';
import Login from './pages/login/index';
import {BrowserRouter, Route} from 'react-router-dom';

import './styles/global.css'

export default function App() {
  return (
    <>
    <BrowserRouter>
     <Route exact path="/" component={Login}/>
    </BrowserRouter>
    </>
  );
}

// export default App;
