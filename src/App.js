import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const[mode,setmode] = useState('light')
  const[alert,setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }


  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.background = '#072754'
      showAlert("dark mode active","success")
    }
    else{
    setmode('light')
    document.body.style.background = 'white'
    showAlert("light mode active","success")
    }

  }
  return (
    <>
    <Navbar title="My-app" aboutText ="about us" mode = {mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading = "Enter text to analyze" mode = {mode}/>
    {/* <About/> */}
    </div>
   
    </>
  );
}

export default App;
