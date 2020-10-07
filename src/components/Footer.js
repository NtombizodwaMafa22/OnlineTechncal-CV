import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';
function Footer(){

    return(
    
        <footer className="mt-5">
        <Container fluid={true}>
              <Row className="border-top justify-content-between p-3">
                  <Col className="p-0" md={3} sm={12}>
                      Email : <a href="ntombizodwamafa0@gmail.com">ntombizodwamafa0@gmail.com</a>
                  </Col>
                  <Col className="p-0" md={3} >
                      Address : <p>03 Outeniqua Sonlandpark vereening 1929</p>
                  </Col>
                  <Col className="p-0 d-flex justify-content-end" md={3}>
                      This site was created by ntombi
                  </Col>
              </Row>
          </Container>
      </footer>

    );
}

export default Footer;