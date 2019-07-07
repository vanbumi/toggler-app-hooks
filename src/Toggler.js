import React, { useState } from 'react';

function useToggle(initialVal = false) {
  const [state, setState] = useState(initialVal);
  const toggle = () => setState(!state);

  return [state, toggle];
};

function Toggler() {
  const [isHappy, ToggleIsHappy] = useToggle(true);
  const [isHearthBroken, ToggleIsHearthBroken] = useToggle(false);
  // const ToggleIsHappy = () => setIsHappy(!isHappy);
  // const ToggleIsHearthBroken = () => setIsHearthBroken(!isHearthBroken);

  return (
    <div>
      <h1>Happy or Not Happy?</h1>
      <h1 onClick={ToggleIsHappy}>{isHappy ? "😊" : "😢"}</h1>
      <h1 onClick={ToggleIsHearthBroken}>{isHearthBroken ? "💔" : "💖"}</h1>
    </div>
  )
}

export default Toggler;