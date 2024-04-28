// Code Keypad Component Here

function Keypad() {
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

export default Keypad;
