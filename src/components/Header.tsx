'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';

import Container from './Container';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import LoadingSpinner from './ui/LoadingSpinner';
import { siteDetails } from '@/data/siteDetails';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, isLoading } = useLanguage();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    if (isLoading) {
        return (
            <header className="fixed left-0 right-0 top-0 z-50 mx-auto w-full px-3 pt-3 sm:px-5 md:pt-4">
                <Container className="!px-0">
                    <nav className="header-shell mx-auto flex items-center justify-between px-5 py-3">
                        <LoadingSpinner size="sm" text="" />
                    </nav>
                </Container>
            </header>
        );
    }

    const menuItems = [
        { text: t.nav.features, url: '#features' },
        { text: t.nav.services, url: '#services' },
        { text: t.nav.products, url: '#pricing' },
        { text: t.nav.reviews, url: '#testimonials' },
        { text: t.nav.team, url: '#team' },
        { text: t.nav.faq, url: '#faq' },
        { text: t.nav.contact, url: '#contact' },
    ];

    return (
        <header className="fixed left-0 right-0 top-0 z-50 mx-auto w-full px-3 pt-3 sm:px-5 md:pt-4">
            <Container className="!px-0">
                <nav className="header-shell mx-auto flex items-center justify-between gap-4 px-5 py-3 md:px-6">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/images/Eifel_logo.png"
                            alt="EIFEL Logo"
                            width={44}
                            height={44}
                            className="min-w-fit rounded-2xl bg-white p-1.5 shadow-sm"
                        />
                        <div className="min-w-0">
                            <span className="header-brand block cursor-pointer text-base font-semibold sm:text-lg">
                                {siteDetails.siteName}
                            </span>
                            <span className="hidden text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--foreground-accent)] sm:block">
                                Industrial Pump Solutions
                            </span>
                        </div>
                    </Link>

                    <ul className="hidden items-center gap-1 lg:flex">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="header-link px-3 py-2 text-sm font-medium">
                                    {item.text}
                                </Link>
                            </li>
                        ))}

                        <li className="ml-2 flex items-center gap-2">
                            <ThemeToggle />
                            <LanguageToggle />
                        </li>

                        <li>
                            <Link href="#contact" className="header-cta px-5 py-2.5 text-sm font-semibold">
                                {t.nav.contact}
                            </Link>
                        </li>
                    </ul>

                    <div className="flex items-center gap-2 lg:hidden">
                        <ThemeToggle />
                        <LanguageToggle />
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="header-control flex h-11 w-11 items-center justify-center rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">{t.common.menu}</span>
                        </button>
                    </div>
                </nav>
            </Container>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div className="px-3 pb-3 sm:px-5 lg:hidden">
                    <div id="mobile-menu" className="header-shell mt-3 overflow-hidden px-2 py-3">
                        <ul className="flex flex-col gap-1 px-2">
                            {menuItems.map(item => (
                                <li key={item.text}>
                                    <Link
                                        href={item.url}
                                        className="header-link block rounded-2xl px-4 py-3 text-sm font-medium"
                                        onClick={toggleMenu}
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="#contact"
                                    className="header-cta mt-2 block w-full px-4 py-3 text-center text-sm font-semibold"
                                    onClick={toggleMenu}
                                >
                                    {t.nav.contact}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
