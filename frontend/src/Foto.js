import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import fotoPerfil from './foto.jpg';
import nome from './nome.gif';

export default function Foto(){
    return (
        <div> 
          
               <Row >
                    <Col xs lg="5" style={{ alignItems:'flex-end'}}>
                      <Image src={nome} roundedCircle />
                   
                    </Col>
                    <Col md="auto" style={{ padding: '20px' }}></Col>
                    <Col xs lg="2">
                        <Image src={fotoPerfil} roundedCircle style={{ backgroundColor:'#D4EFDF',boxShadow:'0px 20px 80px -22px rgba(0,0,0,2)' }}/>
                    </Col>
                </Row>
                <Row>
                             <h1 style={{color:'#E59866 ',fontStyle:'italic'}}>Veja meus projetos no <a href="https://github.com/Rafafv" style={{textDecoration:'none'}} >Github</a></h1>
                        </Row>
            
        </div>
    )

}