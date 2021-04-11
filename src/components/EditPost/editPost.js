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

    function updatePost(e) {
        e.preventDefault();

        const data = {
            "pictureUrl": e.target.pictureUrl.value,
            "title": e.target.title.value,
            "content": e.target.content.value,
        }
        fetchData("PUT", `${url}/${match.params.id}.json`, data)
            .then(r => r.json())
            .then(r => {
                history.push(`/user/posts`);
            })



    }
    return (
        <main className="site-main">
            <section className="postForm">
                <form onSubmit={updatePost}>
                    <label htmlFor="pictureUrl"><strong>EpictureUrl</strong></label>
                    <input type="text" id="pictureUrl" placeholder="Enter picture url" name="pictureUrl" required defaultValue={post.pictureUrl} />
                    <label htmlFor="title"><strong>Title</strong></label>
                    <input type="text" id="title" placeholder="Enter title" name="title" required defaultValue={post.title} />
                    <label htmlFor="content"><strong>Content</strong></label>
                    <textarea name="content" id="content" cols="50" rows="10" placeholder="Enter your post" defaultValue={post.content}></textarea>
                    <button type="submit"><strong>Update</strong></button>
                </form>
            </section>
        </main>

    )
}

export default EditPost