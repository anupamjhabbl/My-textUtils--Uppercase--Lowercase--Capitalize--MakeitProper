import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'


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
    </div>
  );
}

export default App;
