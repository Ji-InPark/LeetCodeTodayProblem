import React from 'react';
import './App.css';
import ReactGA from 'react-ga4';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Updater from "./Updater";

ReactGA.initialize('G-K9ZBLSZZFE');

function App() {
  ReactGA.send({hitType: 'pageview', page: '/'});

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/update'} element={<Updater/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
