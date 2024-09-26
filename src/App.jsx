import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FormD3 from "./components/Form"
import Banner3d from "./components/Banner"
import Section3d from "./components/Section"
import Mision3d from "./components/Mision"
import ClimateActionSection3D from './components/ClimateActionSection';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div>
  <NavigationBar />
  <Banner3d />
  <Mision3d />
  <Section3d />
  <ClimateActionSection3D />
  <FormD3 />
  </div>
  );
}

export default App;
