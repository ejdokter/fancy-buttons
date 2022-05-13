import React from 'react'
import { useState } from 'react'

function AngryButton(props) {

  const [anger, setAnger] = useState(0);

  function handleClick() {
    anger < 1 ? setAnger(anger + 0.1) : setAnger(0)
  }

  return (
    <button onClick={handleClick} style={{ backgroundColor: `rgba(255,0,0,${anger})`}} className="AngryButton">
      {/* When the threshold is not reached */}{anger < 1 && <span>Don't click me too much! </span>}
      {/* When the threshold is not reached */}{anger > 1 && <span>Rawr!</span>}
    </button>
  )
}

export default AngryButton;

