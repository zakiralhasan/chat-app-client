import React from 'react';

const ReceiveMsg = (data) => {
    console.log(data.userName)
    return (
        <div className='receive-container'>
            <span>{data.message.userName}</span>
            <div className='receive-msg'>
                <p>{data.message.msg}</p>
            </div>
        </div>
    );
};

export default ReceiveMsg;