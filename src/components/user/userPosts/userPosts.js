import { Link } from 'react-router-dom';
import './userPosts.css';
import { useEffect, useState } from 'react';

import fetchData from '../../../scripts/fetchData';
import { render } from '@testing-library/react';
import postCard from '../../postCard/postCard'

function UserPost(props) {
    let url = `https://fit-react-app-default-rtdb.firebaseio.com/posts.json`;
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchData("GET", url)
            .then(r => r.json())
            .then((r) => {
                setPosts(Object.entries(r))
            })
    }, []);

    // <div className="post" key={x[0]}>
    //     <p>{x[1].title}</p>
    //     <img src={x[1].pictureUrl} alt="" />
    //     <p className="post-introduction">{x[1].content}</p>
    //     <Link className="CTA-read" to="#">ReadMore</Link>
    // </div>


    // let posts = [{
    //     "content": "123",
    //     "pictureUrl": "321",
    //     "title": "asdfafds",
    // }, {
    //     "content": "123",
    //     "pictureUrl": "321",
    //     "title": "asdfafds",
    // }]

    console.log(posts);

    return (
        <section className="user-posts">

            {posts.map(post => 
                <div className="post" key={post[0]}>
                    <p>{post[1].title}</p>
                    <img src={post[1].pictureUrl} alt="" />
                    <p className="post-introduction">{post[1].content}</p>
                    <Link className="CTA-read" to="#">ReadMore</Link>
                </div>
            )}
        </section>
    );

}

export default UserPost;