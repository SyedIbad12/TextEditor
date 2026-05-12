import React, { useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import TextBox from "./components/Textbox";
import Footer from "./components/footer";

import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showalert =(message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
      if (mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = "#042743";
        showalert("Dark mode has been enabled", "Success");
      } else {
        setMode('light');   
        document.body.style.backgroundColor = "white";
        showalert("Light mode has been enabled", "Success");

      }

  }

  return ( 
    < >
    <Navbar mode= {mode}  Togglemode={toggleMode} />
    <Alert   alert={alert} />
    <div className="container my-3" >
    <TextBox heading = "Enter your Text Here" mode= {mode} showalert={showalert} />
    </div>
    <Footer />
    </>
  );
}

export default App;
