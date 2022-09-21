import React from 'react';
import { FooterLogo } from '../Footer';
import './App.css';
import {Header} from "./components/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <FooterLogo />
    </div>
  );
}

export default App;
