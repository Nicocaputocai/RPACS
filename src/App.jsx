import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FormD3 from "./components/Form"
import Banner3d from "./components/Banner"
import Objetives from "./components/Objetives"
import Mision3d from "./components/Mision"
import ClimateActionSection3D from './components/ClimateActionSection';
import NavigationBar from './components/NavigationBar';
import Programs from './components/Programs.jsx';
import Background from './components/Background.jsx';
import { News } from './components/News';
import { Footer } from './components/Footer.jsx';


function App() {
  return (
    <div>
  <NavigationBar />
  <Banner3d />
  <Mision3d />
  <Objetives />
  <Programs />
  <ClimateActionSection3D />
  {/* <News /> */}

  <Background />
  <FormD3 />
  <Footer />

  </div>
  );
}

export default App;
