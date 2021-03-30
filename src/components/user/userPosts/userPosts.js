import {Link} from 'react-router-dom';
import './userPosts.css';

function userPost(params) {
    return (
            <section className="user-posts">
               <div className="post">
               <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
               <p className="post-introduction">lorem ipsum lorem ipsumlorem ipsum</p>
               <Link className="CTA-read" to="#">ReadMore</Link>
               </div>
               <div className="post">
               <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
               <p className="post-introduction">lorem ipsum lorem ipsumlorem ipsum</p>
               <Link className="CTA-read" to="#">ReadMore</Link>
               </div>
               
               <div className="post">
               <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
               <p className="post-introduction">lorem ipsum lorem ipsumlorem ipsum</p>
               <Link className="CTA-read" to="#">ReadMore</Link>
               </div>
               <div className="post">
               <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
               <p className="post-introduction">lorem ipsum lorem ipsumlorem ipsum</p>
               <Link className="CTA-read" to="#">ReadMore</Link>
               </div>
               <div className="post">
               <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
               <p className="post-introduction">lorem ipsum lorem ipsumlorem ipsum</p>
               <Link className="CTA-read" to="#">ReadMore</Link>
               </div>
               <div className="post">
               <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
               <p className="post-introduction">lorem ipsum lorem ipsumlorem ipsum</p>
               <Link className="CTA-read" to="#">ReadMore</Link>
               </div>
            </section>
    )
}

export default userPost;