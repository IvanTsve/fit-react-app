import '../EditPost/editPost.css'
import UserAdd from '../user/userAdd/userAdd';
import PostCard from '../postCard/postCard';

import { useEffect, useState } from 'react';

import fetchData from '../../scripts/fetchData'
function EditPost({
    match,
    history,
}) {
    let url = `https://fit-react-app-default-rtdb.firebaseio.com/posts`;

    const [post, setPost] = useState({});
    useEffect(() => {
            fetchData("GET", `${url}/${match.params.id}.json`)
                .then(r => r.json())
                .then((r) => {
                    setPost(r);
                })

    }, []);

    return (
        <>
            <UserAdd post={post}/>
        </>

    )
}

export default EditPost