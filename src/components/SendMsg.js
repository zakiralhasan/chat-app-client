import React from 'react';

const SendMsg = (data) => {
    console.log(data.userName)
    return (
        <div className='send-container'>
            <div className='send-mes'>
                <p>{data.message.msg}</p>
            </div>
        </div>
    );
};

export default SendMsg;