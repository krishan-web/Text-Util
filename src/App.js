// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {
  const [darkMode,setDarkMode]=useState('light');// This is my state variable which tells me dark mode is enabled or not.
  const removebodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
  }
  
  const toggleMode=(cls)=>{
    removebodyClasses();
    document.body.classList.add('bg-' + cls);
    if(darkMode==='light'){
      setDarkMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert('Dark mode has been enabled','success');
    }else{
      setDarkMode('light');
      document.body.style.backgroundColor="white";
      showAlert('Light mode has been enabled','success');
    }
  }
  const greenColor=()=>{
       document.body.style.backgroundColor='green';
  }
  const redColor=()=>{
    document.body.style.backgroundColor='red';
}
   const [alert,setalert]=useState(null);

   const showAlert=(message,type)=>{
        setalert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
          setalert(null)
        },2000)
   }
   // alert is an object and setalert is an method.
  // IF we are using JSX inside react then you have to return only one element.
  return ( // inside return JSX is written.(JSX: is a syntax extension of js)
  <>
 
<Navbar title="TextUTils" TextForm="TextForm" AboutText="About text"  mode={darkMode} toggleMode={toggleMode} greenColor={greenColor} redColor={redColor} /> {/*We made a component Navbar.js and return it in App.js. Now we want to pass the title in Navbar.js. so we will use props.    */}
  <Alert alert={alert}/>
  <div className="container my-3">
  <TextForm showAlert={showAlert} Heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"  mode={darkMode}/> 
  <hr />
  <About/> 
  </div>
</>
 
  ); 
}

export default App;
