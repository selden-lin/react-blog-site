import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function PageNav(props) {
    // Function to create link from the words from nav
    let makeLink = function(str) {
        let words = str.split(' ');
        return words.reduce((acc, item) => acc + item, "/");
    }

    let items = props.items.map((item, key) => {
        let page = window.location.href.split("/").slice(-1)[0];
        if(page == "login" || "") {
            return ""
        } else {
            return <Nav.Link href={makeLink(item)} key={key}>{item}</Nav.Link>
        }
    });


    return (<nav>
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                {items} 
            </Nav>
        </Navbar>
    </nav>);
}

export default PageNav;