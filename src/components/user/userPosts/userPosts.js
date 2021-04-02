import { Link } from 'react-router-dom';
import './userPosts.css';
import { useEffect, useState } from 'react';

import fetchData from '../../../scripts/fetchData';
import PostCard from '../../postCard/postCard';

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
        fetchData("GET", `${url}/${e.target.id}.json`)
            .then(r => r.json())
            .then((r) => {
                setPost(r);
            })
    }

    return (
        <main>
            <section className="user-posts" >
                    <PostCard posts={posts}/>

            </section>
        </main>
    );

}

export default UserPost;