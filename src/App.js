import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import AngryButton from './components/AngryButton.js';
import TextRepeaterButton from './components/TextRepeaterButton.js';
import CounterButton from './components/CounterButton.js';
import LightSwitchButton from './components/LightSwitchButton.js'

function App() {

  const [light, setLight] = useState("off")
  const dark = (light === "off") ? "dark" : ""
  const switchLight = () => setLight(light === "on" ? "off" : "on")
  

  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} switchLight={switchLight} />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
