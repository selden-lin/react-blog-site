import React from 'react';

function BlogList (props) {
    let items = props.items.map((item, index) => {
        return <li key={index}>
            <h3>Title: {item.name}</h3>
            <p>Summary: {item.summary}</p>
        </li>
    })

    return (
        <ul>
            {items}
        </ul>
    )
};

export default BlogList;