// LoadingScreen.js
import React, { useState, useEffect } from 'react';
import "../styles/preloader.css";
import Image from 'next/image';
import Logo from "../public/assets/images/hb-logo.png"
const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeAsyncOperation = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fakeAsyncOperation();
  }, []);

  return (
    <div className={`loading-screen ${loading ? 'visible' : 'hidden'}`}>
      <Image
        src={Logo}
        alt="Hero"
        layout="responsive"
        width={400}
        height={400}
        loading="eager"
      />
    </div>
  );
};

export default LoadingScreen;
