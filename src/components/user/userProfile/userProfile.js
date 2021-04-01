import './userProfile.css';

import { useState, useEffect } from 'react';
import fetchUser from '../../../scripts/fetch';

function UserProfile(params) {
    

    return (
        <section className="user-info">
            <div className="profile-picture">
                <img src="https://image.shutterstock.com/image-vector/lawyer-avatar-job-profession-pixel-600w-1857197077.jpg" alt="" />
            </div>


            <div className="profile-content">
                <div className="user-name">
                    <p>Jane Doe</p>
                </div>
                <div className="user-activity">
                    <p>follower</p>
                    <p>following</p>
                    <p>posts</p>
                </div>
                <div className="user-bio">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                </div>
                <div className="socials">
                    <ul>
                        <li>add link IG</li>
                        <li>add link FB</li>
                        <li>add link LI</li>
                    </ul>
                </div>
            </div>
        </section>
    )

}

export default UserProfile;