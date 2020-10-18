import React from 'react';
import Card from 'react-bootstrap/Card';
import api from './Api';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CardTextos extends React.Component {
   
    state = {
        dados:[],
    }

    async componentDidMount(){
        const response = await api.get('');
         console.log(response.data)
        this.setState({dados:response.data});
    }

    render() {
      const {dados} = this.state;
        return (
               <div>
                   
                    {dados.map(dado =>(  
                        <Row key={dado.id} style={ { paddingBottom: '2em', paddingTop:'5em'} }>
                            <Col >      
                                <Card  style={{ boxShadow:'0px 10px 74px -22px rgba(0,0,0,0.9)',paddingBottom:'50px' }}>
                                <Card.Body>
                                <Card.Title style={{color:'#D35400'}}>{dado.titulo}</Card.Title>
                                  <Card.Text>
                                    {dado.texto}        
                                    </Card.Text>
                                  </Card.Body>
                                </Card> 
                            </Col> 
                        </Row>
                     ))}
                                        
               </div>
        );
    }
}

export default CardTextos;
   
