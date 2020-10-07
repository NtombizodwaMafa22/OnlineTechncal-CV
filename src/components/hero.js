import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';


function hero(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={6} sm={12}>
                        {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                        {props.subtitle && <h2 className="display-4 font-italic">{props.subtitle}</h2>}
                        {props.text && <h3 className="lead font-italic">{props.text}</h3>}
                    </Col>
                    <Col>
                        {props.picture && <img className="profilepicture" src={props.picture}></img>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default hero;