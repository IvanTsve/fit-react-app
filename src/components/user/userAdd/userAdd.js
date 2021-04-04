import './userAdd.css';

import fetchData from '../../../scripts/fetchData';

function userAdd({ ...params }) {
    // let data = {
    //    "content": params.post.content,
    //    "pictureUrl": params.post.pictureUrl,
    //    "title": params.post.title,
    // }
    //  console.log(`paramsss ${JSON.stringify(params.post)}`);
    // console.log(`paramsss ${Object.entries(params)}`);
    let url = `https://fit-react-app-default-rtdb.firebaseio.com/posts.json`;

    

    function addPost(e) {
        e.preventDefault();
        const data = {
            "pictureUrl": e.target.pictureUrl.value,
            "title": e.target.title.value,
            "content": e.target.content.value,
        }
        fetchData("POST", url, data)
            .then(r => r.json())

    }

    return (
            <section className="postForm">
                <form onSubmit={addPost}>
                    <label htmlFor="pictureUrl"><strong>EpictureUrl</strong></label>
                    <input type="text" id="pictureUrl" placeholder="Enter picture url" name="pictureUrl" required />
                    <label htmlFor="title"><strong>Title</strong></label>
                    <input type="text" id="title" placeholder="Enter title" name="title" required />
                    <label htmlFor="content"><strong>Content</strong></label>
                    <textarea name="content" id="content" cols="50" rows="10" placeholder="Enter your post"></textarea>
                    <button type="submit"><strong>Post</strong></button>
                </form>
            </section>
    )
}

export default userAdd;