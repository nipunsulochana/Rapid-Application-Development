import React, { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isOn ? 'OFF' : 'ON'}
      </button>
    </div>
  );
}

export default Toggle;
