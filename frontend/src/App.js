import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Body from './Body';

import Foto from './Foto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
         <Foto /> 
      </header>
      <body className="App-body">
        <Container>
            <Body />  
        </Container>
      </body>
    </div>
  );
}

export default App;
