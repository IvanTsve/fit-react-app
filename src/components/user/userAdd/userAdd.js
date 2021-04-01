import './userAdd.css';
import fetch from '../../../scripts/fetch';
function userAdd(params) {
    let url = `https://fit-react-app-default-rtdb.firebaseio.com/.json`;
    function onSubmitHandler(e) {
        e.preventDefault();
        let data = {
            "pictureUrl": e.target.pictureUrl.value,
            "title": e.target.title.value,
            "content": e.target.content.value,
            "uid": localStorage.getItem('userId'),
        }
        return fetch(data, url, "POST")
        
    }

    return (
        <section className="postForm">
            <form onSubmit={onSubmitHandler}>
                <h1>Post</h1>
                <label htmlFor="pictureUrl"><strong>EpictureUrl</strong></label>
                <input type="text" id="pictureUrl" placeholder="Enter picture url" name="pictureUrl" required />
                <label htmlFor="title"><strong>title</strong></label>
                <input type="text" id="title" placeholder="Enter title" name="title" required />
                <textarea name="content" id="content" cols="50" rows="10" ></textarea>

                <button type="submit"><strong>Post</strong></button>

            </form>

        </section>
    )
}

export default userAdd;