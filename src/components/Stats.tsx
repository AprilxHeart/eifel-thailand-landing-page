'use client';

import React from 'react';
import { stats } from "@/data/stats";
import { useLanguage } from '@/contexts/LanguageContext';

const Stats: React.FC = () => {
    const { t, language, isLoading } = useLanguage();

    if (isLoading) {
        return (
            <section id="stats" className="py-16 lg:py-20 bg-[var(--industrial-steel)] transition-colors">
                <div className="text-center mb-12">
                    <div className="w-64 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto mb-4"></div>
                    <div className="w-96 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto"></div>
                </div>
                <div className="grid sm:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-64 animate-pulse"></div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section id="stats" className="section-band my-10 bg-[var(--industrial-steel)] px-5 py-16 transition-colors lg:py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {t.stats.title}
                </h2>
                <p className="text-lg text-foreground-accent max-w-2xl mx-auto">
                    {t.stats.subtitle}
                </p>
            </div>
            <div className="relative grid sm:grid-cols-3 gap-4">
                {stats.map((stat) => (
                    <div key={stat.title} className="text-center group">
                        <div className="border border-black/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-[var(--industrial-steel)] group-hover:bg-primary/10 transition-colors duration-300">
                                    {stat.icon}
                                </div>
                            </div>
                            <h3 className="text-4xl font-bold text-primary mb-4 transition-transform duration-300 group-hover:scale-105">
                                {stat.title}
                            </h3>
                            <p className="text-foreground-accent leading-relaxed">
                                {typeof stat.description === 'object' 
                                    ? stat.description[language] 
                                    : stat.description
                                }
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats
