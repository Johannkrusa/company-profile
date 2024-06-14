import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="sticky top-0 left-0 w-full h-16 bg-white shadow-md z-50">
            <div className="flex justify-between items-center px-10 h-full">
                <div className="text-lg font-bold">Logo</div>
                <div className="flex gap-10">
                    <Link href="/home">
                        <div className="font-bold">Home</div>
                    </Link>
                    <Link href="/about-us">
                        <div className="font-bold">About Us</div>
                    </Link>
                    <Link href="/product">
                        <div className="font-bold">Products</div>
                    </Link>
                    <Link href="/team">
                        <div className="font-bold">Teams</div>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <span className="font-bold">JP</span>
                    <span className="font-bold">|</span>
                    <span className="font-bold">EN</span>
                </div>
            </div>
        </nav>
    );
}
