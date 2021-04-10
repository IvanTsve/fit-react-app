import './postCard.css'

import { Link } from 'react-router-dom';

const postCard = (...props) => {
    let obj = props;
    // console.log(obj[0].posts);
    return (
        <>
            <div className="post" key={obj[0].posts[0]}>
                <p>{obj[0].posts[1].title}</p>
                <img src={obj[0].posts[1].pictureUrl} alt="" />
                <p className="post-introduction">{obj[0].posts[1].content}</p>
                <Link className="CTA-read editPost" to={`/user/post/${obj[0].posts[0]}/edit`} id={obj[0].posts[0]} post={obj[0].posts}>Edit post</Link>
            </div>
        </>
    );

}

export default postCard;