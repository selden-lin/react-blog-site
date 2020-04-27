import React from 'react';

import BlogList from '../components/BlogList';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [
                {
                    "name": "First blog",
                    "summary": "Hey"
                },
                {
                    "name": "Second blog",
                    "summary": "hello again"
                }
            ]
        }
    }
    render() {

        return (
            <Container>
                <Row>
                    <Col md={{offset:3, span:6}}>
                        <BlogList items={this.state.blogs}></BlogList>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;