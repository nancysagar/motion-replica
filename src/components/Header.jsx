import React from 'react';
import img2 from '../images/logo.svg';
import './Header.css';  // Import a CSS file for additional styles

function Header() {
  return (
    <header className='preview__header'>
      <div className='max-w-[1240px] max-h-[54px] mx-auto flex items-center justify-between h-full px-4'>
        <div className='flex items-center space-x-4'>
          <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891?_gl=1*4zt31d*_ga*NTIwMDM1NzI5LjE3MTU5NDg2NTI.*_ga_ZKBVC1X78F*MTcxNjAwMTc2OC40LjEuMTcxNjAwMzA3Ny4wLjAuMA..&_ga=2.118775945.1202757753.1715948652-520035729.1715948652" className="inline-block h-[18px] w-[152px] text-transparent" style={{
            background: `url(${img2}) no-repeat`,
            backgroundSize: '154px 16px',
            textIndent: '-9999px'
          }}>
          </a>
        </div>
        <button className='bg-green-500 text-white px-4 py-2 rounded-md text-[12px] leading-[12px] hover:bg-green-600 transition'>
          Buy Now
        </button>
      </div>
    </header>
  );
}

export default Header;
