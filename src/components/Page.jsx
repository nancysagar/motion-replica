// src/Page.js
import React from 'react';
import './Page.css';
import logo from '../images/MotionArtEffect-logo.png';
import leaf from '../images/motionarteffect-img2.png';
import star from '../images/motionarteffect-img4.png';
import wplogo from '../images/motionarteffect-img3.png';
import qlogo from '../images/motionarteffect-img1.png';
import wand from '../images/motionarteffect-img5.png';
import section from '../images/motionarteffect-img11.png';
import page from '../images/motionarteffect-img10.png';
import browsers from '../images/motionarteffect-img8.png';
import strike from '../images/motionarteffect-img9.png';
import thumb from '../images/motionarteffect-img6.png';
import moon from '../images/motionarteffect-img7.png';

function Page() {
  return (
    <div className="page-container ">
      <div className="m-6">
        <div className="upper-content flex justify-between w-full px-6">
          <a href="https://qodematrix.com/motion-art-for-elementor/">
            <img src={logo} alt="Motion Art Effect Logo" className="w-56 h-auto" />
          </a>
          <button className="purchase-button">Purchase Now</button>
        </div>
        <main className="main-content flex flex-col items-center px-6 py-8">
          <div className="container">
            <div className="sidebar text-left">
              <p className="sidebar-text gradient-text">Transform</p>
              <p className="sidebar-text gradient-text">Your Website</p>
              <p className="sidebar-text">With Motion</p>
              <p className="sidebar-text">Art Effect</p>
            </div>
            <div className="main-text text-center">
              <p className="text-white pl-4 w-2/3 mx-auto">
                Attract Your Visitors Attention With Colorful <h1 className="gradient-text text-4xl">Motion Art Effect</h1>
              </p>
              <p id="description">
                Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.
              </p>
            </div>
          </div>
        </main>
        <section className="py-8">
          <div className="text-center">
            <p className="text-xl">Trusted by thousands of users around the world</p>
            <div className="flex justify-center space-x-20 my-10">
              <div className="flex items-center">
                <img src={leaf} alt="Leaf Icon" className="max-w-full h-auto" />
                <div className="rating">
                  <img src={star} alt="Star Icon" className="max-w-full h-auto" />
                  <p className="text-[#EEE5FFBD]">4.5 Score, 9 Reviews</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={qlogo} alt="QLogo Icon" className="max-w-full h-auto" />
                <div className="rating">
                  <img src={star} alt="Star Icon" className="max-w-full h-auto" />
                  <p className="text-[#EEE5FFBD]">4.5 Score, 9 Reviews</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={wplogo} alt="WPLogo Icon" className="max-w-full h-auto" />
                <div className="rating">
                  <img src={star} alt="Star Icon" className="max-w-full h-auto" />
                  <p className="text-[#EEE5FFBD]">4.5 Score, 9 Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="flex text-left">
            <div className="alignment">
              <h1 className="text-4xl">Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h1>
              <p className="text-md my-4 max-w-3xl text-[#EEE5FFBD]">
                Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
              </p>
              <button className="purchase-button1 mt-5">Purchase From Envanto →</button>
            </div>
            <div className="ml-40">
              <img src={wand} alt="Magic Wand" className="w-full h-auto" />
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="text-center">
            <h1 className="text-3xl leading-7">Apply On Any Section Or Enable For Whole Page</h1>
          </div>
          <div className="flex justify-around mt-8">
            <div className="page text-left border-2">
              <h1 className="text-2xl mb-2">Apply On Section</h1>
              <p className="text-[#EEE5FFBD]">Apply on section is a game-changer, unparalleled way to manage applications directly from your website.</p>
              <img src={section} alt="Section Icon" className="w-50 h-auto mx-auto mt-4" />
            </div>
            <div className="page1 text-left border-2">
              <h1 className="text-2xl mb-2">Apply On Page</h1>
              <p className="text-[#EEE5FFBD]">Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
              <img src={page} alt="Page Icon" className="w-50 h-auto mx-auto mt-4" />
            </div>
          </div>
          <div className="page text-center mt-8">
            <h1 className="text-2xl mb-4">Supported by All Popular Browsers</h1>
            <p className="text-[#EEE5FFBD] w-1/2 mx-auto">Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
            <img src={browsers} alt="Browsers Icon" className="w-50 h-auto mx-auto mt-4" />
          </div>
        </section>
        <section className="py-0">
          <div className="w-1/2 mx-auto text-center">
            <h1 className="text-4xl max-w-2xl mb-4 font-sora">An All-Round Plugin With Powerful Features</h1>
            <p className="text-[#EEE5FFBD] max-w-2xl">
              Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.
            </p>
          </div>
          <div className="flex justify-around mt-8">
            <div className="page2">
              <img src={strike} alt="Light Weight Icon" />
              <h2 className="text-2xl mb-2">Light Weight</h2>
              <p className="text-[#EEE5FFBD]">Motion Art for Elementor is designed to be lightweight.</p>
            </div>
            <div className="page2">
              <img src={thumb} alt="Responsive Icon" />
              <h2 className="text-2xl mb-2">100% Responsive</h2>
              <p className="text-[#EEE5FFBD]">Create a consistent visual experience across all devices.</p>
            </div>
            <div className="page2">
              <img src={moon} alt="User Friendly Icon" />
              <h2 className="text-2xl mb-2">User Friendly Interface</h2>
              <p className="text-[#EEE5FFBD]">Ensure a smooth experience for both applicants and administrators.</p>
            </div>
          </div>
        </section>
        <footer className="flex">
          <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
          <div className="flex">
            <a href="https://qodematrix.com/docs/motion-art-for-elementor/">Documentation</a>
            <a href="https://support.qodematrix.com/login">Support</a>
          </div>
        </footer>
      </div>
    </div>
    
  );
}

export default Page;
