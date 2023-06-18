import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="My-app" aboutText ="about us"/>
    <div className="container my-3">
    <TextForm heading = "Enter text to analyze"/>
    </div>
   
    </>
  );
}

export default App;
