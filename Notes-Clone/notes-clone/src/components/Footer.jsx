import React from 'react';
import '../stylesheets/footer.css';

function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <>
            <div className='footer'>
                <p>© Copyright {currentYear}</p>
            </div>
        </>
    )
}

export default Footer;