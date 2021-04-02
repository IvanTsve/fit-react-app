import { Link } from 'react-router-dom';
import './userPosts.css';
import { useEffect } from 'react';

import fetchData from '../../../scripts/fetchData';

function UserPost(params) {



    let url = `https://fit-react-app-default-rtdb.firebaseio.com/posts.json`;

    useEffect(() => {
        fetchData("GET", url)
            .then(r => r.json())
            .then(r => {
                let data = Object.entries(r)
                console.log(data);
                console.log(r);
            })
    });

    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );


    return (
        <section className="user-posts">
            <ul>{listItems}</ul>,
            <div className="post">
                <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <p className="post-introduction">lorem ipsum lorem ipsumlorem ipsum</p>
                <Link className="CTA-read" to="#">ReadMore</Link>
            </div>
        </section>
    )
}

export default UserPost;