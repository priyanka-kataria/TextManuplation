
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/navbar/nav';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router, Route, Routes,
//   BrowserRouter
// } from "react-router-dom";


function App () {

  const [ mode, setMode ] = useState( "light" );
  const [ text, setText ] = useState( 'Enable Light Mode' );

  const toggleMode = () => {
    if ( mode === 'light' ) {
      setMode( 'dark' )
      setText( 'Enable light Mode' )
      document.body.style.backgroundColor = 'black';
    } else {
      setMode( 'light' )
      setText( 'Enable  Dark Mode' )
      document.body.style.backgroundColor = 'white';
    }
  }



  return (
    // <BrowserRouter>
     <div className="App">
        <Navbar title="TextUtils" mode={ mode } toggleMode={ toggleMode } text={ text }></Navbar>
        <TextForm mode={ mode }></TextForm>
      </div>
      /*{ <Routes>
      <Route path='/home' element={ <TextForm mode={ mode } /> } />
          <Route path='/about' element={ <About mode={ mode } /> } />
      </Routes>
    </BrowserRouter> }*/
  );
}

export default App;
{/* <TextForm mode={ mode }></TextForm> */}