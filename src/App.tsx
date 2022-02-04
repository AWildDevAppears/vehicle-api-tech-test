import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import VehicleListView from './views/VehicleListView';

import './App.css';
import SingleVehicleView from './views/SingleVehicleView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <VehicleListView/> }></Route>
          <Route path="/vehicle/:vehicleId" element={ <SingleVehicleView/> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
