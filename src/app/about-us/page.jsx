'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import './page.css';

export default function AboutUsPage() {
    return (
      <>
        {/* Hero */}
        <div
          className="relative h-[370px] bg-no-repeat bg-center bg-cover lg:bg-fixed w-full"
          style={{ backgroundImage: "url('https://massdrop-s3.imgix.net/marketingContent/kRAsb1PoSKew1W0QLVtW_MT3%20Solarized%20-%20Hero%20-2.png?auto=format&fm=jpg&fit=crop&w=1920&dpr=1.5&chromasub=444&q=47')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-5xl font-bold mb-4">LET'S CREATE THINGS</h1>
            <p className="text-lg mb-6">あなたの作品をもっと個性的に彩りたい</p>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded">通販</button>
              <button className="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white font-semibold rounded">実店舗</button>
            </div>
          </div>
        </div>
        
        {/* History */}
        <div className="bg-gray-100 p-6 md:p-12 min-h-screen">
            <div className="text-center mt-10 mb-12 md:mb-20">
                <h1 className="gradient-text text-5xl md:text-8xl font-bold mb-6 md:mb-10">About Us</h1>
            </div>
            <div className="mx-auto w-3/4 md:w-1/2   space-y-12">
                <div className="bg-white p-6 shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">History</h2>
                    <p className="text-gray-700">
                      Born from the passion and creativity of Wuque Studio, Meletrix brings with it the same core DNA that has brought some of the most popular boards to the enthusiast community. Focused on bringing more enthusiast-level mechanical keyboards to the market, Meletrix is devoted to bringing the best keyboards to everyone.
                    </p>
                    <p className="text-gray-700 mt-4">
                      From years of experience, the Meletrix team offers keyboard enthusiasts a chance to own highly customizable keyboards in an array of colors at all levels. The introduction of the Boog75 HE lets users experience the latest in Magnetic Switch technology in a completely prebuilt offering making getting into the space easier than ever before.
                    </p>
                    <p className="text-gray-700 mt-4">
                      Sourcing the highest quality of materials, we expanded even further in the coming years with a team of designers, hardware and software engineers, and our manufacturing facility. Allowing us to control the quality of the products and offering a more streamlined process we’re able to stay ahead of the curve and remain at the forefront of Keyboard Technology.
                    </p>
                    <p className="text-gray-700 mt-4">
                      Since inception with the Meletrix Zoom65, our first flagship board allowing a true enthusiast-level experience to everyone we’ve gone on to create the Zoom 65 v2, Zoom75, Zoom TKL, Zoom98, Zoom Pad, and expanded even further into Keycaps, Switches, and accessories. Years later, this continues to be just the start with numerous other projects in the works.
                    </p>
                </div>
            </div>
        </div>

        {/* Culture */}
        <div className="bg-gray-100 p-6 md:p-12 min-h-screen">
            <div className="text-center mt-10 mb-12 md:mb-20">
                <h1 className="gradient-text text-5xl md:text-8xl font-bold mb-6 md:mb-10">Our Culture</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mx-4 md:mx-10 rounded-lg">
                <div className="bg-white p-6 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Culture</h2>
                  <p className="text-gray-700">
                    Our company was founded in 2010 by a group of passionate engineers with a mission to revolutionize the typing experience. Since then, we have been dedicated to designing and manufacturing high-quality keyboards that enhance productivity and comfort for our customers.
                    Over the years, we have grown from a small startup to a recognized leader in the keyboard industry, continually innovating and pushing the boundaries of what's possible in keyboard design.
                  </p>
                </div>
            </div>
        </div>

        {/* Teams */}
        <TeamsSection page={'/team'}/>
      </>
    );
}

// Component for Teams section
function TeamsSection({ page }) {
    const [teamMembers, setTeamMembers] = useState([]);
    const jobPositions = ["CEO", "CO-OWNER", "LEAD DESIGNER"];

    useEffect(() => {
      const fetchTeamMembers = async () => {
        try {
          const response = await axios.get('https://randomuser.me/api/?results=3');
          setTeamMembers(response.data.results);
        } catch (error) {
          console.error('Error fetching team members:', error);
        }
      };

      fetchTeamMembers();
    }, []);

    return (
      <div className="bg-gray-100 p-6 md:p-12 min-h-screen">
        <div className="text-center mt-10 mb-12 md:mb-20">
          <h1 className="gradient-text text-5xl md:text-8xl font-bold mb-6 md:mb-10">Meet Our Teams</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mx-4 md:mx-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={member.picture.large}
                alt={`Team Member ${index + 1}`}
                className="rounded-full mx-auto mb-2"
                style={{ width: '150px', height: '150px' }}
              />
              <div className="text-center">
                <span className="block font-semibold">{`${member.name.first} ${member.name.last}`}</span>
                <span className="block text-gray-600">{jobPositions[index]}</span>
              </div>
            </div>
          ))}
        </div>
        <Link href={`${page}`} className="flex justify-center mt-6 md:justify-end mx-4 md:mx-10">
          <button className="bg-white text-gray-800 px-6 py-3 border border-transparent rounded-lg shadow hover:bg-transparent hover:text-black hover:border-black transition ease-in-out duration-200">
            Read More
          </button>
        </Link>
      </div>
    );
}
