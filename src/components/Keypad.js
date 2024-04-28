// Code Keypad Component Here
function handleChange(e) {
  console.log('Entering password...');
}
function Keypad() {
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
