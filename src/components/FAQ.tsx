"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "./SectionTitle";
import { useFAQs } from "@/data/faq";
import { footerDetails } from "@/data/footer";
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ: React.FC = () => {
    const { t, isLoading } = useLanguage();
    const faqs = useFAQs();

    // FAQ Schema for SEO
    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    if (isLoading) {
        return (
            <section id="faq" className="py-10 lg:py-20">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="">
                        <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
                        <div className="w-64 h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
                        <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
                        <div className="w-48 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                    <div className="w-full lg:max-w-2xl mx-auto border-b">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="mb-7 border-t pt-7">
                                <div className="w-full h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqStructuredData),
                }}
            />
            <section id="faq" className="py-10 lg:py-20">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="">
                        <p className="eyebrow hidden text-sm font-semibold uppercase text-foreground-accent dark:text-gray-400 lg:block">
                            {t.nav.faq}
                        </p>
                        <SectionTitle>
                            <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left text-gray-900 dark:text-gray-100">
                                {t.faq.title}
                            </h2>
                        </SectionTitle>
                        <p className="lg:mt-10 text-foreground-accent dark:text-gray-400 text-center lg:text-left">
                            {t.faq.subtitle}
                        </p>
                        <a 
                            href={`mailto:${footerDetails.email}`} 
                            className="mt-3 block text-xl lg:text-4xl text-secondary dark:text-blue-400 font-semibold hover:underline text-center lg:text-left"
                        >
                            {footerDetails.email}
                        </a>
                    </div>

                    <div className="w-full lg:max-w-2xl mx-auto border-b dark:border-gray-700">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-7">
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className="pressable flex w-full items-center justify-between border-t px-4 pt-7 text-left text-lg dark:border-gray-700">
                                                <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{faq.question}</span>
                                                {open ? <BiMinus className="w-5 h-5 text-secondary dark:text-blue-400" /> : <BiPlus className="w-5 h-5 text-secondary dark:text-blue-400" />}
                                            </DisclosureButton>
                                            <DisclosurePanel className="px-4 pt-4 pb-2 text-foreground-accent dark:text-gray-400">
                                                {faq.answer}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;
