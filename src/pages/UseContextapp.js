import React, { useState } from "react";

const ThemeContext=React.createContext();

export default function UseContext() {

  const[darkTheme,setdarkTheme]=useState();

  function setToggle() {

    setdarkTheme(darkTheme => !darkTheme);
  }

  return <div>
          <ThemeContext.Provider value={darkTheme}>
          <button onClick={setToggle}>Toggle</button>
          </ThemeContext.Provider>
          </div>
}