import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class ViewBlog extends React.Component {
    render() {
        let title = this.props.title.trim() == "" ? "Enter title" : this.props.title;
        let summary = this.props.summary.trim() == "" ? "Enter summary" : this.props.summary;
        let content = this.props.content.trim() == "" ? "Blog content" : this.props.content;

        return (
            <Container fluid>
                <Row>
                    <Col md={{ offset: 3, span: 6 }}>
                        <Form>
                            <Form.Group controlId="blogTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder={title} />
                            </Form.Group>
                            <Form.Group controlId="blogSummary">
                                <Form.Label>Blog content</Form.Label>
                                <Form.Control as="textarea" rows="4" placeholder={summary} />
                            </Form.Group>
                            <Form.Group controlId="blogContent">
                                <Form.Label>Blog content</Form.Label>
                                <Form.Control as="textarea" rows="10" placeholder={content} />
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