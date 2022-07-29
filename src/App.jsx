import React from "react"
import logo from './logo.svg';
import Row from './components/Row';
import Modal from './components/Modal';
import './App.css';
import { Grid } from './components/Grid';
import { NavLink, Route, Routes } from 'react-router-dom';

function MenuItem({ url, name }) {
  return <NavLink className="border border-cyan-400 px-4 py-2 rounded hover:bg-cyan-600" to={url}>{name}</NavLink>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learning Flexbox!
        </p>
        <div className=" text-base uppercase flex gap-2 justify-start w-full">
          <MenuItem url="/grid" name="Grid" />
          <MenuItem url="/row" name="flexbox row" />
          <MenuItem url="/flexbox" name="flexbox modal" />
        </div>
      </header>
      <div role="main" className="flex justify-center m-10 content-center">

        <Routes>
          <Route path="/" element={<Grid />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/row" element={<Row />} />
          <Route path="/flexbox" element={<Modal isOriental={true} />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
