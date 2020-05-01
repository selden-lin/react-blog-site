import React from 'react';

import { useParams } from 'react-router-dom';
import axios from 'axios';

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class ViewBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            summary: "",
            content: "",
            date: "",
            error: false,
            success: false,
            errorMsg: ""
        }

        this.editClick = this.editClick.bind(this);
    }

    componentDidMount() {
        if (this.props.id != "") {
            axios.get('http://localhost:3001/blog/' + this.props.id)
                .then((res) => {
                    this.setState({
                        title: res.data[0].title,
                        summary: res.data[0].summary,
                        content: res.data[0].content,
                        date: res.data[0].date
                    });
                })
                .catch((err) => {
                    this.setState({
                        error: true,
                        msg: "Issue with getting data for blog try reloading or checking link is correct"
                    })
                });
        }
    }

    editClick(e) {
        axios.put('http://localhost:3001/blog/' + this.props.id,
            {
                "title": this.state.title,
                "summary": this.state.summary,
                "content": this.state.content,
                "date": this.state.date,
                "_id": this.props.id
            })
            .then((res) => {
                this.setState({ 
                    success: true,
                    error: false,
                    msg: "Successfully saved changes"
                })
            })
            .catch((err) => {
                this.setState({
                    error: true,
                    msg: "Issue with saving data try resubmitting or reloading the page"
                })
            });
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={{ offset: 3, span: 6 }}>
                        <Form>
                            <Form.Group controlId="blogTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" value={this.state.title}
                                    onChange={(e) => this.setState({ title: e.target.value })} />
                            </Form.Group>
                            <Form.Group controlId="blogSummary">
                                <Form.Label>Blog summary</Form.Label>
                                <Form.Control as="textarea" rows="4" value={this.state.summary}
                                    onChange={(e) => this.setState({ summary: e.target.value })} />
                            </Form.Group>
                            <Form.Group controlId="blogContent">
                                <Form.Label>Blog content</Form.Label>
                                <Form.Control as="textarea" rows="10" value={this.state.content}
                                    onChange={(e) => this.setState({ content: e.target.value })} />
                            </Form.Group>
                            {
                                (this.state.error || this.state.success )&&
                                <Alert variant={this.state.success ? "success":"danger"}>{this.state.msg}</Alert>
                            }
                            <Button onClick={this.editClick}>Save blog</Button>
                            
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ViewBlog;