import React from 'react';

import BlogList from '../components/BlogList';
import HomeLanding from '../components/HomeLanding';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [
                {
                    "title": "First blog",
                    "summary": "Hey",
                    "id": 1
                },
                {
                    "title": "Second blog",
                    "summary": "hello again",
                    "id": 2
                }
            ]
        }
    }
    render() {

        return (
            <div>
                <HomeLanding/>
                <Container>
                    <Row>
                        <Col>
                            <BlogList items={this.state.blogs}></BlogList>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;