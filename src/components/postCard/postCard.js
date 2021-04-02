import { Link } from 'react-router-dom';

const postCard = (...props) => {
    

    return (
        <div className="post">
            {/* <p>{title}</p>
            <img src={pictureUrl} alt="" />
            <p className="post-introduction">{content}</p> */}
            {/* <Link className="CTA-read" to={`/user/post/${id}/edit`} id={id}>ReadMore</Link> */}
        </div>
    );

}

export default postCard;