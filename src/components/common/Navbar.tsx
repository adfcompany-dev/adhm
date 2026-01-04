"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
            }`}>
            <div className="container-custom flex justify-between items-center">
                <Link href="/" className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-[#2F3630]' : 'text-white'}`}>
                    A.D.H
                </Link>

                {/* Desktop Menu */}
                <ul className={`hidden md:flex gap-8 font-medium ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>
                    <li><Link href="#about" className="hover:text-accent transition-colors">About</Link></li>
                    <li><Link href="#lifestyle" className="hover:text-accent transition-colors">Lifestyle</Link></li>
                    <li><Link href="#rooms" className="hover:text-accent transition-colors">Rooms</Link></li>
                    <li><Link href="#location" className="hover:text-accent transition-colors">Location</Link></li>
                </ul>

                <a href="#contact" className={`hidden md:inline-block px-6 py-2 rounded font-medium transition-colors ${scrolled ? 'bg-[#2F3630] text-white hover:bg-[#4A5D4F]' : 'bg-white text-[#2F3630] hover:bg-white/90'
                    }`}>
                    입주 문의
                </a>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className={scrolled ? 'text-black' : 'text-white'} /> : <Menu className={scrolled ? 'text-black' : 'text-white'} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 items-center animate-fade-in-up">
                    <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="#lifestyle" onClick={() => setIsOpen(false)}>Lifestyle</Link>
                    <Link href="#rooms" onClick={() => setIsOpen(false)}>Rooms</Link>
                    <Link href="#location" onClick={() => setIsOpen(false)}>Location</Link>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="text-accent font-bold">입주 문의</a>
                </div>
            )}
        </nav>
    );
}
