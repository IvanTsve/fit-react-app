import './userProfile.css';

import { useState, useEffect } from 'react';
import fetchUser from '../../../scripts/fetch';
import firebase from '../../../scripts/firebase';

function UserProfile(params) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${firebase.apiKey}`
    const [user, setUser] = useState({});

    let uid = localStorage.getItem('userData');
    let u = `eyJhbGciOiJSUzI1NiIsImtpZCI6InRCME0yQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGUuY29tLyIsImF1ZCI6ImZpdC1yZWFjdC1hcHAiLCJpYXQiOjE2MTcyOTA0NTAsImV4cCI6MTYxODUwMDA1MCwidXNlcl9pZCI6ImFWVlBsNnpoZTNZM1dTWGg2Q1RQOG90NHhEMDIiLCJlbWFpbCI6ImFzZGFAYWJ2LmJnIiwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIiwidmVyaWZpZWQiOmZhbHNlfQ.UrXMSNOqwvZVSMm-l-YJnO_SFR_Qrz_YNWPV0glXuWiln-TLHp-9fOHDAiPGsFbuw27zrM54e4-043yjeGbTrYjkzCZu3Z4EgvQUeHPH1vDK_uZLit-IvWnjYA77FRojOZx0FybLEpyJbxKvRIP_S40HBZx5tNVpKxhGuk1lCXv9nxmROJ6LIPUfUdYYVOLAkevNsYfANFkn0bKtKaIFGGd3RKY3kEOuOQHI_LntDEa0VUqWDDLtCiAsEk0l5NYUxE8GBdO1RAGdhG2KmNBN1A3dxnkLl4jlkUPsGaiGApc_IuVllT3yUba0aOIoPmR6Eazz4ZYXhIYtVPmFM5ANQQ`
    uid = JSON.parse(uid).idToken
    
    useEffect(() => {
        fetch(url, {
            "method": "POST",
            "idToken": JSON.stringify(uid),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(r => r.json())
            .then(r => console.log(r))
    }, [])

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