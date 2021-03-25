import {Link} from 'react-router-dom';
import './userPosts.css';

function userPost(params) {
    return (
            <section className="user-posts">
               <div className="post">
               <img src="https://www.jobycodirect.com/images/items/9thscience.jpg" alt="profile picture" />
               <p className="post-introduction">lorem ipsum lorem ipsumlorem ipsum</p>
               <Link className="CTA-read" to="#">ReadMore</Link>
               </div>
               <div className="post">
               <img src="https://www.jobycodirect.com/images/items/9thscience.jpg" alt="profile picture" />
               <p className="post-introduction">lorem ipsum lorem ipsumlorem ipsum</p>
               <Link className="CTA-read" to="#">ReadMore</Link>
               </div>
               
               <div className="post">
               <img src="https://www.jobycodirect.com/images/items/9thscience.jpg" alt="profile picture" />
               <p className="post-introduction">lorem ipsum lorem ipsumlorem ipsum</p>
               <Link className="CTA-read" to="#">ReadMore</Link>
               </div>
               <div className="post">
               <img src="https://www.jobycodirect.com/images/items/9thscience.jpg" alt="profile picture" />
               <p className="post-introduction">lorem ipsum lorem ipsumlorem ipsum</p>
               <Link className="CTA-read" to="#">ReadMore</Link>
               </div>
               <div className="post">
               <img src="https://www.jobycodirect.com/images/items/9thscience.jpg" alt="profile picture" />
               <p className="post-introduction">lorem ipsum lorem ipsumlorem ipsum</p>
               <Link className="CTA-read" to="#">ReadMore</Link>
               </div>
               <div className="post">
               <img src="https://www.jobycodirect.com/images/items/9thscience.jpg" alt="profile picture" />
               <p className="post-introduction">lorem ipsum lorem ipsumlorem ipsum</p>
               <Link className="CTA-read" to="#">ReadMore</Link>
               </div>
            </section>
    )
}

export default userPost;