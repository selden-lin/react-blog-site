import React from 'react';
import { useParams, Link } from 'react-router-dom';

function BlogList(props) {

    let items = props.items.map((item, index) => {
        return <Link to={"/blog/"+item.id}>
            <li key={index} className="blog-list-item">
                <img src={require("../images/defaultBlogImg.jpg")}></img>

                <div>
                    <h3>Title: {item.title}</h3>
                    <p>Summary: {item.summary}</p>
                </div>
            </li>
        </Link>
    })

    return (
        <div>
            <br />
            <ul>
                {items}
            </ul>
        </div>
    )
};

export default BlogList;