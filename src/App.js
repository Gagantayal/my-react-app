import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const[mode,setmode] = useState('dark')
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.background = 'grey'
    }
    else{
    setmode('light')
    document.body.style.background = 'white'
    }

  }
  return (
    <>
    <Navbar title="My-app" aboutText ="about us" mode = {mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading = "Enter text to analyze" mode = {mode}/>
    {/* <About/> */}
    </div>
   
    </>
  );
}

export default App;
