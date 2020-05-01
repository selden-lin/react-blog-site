import React from 'react';
import axios from 'axios';

import BlogList from '../components/BlogList';
import HomeLanding from '../components/HomeLanding';

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            error: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/blog')
            .then((res) => {
                this.setState({
                    blogs: res.data
                });
            })
            .catch((err) => {
                this.setState({
                    error: true
                })
            });
    }

    render() {
        return (
            <div>
                {
                    this.state.error &&
                    <Alert variant="danger">Issue with getting blog data try reloading page</Alert>
                }
                <HomeLanding />
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