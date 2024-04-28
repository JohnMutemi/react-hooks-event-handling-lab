// Code Keypad Component Here
import React from 'react';

export default function Keypad() {
  function handleChange(e) {
    console.log('Entering password...');
  }
  return (
    <input
      type="password"
      name="password"
      id="password"
      onChange={handleChange}
    />
  );
}
