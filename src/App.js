import logo from './instaCaption_T.png';
import React, {useState} from 'react';
import './App.css';
import Main from './components/Main';
import Alert from './components/Alert';
import Footer from './components/Footer';

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg:  message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <div className="App">
      <Main logo={logo} showAlert={showAlert}/>
      <Footer />
      <Alert alert={alert} />
    </div>
  );
}

export default App;
