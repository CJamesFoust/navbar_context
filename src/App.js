import FormWrapper from './Components/FormWrapper';
import Wrapper from './Components/Wrapper';
import Navbar from './Components/Navbar';
import NameContext from './context/NameContext';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");

  return (
    <Wrapper>
      <NameContext.Provider value={{name, setName}}>
        <Navbar />
        <FormWrapper />
      </NameContext.Provider>
    </Wrapper>
  );
}

export default App;
