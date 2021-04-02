import { Link } from 'react-router-dom';
import './userPosts.css';
import { useEffect, useState } from 'react';

import fetchData from '../../../scripts/fetchData';


import userAdd from '../userAdd/userAdd';


function UserPost(props) {

    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});

    let url = `https://fit-react-app-default-rtdb.firebaseio.com/posts`;
    useEffect(() => {
        fetchData("GET", `${url}.json`)
            .then(r => r.json())
            .then((r) => {
                setPosts(Object.entries(r))
            })
    }, []);

    const edditPost = (e) => {
        e.preventDefault();
        // console.log(posts);
        fetchData("GET", `${url}/${e.target.id}.json`)
            .then(r => r.json())
            .then((r) => {
                setPost(r);
               
            })
        }

    return (
        <section className="user-posts">

            {posts.map(post =>
                <div className="post" key={post[0]}>
                    <p>{post[1].title}</p>
                    <img src={post[1].pictureUrl} alt="" />
                    <p className="post-introduction">{post[1].content}</p>
                    <Link className="CTA-read" to={`/user/post/${post[0]}/edit`} id={post[0]} onClick={edditPost}>Edit Post</Link>
                </div>
            )}
        </section>
    );

}

export default UserPost;