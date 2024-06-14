'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './page.css'
import Image from 'next/image';

export default function TeamPage() {
    const jobPositions = ["CEO", "CO-OWNER", "LEAD DESIGNER", "OPERATION MANAGER", "HR MANAGER", "POKEMON MASTER", "MARKETING MANAGER", "SUPERVISOR"];
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=8');
                setTeamMembers(response.data.results);
                setLoading(false); // Set loading to false after fetching data
            } catch (error) {
                console.error('Error fetching team members:', error);
                setLoading(false); // Handle error case by setting loading to false
            }
        };

        fetchTeamMembers();
    }, []);

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
        <div className="bg-gray-100 min-h-screen">
            <div className="p-6 md:p-12">
                <div className="text-center mt-10 mb-12 md:mb-20">
                    <h1 className="gradient-text text-5xl md:text-8xl font-bold mb-6 md:mb-10">Meet Our Teams</h1>
                </div>
                {loading ? (
                    <div></div>
                ) : (
                    <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mx-4 md:mx-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {teamMembers.map((member, index) => (
                            <motion.div key={index}
                                className="bg-white p-6 rounded-lg shadow-md"
                                variants={itemVariants}
                            >
                                <Image
                                    src={member.picture.large}
                                    alt={`Team Member ${index + 1}`}
                                    className="rounded-full mx-auto mb-2 mt-5"
                                    style={{ width: '150px', height: '150px' }}
                                />
                                <div className="text-center">
                                    <span className="block font-semibold mt-8">{`${member.name.first} ${member.name.last}`}</span>
                                    <span className="block font-semibold">{jobPositions[index]}</span>
                                    <span className="block mt-2">{`${member.email}`}</span>
                                    <span className="block mb-5">{`${member.phone}`}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
}
