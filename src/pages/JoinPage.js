import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const JoinPage = () => {
    const [name, setName] = useState(""); //used for storing new joined user's name

    return (

        <div>
            <div className='join-container lms-container'>
                <h2>Welcome to Chat app</h2>

                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                <Link onClick={(event) => !name ? event.preventDefault() : null} to="/chat" state={name}>
                    <button >Join</button>
                </Link>

            </div>
        </div>
    );
};


export default JoinPage;