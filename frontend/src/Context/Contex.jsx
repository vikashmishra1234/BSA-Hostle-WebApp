import React, { createContext, useState } from 'react';

// Create a context
const MyContext = createContext();

// Create a provider component
const MyContextProvider = ({ children }) => {
  // Define your state or any values you want to provide
  const [change, setChange] = useState(false);
  const [totalStudents,setTolalStudents] = useState([])


  return (
    <MyContext.Provider value={{ change,totalStudents, setChange,setTolalStudents }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };