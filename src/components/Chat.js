import React from 'react';
import './Chat.css';

const Chat = () => {
    return (
        <div className="container mt-5">
            <h2><b>Try Skype in Your Browser</b></h2>
            <p>No installations needed.</p>
            <div className="icons">
                <img src="https://secure.skypeassets.com/content/dam/scom/home-new/google_chrome_icon_(september_2014).svg" style={{ width: '50px' }} /> &nbsp;&nbsp;
                <img src="https://secure.skypeassets.com/content/dam/scom/home-new/microsoft-edge-logo-hjsadsd.svg" style={{ width: '50px' }} />
            </div>
            <button className="btn btn-primary p-3" style={{ borderRadius: '30px', width: '180px' }}><b>Chat Now</b></button>
            <div className="chat-footer" >
                <div className="chat1" style={{ display: 'flex' }}>
                    <p>Facebook</p>&nbsp;&nbsp;
                    <p>Twitter</p>&nbsp;&nbsp;
                    <p>Youtube</p>&nbsp;&nbsp;
                    <p>Blog</p>

                </div>
                <div className="chat2">
                    <i class="fas fa-phone-slash"> No emergency calls with Skype</i>
                    <p style={{fontSize:'13px'}}>Skype is not a replacement for your telephone and can't be used for emergency calling</p>
                </div>
            </div>
        </div>
    )
}

export default Chat;
