import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import ScrollableFeed from 'react-scrollable-feed';
import { io } from "socket.io-client";
import ReceiveMsg from '../components/ReceiveMsg';
import SendMsg from '../components/SendMsg';


const socket = io("http://localhost:5000")

const ChattingPage = (name) => {
    const userName = useLocation().state; // use for get joining user name through link props
    const [msg, setMsg] = useState('')  // stored new message
    const [allMsg, setAllMsg] = useState([]) // stored all message
    const ref = useRef(null);  // used for clear input field

    //this function is used for handling send message
    const handleSend = () => {
        socket.emit("chatMsg", { msg, id: socket.id, userName })
        setMsg('')
        ref.current.value = '';
    }

    useEffect(() => {
        //check joined user id
        socket.on("connect", () => {
            console.log(socket.id);
        });

        //get new sending message and stored to the (msg) state
        socket.on('receiveMsg', (data) => {
            setAllMsg([...allMsg, data])
        })

        //get all message without sending message and stored to the (allMsg) state
        socket.on('brodcastMsg', (data) => {
            setAllMsg([...allMsg, data])
        })

        //used for prevent memory leak through socket connection
        return () => {
            socket.off('connect')
        }

    }, [allMsg])


    return (
        <div className='chat-container lms-container'>
            <div className='chat-container__heading'>
                <h1>Chatting With Friends...</h1>
            </div>
            <div className='chat-container__chat-box'>
                <ScrollableFeed>
                    {
                        allMsg?.map((message, i) => {
                            return (<div key={i}>
                                {
                                    message.id === socket.id ?
                                        <SendMsg key={message?.id} message={message} ></SendMsg>
                                        :
                                        <ReceiveMsg key={message?.id} message={message} ></ReceiveMsg>
                                }

                            </div>)
                        })
                    }
                </ScrollableFeed>
            </div>
            <div className='chat-container__input-field'>
                <input type="text" ref={ref} placeholder='Enter your message' onChange={(e) => setMsg(e.target.value)} />
                <button disabled={msg === ""} onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default ChattingPage;