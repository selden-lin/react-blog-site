import React from 'react';

import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class ViewBlog extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            title: props.title.trim() == "" ? "Enter title" : this.props.title,
            summary: props.summary.trim() == "" ? "Enter summary" : this.props.summary,
            content: props.content.trim() == "" ? "Blog content" : this.props.content
        }
    }
    render() {
        
        return (
            <Container fluid>
                <Row>
                    <Col md={{ offset: 3, span: 6 }}>
                        <Form>
                            <Form.Group controlId="blogTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder={this.state.title} />
                            </Form.Group>
                            <Form.Group controlId="blogSummary">
                                <Form.Label>Blog summary</Form.Label>
                                <Form.Control as="textarea" rows="4" placeholder={this.state.summary} />
                            </Form.Group>
                            <Form.Group controlId="blogContent">
                                <Form.Label>Blog content</Form.Label>
                                <Form.Control as="textarea" rows="10" placeholder={this.state.content} />
                            </Form.Group>
                            <Button>Save blog</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ViewBlog;