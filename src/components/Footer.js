import React from 'react';
import { repeatIcon, shieldIcon, mapIcon, facebookIcon, youtubeIcon, instagramIcon, twitterIcon } from '../data/static';
import '../styles/PreFooter.css';
import '../styles/Footer.css';

const Footer = ({ footer }) => {
    return (
        <>
            <div className='preFooter'>
                <div>{repeatIcon}
                    <p><b>Hassel-free replacemnet</b> <br />10-day easy replacement policy on mi.com</p>
                </div>
                <div>{shieldIcon}
                    <p><b>100% secure payments</b> <br />We support Cards, Wallets, EMI and COD</p>
                </div>
                <div>{mapIcon}
                    <p><b>Vast service network</b> <br />1000 Mi service-centers across 600 cities</p>
                </div>
            </div>
            <div className='preFooter2'>
                <div><p>LET'S STAY IN TOUCH</p><span>Get updates on sales specials and more</span></div>
                <div>
                    <div>
                        <input type="email" name='email' placeholder='Enter Email address' />
                        <button> {`›`} </button>
                    </div>
                </div>
                <div><p>FOLLOW MI</p><span>We want to hear from you!</span></div>
                <div>
                    {facebookIcon} {youtubeIcon} {instagramIcon} {twitterIcon}
                </div>
            </div>
            <div className='footer'>
                <div>
                    <p>Support</p>
                    {footer.support.map((item, index) => (
                        <a key={index} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <p>Shop and learn</p>
                    {footer.shopAndLearn.map((item, index) => (
                        <a key={index} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <p>Retail Store</p>
                    {footer.retailStore.map((item, index) => (
                        <a key={index} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <p>About us</p>
                    {footer.aboutUS.map((item, index) => (
                        <a key={index} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <p>Contact Us</p>
                    {footer.contactUs.map((item, index) => (
                        <a key={index} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <div>
                        Chat with our Virtual AI Bot <br />
                        (24/7 Live Agent Support)
                    </div>
                    <button>CHAT NOW</button>
                </div>
            </div>
            <div className='footerBorder'>
                <div>
                    Copyright © 2010 - 2022 Xiaomi. All Rights Reserved
                </div>
            </div>
        </>
    )
}

export default Footer