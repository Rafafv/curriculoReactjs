import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Card from './CardTextos';
import Foto from './Foto';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
         <Foto /> 
        
      </header>
      <body className="App-body">
        <Container >
            <Card />  
        </Container>
      </body>
    
    </div>
  );
}

export default App;
