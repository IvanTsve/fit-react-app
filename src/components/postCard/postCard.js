import './postCard.css'

import { Link } from 'react-router-dom';

const postCard = (...props) => {
    let obj = props;
    return (
        <>
        {obj[0].posts.map(post =>
        <div className="post" key={post[0]}>
            <p>{post[1].title}</p>
            <img src={post[1].pictureUrl} alt="" />
            <p className="post-introduction">{post[1].content}</p> 
            <Link className="CTA-read editPost" to={`/user/post/${post[0]}/edit`} id={post[0]}>Edit post</Link>
        </div>
        )} 
        </>
    );

}

export default postCard;