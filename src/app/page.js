'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import HeroCarousel from '../components/heroCarousel';
import Image from 'next/image';
import './page.css';


export default function Home() {
  return (
    <div className="body bg-gray-100">
      <HeroCarousel />

      <div className="bg-gray-100">
        <div className="text-center pt-10 mb-20">
          <h1 className="gradient-text text-8xl font-bold mb-10 mt-10">Explore Our Catalogue</h1>
        </div>

        {/* Keyboard Section */}
        <SectionWithImage
          imageUrl="https://meletrix.com/cdn/shop/files/Zoom75_Morandi_RGB_CaseColors.png?v=1717062859&width=1000"
          title="Our Keyboard"
        />

        {/* Products Grid */}
        <ProductGrid products={keyboardProducts} textColor="white" page="/product" />

        {/* Keycaps Section */}
        <SectionWithImage
          imageUrl="https://meletrix.com/cdn/shop/files/blue_oasis.jpg?v=1698825793&width=1800"
          title="Our Keycaps"
        />

        {/* More Products Grid */}
        <ProductGrid products={keycapProducts} textColor="white" page="/product" />

        {/* Switches Section */}
        <SectionWithImage
          imageUrl="https://meletrix.com/cdn/shop/files/DSC04067_f757dfb6-9a39-4031-a056-98e876c374bf.jpg?v=1714374933&width=1000"
          title="Our Switches"
        />

        {/* More Products Grid */}
        <ProductGrid products={switchProducts} textColor="gray-700" page="/product" />

        {/* History & Culture Section */}
        <HistoryAndCultureSection page="/about-us" />

        {/* Teams Section */}
        <TeamsSection page="/team" />

        {/* Customer Testimony */}
        <TestimonySection />
      </div>
    </div>
  );
}

// Component for sections with image and title
function SectionWithImage({ imageUrl, title }) {
  return (
    <div className="relative h-[440px] overflow-hidden mt-20">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
        {title}
      </div>
    </div>
  );
}

// Component for product grid
function ProductGrid({ products, textColor, page }) {
  return (
    <div className="mt-12 mx-20">
      <div className="grid grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="relative bg-white">
            <Image src={product.imageUrl} alt={product.name} width={500} height={500} className="w-full" />
            <div className={`absolute bottom-0 left-0 right-0 text-${textColor} px-6 py-4`}>
              <span className="text-md">{product.name}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-5 mx-0">
        <Link href={page}>
          <button className="bg-white text-gray-700 px-6 py-3 border border-transparent rounded-lg shadow hover:bg-transparent hover:text-black hover:border-black transition ease-in-out duration-200">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}

// Example products data (you can replace with your actual data)
const keyboardProducts = [
  { name: 'Zoom98', imageUrl: 'https://meletrix.com/cdn/shop/files/82d4aea2-1dd4-4fe7-b4d7-783e110a1b21.jpg?v=1698820072&width=1200' },
  { name: 'ZoomTKL', imageUrl: 'https://meletrix.com/cdn/shop/files/6_b97b1e3e-de0f-4744-a6f5-e5cc19f40c41.jpg?v=1698903899&width=1200' },
  { name: 'Zoom75', imageUrl: 'https://meletrix.com/cdn/shop/files/20cc9d32-08a9-428c-8ab6-de2f64fc072b.jpg?v=1698819720&width=1200' },
  { name: 'Zoom65', imageUrl: 'https://meletrix.com/cdn/shop/files/10_b40010fb-c6ff-4265-9a01-18b78e307aec.jpg?v=1716447258&width=1200' }
];

const keycapProducts = [
  { name: 'WS Blue Oasis', imageUrl: 'https://meletrix.com/cdn/shop/files/10001.jpg?v=1698824837&width=400' },
  { name: 'WS Lavender Bliss', imageUrl: 'https://meletrix.com/cdn/shop/files/10001_596d9492-132a-4216-9601-607a6ab461d8.jpg?v=1698825500&width=400' },
  { name: 'WS Sunset Bliss', imageUrl: 'https://meletrix.com/cdn/shop/files/10004.jpg?v=1698824837&width=400' },
  { name: 'WS Gray Skies', imageUrl: 'https://meletrix.com/cdn/shop/files/10003.jpg?v=1698824837&width=400' }
];

const switchProducts = [
  { name: 'WS Brown', imageUrl: 'https://meletrix.com/cdn/shop/products/5_30be46b7-71df-478d-b7c2-da7b2ad893df.jpg?v=1678959733&width=1000' },
  { name: 'WS Silent Linear', imageUrl: 'https://meletrix.com/cdn/shop/products/5_fad2e0f5-30e6-4387-9e6e-49c1ee0da3f2.jpg?v=1678959719&width=1000' },
  { name: 'WS Red', imageUrl: 'https://meletrix.com/cdn/shop/products/4_a16d2056-7122-4e3c-beec-0662673e12bc.jpg?v=1678959743&width=1000' },
  { name: 'WS Yellow', imageUrl: 'https://meletrix.com/cdn/shop/products/4_9959b5f5-f59a-4a20-afa5-5e5d57d64803.jpg?v=1678959753&width=1000' }
];

// Component for History & Culture section
function HistoryAndCultureSection({ page }) {
  const images = [
    "https://meletrix.com/cdn/shop/files/4_9fac2eef-f0b1-405b-95b0-5053391c99ef.jpg?v=1698903478&width=1000",
    "https://meletrix.com/cdn/shop/files/6_1_ef28b394-7466-462b-bc4e-1a557c559441.jpg?v=1698904156&width=1000",
    "https://meletrix.com/cdn/shop/files/3_8b4003cb-c8e4-4f85-8e8b-689a3cf8d95a.jpg?v=1698904359&width=1000",
    "https://meletrix.com/cdn/shop/files/1_21524e5e-98ac-4f4c-b20b-6c34ce2bed31.jpg?v=1716447304&width=1000",
    "https://meletrix.com/cdn/shop/files/DSC03403.jpg?v=1698905912&width=1000",
    "https://meletrix.com/cdn/shop/products/7_b52ae3fa-faef-45b4-aed0-92c9312bec4a_1024x1024.jpg?v=1680458032"
  ];

  return (
    <div className="bg-gray-100 p-6 md:p-12 min-h-screen">
      <div className="text-center mt-10 mb-12 md:mb-20">
        <h1 className="gradient-text text-5xl md:text-8xl font-bold mb-6 md:mb-10">History & Culture</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mx-4 md:mx-10 rounded-lg">
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">History</h2>
          <p className="text-gray-700">
             Born from the passion and creativity of Wuque Studio, Meletrix carries the same core DNA that made some of the most popular boards in the enthusiast community. Dedicated to offering more enthusiast-level mechanical keyboards, Meletrix aims to bring the best keyboards to everyone.
          </p>
        </div>
  
        {images.map((image, index) => (
          <div key={index} className="bg-white shadow-md overflow-hidden">
            <Image
              src={image}
              alt={`Image ${index}`}
              width={500}
              height={500}
              className="object-cover h-64 md:h-full w-full"
            />
          </div>
        ))}
        <div className="bg-white p-6 shadow-md h-[auto]">
          <h2 className="md:mt-0 text-xl font-semibold text-gray-800 mb-4">Culture</h2>
          <p className="text-gray-700">
          Our company promotes a collaborative and inclusive environment where everyone can be their true selves. We prioritize continuous learning, open communication, and mutual respect, ensuring every team member feels valued and empowered to share their unique talents.
          </p>
        </div>
      </div>
      <Link href={page} className="flex justify-center mt-6 md:justify-end mx-4 md:mx-10">
        <button className="bg-white text-gray-700 px-6 py-3 border border-transparent rounded-lg shadow hover:bg-transparent hover:text-black hover:border-black transition ease-in-out duration-200">
          Read More
        </button>
      </Link>
    </div>
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


function TestimonySection() {
  const [testimonyNames, setTestimonyNames] = useState([]);

  useEffect(() => {
    const fetchTestimonyNames = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=5');
        const names = response.data.results.map(user => user.name.first);
        setTestimonyNames(names);
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTestimonyNames();
  }, []);

  const testimonies = [
    {
      quote: "The custom keyboard I purchased from your company exceeded my expectations. The build quality is exceptional, and typing feels effortless."
    },
    {
      quote: "I'm amazed by the personalized service I received. The team helped me choose the perfect keyboard and provided excellent support throughout."
    },
    {
      quote: "Using your custom keyboard has transformed my productivity. The ergonomic design and tactile feedback make typing a joy."
    },
    {
      quote: "I've been a customer for years, and I continue to be impressed by your commitment to innovation. Each new keyboard release is better than the last."
    },
    {
      quote: "The durability of your keyboards is unmatched. Mine has lasted for years without any issues, proving its superior craftsmanship."
    },
  ];

  return (
    <div className="bg-gray-100 p-6 md:p-12">
      <div className="text-center mb-12 md:mb-20">
        <h1 className="gradient-text text-5xl md:text-8xl font-bold mb-6 md:mb-10">Customer`s Testimonies</h1>
      </div>
      <div className="grid grid-cols-1 gap-8 mx-10">
        {testimonies.map((item, index) => (
          <div key={index} className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <p className="text-lg mb-4 text-gray-700">{`‘‘ ${item.quote} ’’`}</p>
              <p className="text-md font-bold text-gray-800">
                - {testimonyNames[index] ? testimonyNames[index] : ''}
              </p>  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}