'use client';

import React from 'react';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { useTestimonials } from '@/data/testimonials';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials: React.FC = () => {
    const { isLoading, language } = useLanguage();
    const testimonials = useTestimonials();

    if (isLoading) {
        return (
            <div className="mx-auto grid w-full max-w-lg gap-6 lg:max-w-full lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="steel-panel rounded-[2rem] p-8">
                        <div className="mb-6 flex items-center justify-between">
                            <div className="h-11 w-11 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700" />
                            <div className="h-2 w-24 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700" />
                        </div>
                        <div className="mb-3 h-6 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                        <div className="h-24 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                    </div>
                ))}
            </div>
        );
    }

    const themes = language === 'th'
        ? [
            'ลด Downtime หน้างาน',
            'คุยสเปกและมาตรฐานได้ชัด',
            'มีทีมไทยดูแลต่อเนื่อง'
        ]
        : ['Lower downtime', 'Clearer compliance conversations', 'Local Thai support'];

    return (
        <div className="mx-auto grid w-full max-w-lg gap-6 lg:max-w-full lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="steel-panel rounded-[2rem] p-8">
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-primary dark:bg-[var(--primary)]/20 dark:text-[var(--primary-accent)]">
                            <HiOutlineChatBubbleLeftRight className="h-5 w-5" />
                        </div>
                        <span className="rounded-full border border-[var(--primary)]/15 bg-white/70 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-secondary dark:border-white/10 dark:bg-white/5 dark:text-[var(--foreground-accent)]">
                            {themes[index] ?? 'Trusted Performance'}
                        </span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                        {themes[index] ?? 'Trusted performance'}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-foreground-accent">
                        {testimonial.message}
                    </p>

                    <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-[var(--signal)]" />
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
