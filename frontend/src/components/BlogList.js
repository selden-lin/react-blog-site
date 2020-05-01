import React from 'react';
import { Link } from 'react-router-dom';

function BlogList(props) {

    let items = props.items.map((item, index) => {
        let date = new Date(item.date);
        return <Link key={index} to={"/blog/"+item._id}>
            <li className="blog-list-item">
                <img src={require("../images/defaultBlogImg.jpg")}></img>

                <div>
                    <h3>Title: {item.title}</h3>
                    <p>Summary: {item.summary}</p>
                    <p className="blog-date">Created: {date.toLocaleString()}</p>
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