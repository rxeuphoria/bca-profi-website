import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {CSSTransition} from 'react-transition-group'



function BigTitle(props) {

    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <CSSTransition in={true} appear={true} timeout={600} classNames='fade'>
                        <Col md={8} sm={12}>
                        { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
                        { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
                        { props.flavorText && <h5 className="font-weight-light text-muted">{props.flavorText}</h5> }
                        </Col>
                    </CSSTransition>
                </Row>
            </Container>
        </Jumbotron> 
    );
}

export default BigTitle;