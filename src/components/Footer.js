import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">What's new</th>
                        <th scope="col">Microsoft Store</th>
                        <th scope="col">Education</th>
                        <th scope="col">Enterprise</th>
                        <th scope="col">Developer</th>
                        <th scope="col">Company</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Surface Duo</td>
                        <td>Account Profile</td>
                        <td>Microsoft in Education</td>
                        <td>Azure</td>
                        <td>microsoft visual studio</td>
                        <td>Careers</td>
                    </tr>
                    <tr>
                        <td>Surface Laptop Go</td>
                        <td>Download Center</td>
                        <td>office for students</td>
                        <td>AppSource</td>
                        <td>Windows dev center</td>
                        <td>About Microsoft</td>
                    </tr>
                    <tr>
                        <td>Surface Pro X</td>
                        <td>Microsoft Store Support</td>
                        <td>office 365 for school</td>
                        <td>Automotive</td>
                        <td>Developer center</td>
                        <td>Company News</td>
                    </tr>
                    <tr>
                        <td>Surface Go 2</td>
                        <td>Returns</td>
                        <td>Deals for students and parents</td>
                        <td>government</td>
                        <td>microsoft developer program</td>
                        <td>Privacy at microsoft</td>
                    </tr>
                    <tr>
                        <td>Surface Book 3</td>
                        <td>Order Traking</td>
                        <td>Microsoft Azure education</td>
                        <td>Healthcare</td>
                        <td>Channel 9</td>
                        <td>Investor</td>
                    </tr>
                    <tr>
                        <td>Microsoft 365</td>
                        <td>Virtual workshop and training</td>
                        <td style={{ color: '#f5f3f3' }}>Thornton</td>
                        <td>manufacturing</td>
                        <td>office dev center</td>
                        <td>Diversity and inclusion</td>
                    </tr>
                    <tr>
                        <td>Windows 10 App</td>
                        <td>Microsoft Store Promise</td>
                        <td style={{ color: '#f5f3f3' }}>Thornton</td>
                        <td>financial Service</td>
                        <td>microsoft garage</td>
                        <td>Accessbility</td>
                    </tr>
                    <tr>
                        <td>HoloLense2</td>
                        <td>Financing</td>
                        <td style={{ color: '#f5f3f3' }}>Thornton</td>
                        <td>Retail</td>
                        <td style={{ color: '#f5f3f3' }}>Thornton</td>
                        <td>Secuirity</td>
                    </tr>
                </tbody>
                <div className="footer-rightside">
                    <div className="icons">
                        <i class="fal fa-globe mt-2" style={{ fontSize: '20px' }}> </i>
                    </div>
                    <div className="footer-selects">
                        <select className="select">
                            <option>English</option>
                            <option>Mandarin Chinese</option>
                            <option>Spanish</option>
                            <option>Bengali</option>
                            <option>Portuguese</option>
                            <option>Russian</option>
                            <option>Turkish</option>
                            <option>Korean</option>
                            <option>Dutch</option>
                            <option>Somali</option>
                            <option>Portuguese</option>
                            <option>Russian</option>
                            <option>Turkish</option>
                            <option>Korean</option>
                        </select>
                    </div>
                </div>
                {/* <div className="end-footer">
                    <p>Sitemap</p>&nbsp;&nbsp;
                    <p>Contact us</p>&nbsp;&nbsp;
                    <p>Privacy</p>&nbsp;&nbsp;
                    <p>Terms of Use</p>&nbsp;&nbsp;
                    <p>Trademark</p>&nbsp;&nbsp;
                    <p>About Our ads</p>&nbsp;&nbsp;

                </div> */}
            </table>
        </div>
    )
}

export default Footer;
