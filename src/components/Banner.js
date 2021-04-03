import React from 'react'
import './Banner.css';

const Banner = () => {
    return (
        <div class="container mt-3">
            <div class="jumbotron" >
                <div className="row">
                    <div className="col-md-6">
                        <h1><b>Meet Now on Skype</b></h1>
                        <p>Create video calls with friends and family with one click!<br />
                           No sign ups. No downloads required.</p>
                        <h5 style={{ color: 'blue' }}><i class="far fa-play"></i> PLAY VIDEO</h5>
                        <button className="btn btn-primary" style={{ padding: '17px', borderRadius: '50px', fontWeight: 'bold' }}>Create a Free Video Call</button><br /><br />
                        <a href="https://www.skype.com/en/get-skype/" style={{ textDecoration: 'underline' }}>or download Skype</a>
                    </div>
                    <div className="col-md-6 mt-2">
                        <img src="https://secure.skypeassets.com/content/dam/scom/home-new/33grid-holiday-edition.png" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;

