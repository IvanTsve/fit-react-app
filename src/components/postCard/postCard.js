import './postCard.css'

import { Link } from 'react-router-dom';

const postCard = (...props) => {
    let obj = props;
    let key = obj[0].posts[0];
    return (
        <>
            <div className="post">
                <p>{obj[0].posts[1].title}</p>
                <img src={obj[0].posts[1].pictureUrl} alt="" />
                <p className="post-introduction">{obj[0].posts[1].content}</p>
                <Link className="CTA-read editPost" to={`/user/post/${key}/edit`} id={key} post={obj[0].posts}>Edit post</Link>
            </div>
        </>
    );

}

export default postCard;