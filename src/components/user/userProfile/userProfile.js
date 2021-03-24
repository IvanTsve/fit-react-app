function userProfile(params) {
    return(
        <section className="user-info">
                <div className="profile-picture"><img src="https://image.shutterstock.com/image-vector/lawyer-avatar-job-profession-pixel-600w-1857197077.jpg" alt="profile picture" /></div>
                <div className="profile-content">
                    <div className="user-info">
                    <p>Jane</p>
                    <p>Doe</p>
                    </div>
                    <div className="user-activity">
                        <p>follower</p>
                        <p>following</p>
                        <p>posts</p>
                    </div>
                    <div className="user-bio">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>
                    <div className="sicials">
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

export default userProfile;