'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const products = [
        {
            name: 'Zoom98 EE Lilac',
            image: 'https://meletrix.com/cdn/shop/files/Zoom98_Screen_EE_Lilac_eWhite_84750ee1-2f90-4b96-80d0-523bf65153a7.jpg?v=1708587253&width=1000',
            prices: 225,
            category: 'keyboard',
        },
        {
            name: 'Zoom98 EE Milk Tea',
            image: 'https://meletrix.com/cdn/shop/files/Zoom98_Screen_EE_MilkTea_eWhite_c6b24ccb-9408-4333-acc0-ca368398e4d0.jpg?v=1699424181&width=1000',
            prices: 255,
            category: 'keyboard'
        },
        {
            name: 'Zoom TKL Milky Green',
            image: 'https://meletrix.com/cdn/shop/files/ZoomTKL_MilkyGreen_PVD_Black_1920x1080_8b307a8d-51dd-48c0-aa06-67f657569e2c_1024x1024.jpg?v=1710309796',
            prices: 179,
            category: 'keyboard'
        },
        {
            name: 'Zoom75 EE Strawberry Icecream',
            image: 'https://meletrix.com/cdn/shop/files/11_284650ef-1097-42d1-acc4-578dbb605628_1024x1024.jpg?v=1696756720',
            prices: 229,
            category: 'keyboard'
        },
        {
            name: 'Zoom65 V2.5 SE',
            image: 'https://meletrix.com/cdn/shop/files/DSC07968_1024x1024.jpg?v=1693811607',
            price: 199,
            category: 'keyboard'
        },
        {
            name: 'WS PBT Blue Oasis Keycaps',
            image: 'https://meletrix.com/cdn/shop/files/10001.jpg?v=1698824837&width=400',
            price: 79,
            category: 'keycaps'
        },
        {
            name: 'WS PBT Lavender Bliss Keycaps',
            image: 'https://meletrix.com/cdn/shop/files/10001_596d9492-132a-4216-9601-607a6ab461d8.jpg?v=1698825500&width=400',
            price: 74,
            category: 'keycaps'
        },
        {
            name: 'WS PBT Sunset Bliss Keycaps',
            image: 'https://meletrix.com/cdn/shop/files/10004.jpg?v=1698824837&width=400',
            price: 79,
            category: 'keycaps'
        },
        {
            name: 'WS PBT Gray Skies Keycaps',
            image: 'https://meletrix.com/cdn/shop/files/10003.jpg?v=1698824837&width=400',
            price: 74,
            category: 'keycaps'
        },
        {
            name:'WS PBT Creamy Charcoal Keycaps',
            image: 'https://ucarecdn.com/e53bd56c-8f04-4184-8a6d-f119e554316b/-/format/auto/-/preview/3000x3000/-/quality/lighter/Zoom75_Keycaps_CreamyCharcoal.jpg',
            price: 76,
            category:'keycaps'
        },
        {
            name: 'WS Silent Linears',
            image: 'https://meletrix.com/cdn/shop/products/5_fad2e0f5-30e6-4387-9e6e-49c1ee0da3f2.jpg?v=1678959719&width=1000',
            price: 13,
            category: 'switches'
        },

        {
            name: 'WS Red',
            image: 'https://meletrix.com/cdn/shop/products/4_a16d2056-7122-4e3c-beec-0662673e12bc.jpg?v=1678959743&width=1000',
            price: 13,
            category: 'switches'
        },
        {
            name: 'WS Yellow',
            image: 'https://meletrix.com/cdn/shop/products/4_9959b5f5-f59a-4a20-afa5-5e5d57d64803.jpg?v=1678959753&width=1000',
            price: 12,
            category: 'switches'
        },
        {
            name: 'WS Silent Tactile',
            image: 'https://meletrix.com/cdn/shop/products/5_312f54a2-78d2-4039-ab8d-7bde96bf6e46.jpg?v=1678959762&width=1000',
            price: 12,
            category: 'switches'
        }
    ];

    const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="flex bg-gray-100 min-h-screen">
            <div className="w-1/5 p-4 m-10">
                <h2 className="text-lg font-bold mb-4">Filters</h2>
                <div className="flex flex-col space-y-2">
                    <button onClick={() => setSelectedCategory('all')} className="px-4 py-2 bg-gray-200 rounded text-left">
                        All
                    </button>
                    <button onClick={() => setSelectedCategory('keyboard')} className="px-4 py-2 bg-gray-200 rounded text-left">
                        Keyboard Kits
                    </button>
                    <button onClick={() => setSelectedCategory('keycaps')} className="px-4 py-2 bg-gray-200 rounded text-left">
                        Keycaps
                    </button>
                    <button onClick={() => setSelectedCategory('switches')} className="px-4 py-2 bg-gray-200 rounded text-left">
                        Switches
                    </button>
                </div>
            </div>
            <div className="w-4/5 p-4 m-10">
                <div className="flex justify-center mb-6">
                    <h1 className="text-2xl font-bold">Our Products</h1>
                </div>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredProducts.map((product, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-md rounded overflow-hidden"
                            variants={itemVariants}
                        >
                            <img
                                src={product.image}
                                alt={`Image of ${product.name}`}
                                className="object-cover h-64 w-full"
                            />
                            <div className="p-4">
                                <div className="font-semibold">{product.name}</div>
                                <div className="text-gray-600">${product.prices ?? product.price}.00</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
