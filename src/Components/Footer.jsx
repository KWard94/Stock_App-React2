import React from 'react';
// import { Router, Link } from 'react-router-dom';

export default function Footer () {
    return(
        <div className='footer'>
            <div>
            <h4>Thank you for visiting the site!</h4>
            <h5>Contact me below:</h5>
            </div>

            <div className='professional-links'>
            <a href='https://www.linkedin.com/in/keenan-k-ward/' target='_blank' rel='noreferrer'><img src='https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1610644217~hmac=696969d2b330a3a4318e48dd14af9c56' alt='LinkedIn' height='10%'/></a>
            
            <a href='https://github.com/KWard94' target='_blank' rel='noreferrer'><img src='https://www.flaticon.com/svg/vstatic/svg/2111/2111425.svg?token=exp=1610644374~hmac=18d8fd1c56150cb152970af9b77b62e2' alt='GitHub' height='10%' /></a>
            </div>

            
        </div>
    )
};
