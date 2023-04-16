import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import {useState} from 'react'


// conditionally deciding the value of title
let k = 45;
let t;
if (k<50){
  t = "TextUtils";
}
else{
  t = "AnupamUtils";
}


// main app component
function App() {

  return (
    <div className="App">
      <Navbar title={t} about="anupam"/>
      <TextForm heading="write your text here"/>
      {/* <About/> */}
    </div>
  );
}

export default App;
