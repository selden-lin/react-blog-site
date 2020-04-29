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
            blogs: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/blog')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            this.setState({
                blogs: data
            });
            console.log(this.state.blogs);

        })
        .catch(console.log);
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