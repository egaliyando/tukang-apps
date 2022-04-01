/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Navbar from '../components/Navbar';
import { UilChat } from '@iconscout/react-unicons';

function Home() {
  return (
    <div className="bg-[url('/home_bg.png')] bg-cover">
      <Navbar title="Home" />
      <div className="md:grid md:grid-cols-2 mt-20 px-10">
        <img className="md:hidden flex" src="/landing_page.png" alt="landing_page" />

        <div className="self-center">
          <p className="text-orange-500 text-5xl font-bold md:text-left text-center">Your Digital</p>
          <p className="text-purple-800 text-5xl font-bold mt-4 md:text-left text-center">Innovation</p>
          <p className="mt-5 md:w-4/5 w-full text-gray-500 font-medium md:text-left text-center">
            Tukang Apps membantu perusahaan dan brand anda semakin berkembang dengan layanan inovasi digital, bermitra dengan kami
            sekarang
          </p>
          <button className="md:ml-0 mx-auto mt-5 px-3 rounded-md py-2 bg-gray-600 text-white flex">
            <UilChat /> <span className="ml-2">Find Out More</span>
          </button>
        </div>

        <img className="md:flex hidden" src="/landing_page.png" alt="landing_page" />
      </div>
    </div>
  );
}

export default Home;
