import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem('theme')) || false);
  const changeMode = () => {
    setMode(!mode)
  }
  useEffect(()=>{
    localStorage.setItem('theme', JSON.stringify(mode))
  },[mode])
  return (
    <AppContext.Provider value={{mode, changeMode}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
