import './userPosts.css';
import { useEffect, useState } from 'react';

import fetchData from '../../../scripts/fetchData';
import PostCard from '../../postCard/postCard';

function UserPost(props) {

    const [posts, setPosts] = useState([]);

    let url = `https://fit-react-app-default-rtdb.firebaseio.com/posts`;
    useEffect(() => {
        fetchData("GET", `${url}.json`)
            .then(r => r.json())
            .then((r) => {
                if (r) {
                    setPosts(Object.entries(r))
                }
            })
    }, []);
    return (
        <main>
            <section className="user-posts" >
                {posts.map(x => <PostCard posts={x} key={x[0]} />)}
            </section>
        </main>

    );

}

export default UserPost;