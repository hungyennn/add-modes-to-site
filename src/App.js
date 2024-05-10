import './App.css';

import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return(
    <div className='App'>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode = {() => setDarkMode(prevMode => !prevMode)}
      />
      <Main darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;