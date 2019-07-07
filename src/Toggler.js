import React, { useState } from 'react';

function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  const [isHearthBroken, setIsHearthBroken] = useState(false);
  const ToggleIsHappy = () => setIsHappy(!isHappy);
  const ToggleIsHearthBroken = () => setIsHearthBroken(!isHearthBroken);

  return (
    <div>
      <h1>Happy or Not Happy?</h1>
      <h1 onClick={ToggleIsHappy}>{isHappy ? "😊" : "😢"}</h1>
      <h1 onClick={ToggleIsHearthBroken}>{isHearthBroken ? "💔" : "💖"}</h1>
    </div>
  )
}

export default Toggler;