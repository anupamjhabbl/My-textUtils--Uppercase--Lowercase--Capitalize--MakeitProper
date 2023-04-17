import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import About from './components/About'
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom';


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
let settimeout_value = setTimeout(()=>{

},1);

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  let toggleMode = () => {
    console.log("chal");
    if (mode==='light'){
      setMode('dark');
      setAlertFunc("Dark mode is enabled",'danger');
      document.title = "TextUtils DarkMode";
    }
    else{
      setMode('light');
      setAlertFunc("Light mode is enabled",'success');
      document.title = "TextUtils LightMode";
    }
  }

  function removeAlert(){
    settimeout_value = setTimeout(()=>{
      setAlert(null);
    },2000)
  }

  function setAlertFunc(message, type){
    clearTimeout(settimeout_value);
    setAlert({
      message:message,
      type:type
    })
    removeAlert();
  }
  

  return (
    <div className="App">
      <Router>
        <Navbar title={t} about="About" mode={mode} changeMode={toggleMode}/>
        <Alert alert={alert}/>
        <div>
          <Routes>
            <Route exact path="/" element={<TextForm heading="write your text here" mode={mode} alertfunc={setAlertFunc}/>}/>
            <Route exact path="/about" element={<About mode={mode}/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
