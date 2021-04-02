import { Link } from 'react-router-dom';

const postCard = ({
    title,
    pictureUrl,
    description,
    content,
    
}) => {

    return (
        <div className="post" >
            <p>{title}</p>
            <img src={pictureUrl} alt="" />
            <p className="post-introduction">{content}</p>
            <Link className="CTA-read" to="#">ReadMore</Link>
        </div>
    );

}

export default postCard;