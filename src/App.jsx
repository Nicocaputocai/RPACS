import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FormD3 from "./components/Form"
import Banner3d from "./components/Banner"
import Objetives from "./components/Objetives"
import Mision3d from "./components/Mision"
import ClimateActionSection3D from './components/ClimateActionSection';
import NavigationBar from './components/NavigationBar';
import { News } from './components/News';


function App() {
  return (
    <div>
  <NavigationBar />
  <Banner3d />
  <Mision3d />
  <Objetives />
  <ClimateActionSection3D />
  {/* <News /> */}
  <FormD3 />

  </div>
  );
}

export default App;
