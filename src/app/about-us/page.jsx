'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import './page.css';
import Image from 'next/image';

export default function AboutUsPage() {
    return (
      <>
        {/* Hero */}
        <div
          className="relative h-[370px] bg-no-repeat bg-center bg-cover lg:bg-fixed w-full"
          style={{ backgroundImage: "url('https://meletrix.com/cdn/shop/files/10_c242facb-5541-4c6b-9fe3-77bda7c8195c.jpg?v=1710236640&width=1800')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-6xl font-bold mb-4">DESKTOP ART CREATOR</h1>
            <p className="text-lg">Bringing you the best for all Creators</p>
          </div>
        </div>
        {/* About Us */}
        <div className="bg-gray-100 p-6 md:p-12 min-h-screen">
            <div className="text-center mt-10 mb-12 md:mb-20">
                <h1 className="gradient-text text-5xl md:text-8xl font-bold mb-6 md:mb-10">About Us</h1>
            </div>
            <div className="mx-auto w-full md:w-2/3 lg:w-1/2 space-y-12">
                <div className="bg-white p-6 shadow-md rounded-lg">
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
                    <h3 className="text-lg font-semibold text-gray-800 mt-8">Contact</h3>
                    <div className="mt-2">
                        <p className="text-gray-700">Any questions for our products:</p>
                        <p className="text-blue-600 underline">service@meletrix.com</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-gray-700">Business inquiries:</p>
                        <p className="text-blue-600 underline">business@meletrix.com</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Workplace Culture */}
        <div className="bg-gray-100 p-6 md:p-12 min-h-screen">
            <div className="text-center mt-10 mb-12 md:mb-20">
                <h1 className="gradient-text text-5xl md:text-8xl font-bold mb-6 md:mb-10">Workplace Culture</h1>
            </div>
            <div className="mx-auto w-full md:w-2/3 lg:w-1/2 rounded-lg">
                <div className="bg-white p-6 shadow-md mb-8 rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Workplace Culture</h2>
                    <p className="text-gray-700">
                        At our company, we foster a collaborative and inclusive environment where everyone is encouraged to bring their whole selves to work. We believe in continuous learning, open communication, and mutual respect, ensuring that every team member feels valued and empowered to contribute their unique talents.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Top-Notch Excellence</h3>
                        <p className="text-gray-700">
                            We strive for excellence in everything we do. Our commitment to quality and high standards ensures that we deliver the best results for our clients and stakeholders.
                        </p>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Creativity</h3>
                        <p className="text-gray-700">
                            Creativity is at the heart of our workplace culture. We encourage our team members to think outside the box, embrace new ideas, and find innovative solutions to complex problems.
                        </p>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Innovation</h3>
                        <p className="text-gray-700">
                            Innovation drives us forward. We are dedicated to staying ahead of industry trends and continuously improving our processes, products, and services to meet the evolving needs of our clients.
                        </p>
                    </div>
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
    <div className="bg-gray-100 p-6 md:p-12">
      <div className="text-center mt-10 mb-12 md:mb-20">
        <h1 className="gradient-text text-5xl md:text-8xl font-bold mb-6 md:mb-10">Meet The Team</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mx-4 md:mx-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src={member.picture.large}
              alt={`Team Member ${index + 1}`}
              width={150}
              height={150}
              className="rounded-full mx-auto mb-2"
            />
            <div className="text-center">
              <span className="block font-semibold text-gray-800 mt-8">{`${member.name.first} ${member.name.last}`}</span>
              <span className="block text-gray-600 mt-2">{jobPositions[index]}</span>
            </div>
          </div>
        ))}
      </div>
      <Link href={page} className="flex justify-center mt-6 md:justify-end mx-4 md:mx-10">
        <button className="bg-white text-gray-800 px-6 py-3 border border-transparent rounded-lg shadow hover:bg-transparent hover:text-black hover:border-black transition ease-in-out duration-200">
          Read More
        </button>
      </Link>
    </div>
  );
}
