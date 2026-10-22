'use client';

import { Bars, Xmark } from '@gravity-ui/icons';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
    { name: 'Browse Jobs', href: '/jobs' },
    { name: 'Company', href: '/companies' },
    { name: 'Pricing', href: '/pricing' }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="sticky top-0 z-50 bg-[#242424] px-4 py-3 sm:px-6">
            <nav
                aria-label="Main navigation"
                className="mx-auto flex min-h-14 max-w-310 items-center justify-between rounded-xl bg-[#1d1d1d] px-4 sm:px-6">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    aria-label="HireLoop home"
                    className="shrink-0 text-[27px] font-extrabold leading-none tracking-[-1.5px]">
                    <span className="text-[#168bff]">hire</span>
                    <span className="text-[#ff8b16]">l</span>
                    <span className="text-[#ff6b13]">oop</span>
                </Link>

                {/* Desktop actions */}
                <div className="hidden shrink-0 items-center gap-5 md:flex lg:gap-7">
                    {/* Desktop links */}
                    <div className="hidden items-center gap-7 md:flex lg:gap-8">
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[13px] font-medium text-white transition-colors hover:text-[#a5a0ff]">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <span className="h-5 w-px bg-[#414141]" />

                    <Link
                        href="/login"
                        className="text-sm font-medium text-[#7770ff] hover:text-[#a29dff]">
                        Sign In
                    </Link>

                    <Link
                        href="/register"
                        className="inline-flex min-h-10 items-center justify-center rounded-[10px] bg-linear-to-r from-[#6858ff] to-[#6655ff] px-5 text-sm font-semibold text-white shadow-md transition hover:brightness-110">
                        Get Started
                    </Link>
                </div>

                {/* Mobile toggle */}
                <button
                    type="button"
                    onClick={() => setIsOpen(open => !open)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 md:hidden">
                    {isOpen ? <Xmark width={24} height={24} /> : <Bars width={24} height={24} />}
                </button>
            </nav>

            {/* Mobile menu */}
            {isOpen && (
                <div
                    id="mobile-navigation"
                    className="mx-auto mt-2 max-w-310 rounded-xl border border-white/10 bg-[#1d1d1d] p-4 shadow-xl md:hidden">
                    <div className="flex flex-col gap-1">
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="rounded-lg px-3 py-3 text-sm font-medium text-white transition hover:bg-white/5 hover:text-[#a5a0ff]">
                                {link.name}
                            </Link>
                        ))}

                        <div className="my-2 border-t border-white/10" />

                        <Link
                            href="/login"
                            onClick={closeMenu}
                            className="rounded-lg px-3 py-3 text-sm font-medium text-[#8982ff] hover:bg-white/5">
                            Sign In
                        </Link>

                        <Link
                            href="/register"
                            onClick={closeMenu}
                            className="mt-1 flex min-h-11 items-center justify-center rounded-[10px] bg-linear-to-r from-[#6858ff] to-[#6655ff] px-4 text-sm font-semibold text-white hover:brightness-110">
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
