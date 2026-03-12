import React from "react";
import {useState} from "react";
function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
  const [convert, setConvert] = useState("");
  /* You will need a function to handle a key pressed on the first input and update the state*/
  function handleConvert(edit) {
    edit.preventDefault();
    setConvert(edit.target.value);
  }
  return (
    <main >
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input onChange = {handleConvert}/>

      <p>
        <label>Here is the text in upper case</label>

        {lowerCase.handleConvert.ToUpperCase}
        <input value={convert.ToUpperCase()} disabled />
      </p>
    </main>
  );
}

export default App;
