/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { UilBars, UilTimes } from '@iconscout/react-unicons';

function Navbar({ title }) {
  const [width, setWidth] = useState();
  const [isShow, setIsShow] = useState(false);

  function jsUpdateSize() {
    // Get the dimensions of the viewport
    var widths = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    setWidth(widths);
  }

  useEffect(() => {
    window.onload = jsUpdateSize; // When the page first loads
    window.onresize = jsUpdateSize;
  }, []);

  return (
    <>
      <Head>
        <title>Tukang Apps - {title}</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Responsive Top Drawer */}
      {isShow ? (
        <div onClick={() => setIsShow(false)} className={`fixed block md:hidden bg-black opacity-75 w-full h-screen`}></div>
      ) : (
        ''
      )}

      <div
        className={`fixed block  md:hidden bg-white h-2/5 w-full rounded-b-lg transition-all duration-300 ${
          isShow ? 'top-0' : '-top-full'
        }`}
      >
        <ul className="text-gray-500 font-semibold px-3 pt-2 text-center">
          <button onClick={() => setIsShow(false)} className="mt-6">
            <UilTimes />
          </button>
          <li className="mt-6">Home</li>
          <li className="mt-6">Layanan</li>
          <li className="mt-6">Produk</li>
          <li className="mt-6">Pricing</li>
        </ul>
        <div className="w-full bottom-2 absolute text-center">
          <button style={{ width: '95%' }} className="bg-orange-500 py-2 px-6 rounded-full font-semibold text-white">
            Consult now
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center py-5 px-10">
        <img className="w-36" src="/logo.png" alt="logo" />

        {width > 767 && (
          <ul className="grid grid-cols-4 gap-5 text-gray-500 font-semibold">
            <li>Home</li>
            <li>Layanan</li>
            <li>Produk</li>
            <li>Pricing</li>
          </ul>
        )}

        {width < 767 ? (
          <button onClick={() => setIsShow(true)}>
            <UilBars />
          </button>
        ) : (
          <button className="bg-orange-500 py-2 px-6 rounded-full text-white font-semibold">Consult now</button>
        )}
      </div>
    </>
  );
}

export default Navbar;
