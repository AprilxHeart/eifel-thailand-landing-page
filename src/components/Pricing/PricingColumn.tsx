'use client';

import clsx from "clsx";
import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FiPhone, FiMail } from "react-icons/fi";

import { IPricing } from "@/types";
import { siteDetails } from "@/data/siteDetails";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features, imageSrc, category, description } = tier;
    const { language } = useLanguage();
    const inquirySubject = encodeURIComponent(`${language === 'th' ? 'สอบถามสินค้า' : 'Product inquiry'}: ${name}`);
    const inquiryBody = encodeURIComponent(
        `${language === 'th' ? 'สวัสดีครับ/ค่ะ ต้องการสอบถามข้อมูลสินค้า' : 'Hello, I would like to ask about'} ${name}\n\n` +
        `${language === 'th' ? 'ประเภท' : 'Category'}: ${category || '-'}\n` +
        `${language === 'th' ? 'รายละเอียดที่ต้องการ' : 'Requirement'}:\n`
    );
    const mailHref = `mailto:${siteDetails.companyInfo.email}?cc=${siteDetails.companyInfo.alternativeEmail}&subject=${inquirySubject}&body=${inquiryBody}`;

    return (
        <div className={clsx(
            "w-full max-w-sm mx-auto bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 lg:max-w-full h-full flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl", 
            { "shadow-xl border-primary dark:border-primary ring-2 ring-primary ring-opacity-20": highlight }
        )}>
            {/* Product Image */}
            {imageSrc && (
                <div className="relative h-56 w-full bg-[var(--industrial-steel)]">
                    <Image
                        src={imageSrc}
                        alt={name}
                        fill
                        className="object-contain p-5"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {category && (
                        <div className="absolute top-3 left-3">
                            <span className="bg-luxury-black/86 text-white px-3 py-1 text-sm font-medium">
                                {category}
                            </span>
                        </div>
                    )}
                    {highlight && (
                        <div className="absolute top-3 right-3">
                            <span className="bg-[var(--signal)] text-luxury-black px-3 py-1 text-sm font-bold">
                                {language === 'th' ? 'แนะนำ' : 'Recommended'}
                            </span>
                        </div>
                    )}
                </div>
            )}

            {/* Content */}
            <div className="flex flex-col flex-grow">
                <div className="p-6 border-b border-black/10 dark:border-white/10">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{name}</h3>
                    {description && (
                        <p className="text-sm text-foreground-accent mb-4 leading-7">{description}</p>
                    )}
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-primary">{price}</span>
                        <div className="flex gap-2">
                            <a 
                                href={`tel:${siteDetails.companyInfo.phone}`}
                                className="p-2 bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 transition-colors group"
                                aria-label={language === 'th' ? 'โทรสอบถาม' : 'Call for inquiry'}
                            >
                                <FiPhone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                            </a>
                            <a 
                                href={mailHref}
                                className="p-2 bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 transition-colors group"
                                aria-label={language === 'th' ? 'อีเมลสอบถาม' : 'Email inquiry'}
                            >
                                <FiMail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                    <a href={mailHref} className={clsx(
                        "flex min-h-[48px] w-full items-center justify-center py-3 px-4 transition-all duration-300 font-semibold", 
                        { 
                            "bg-primary hover:bg-primary-accent text-white shadow-lg": highlight, 
                            "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-secondary dark:text-gray-200 hover:text-primary dark:hover:text-primary": !highlight 
                        }
                    )}>
                        {language === 'th' ? 'สอบถามข้อมูล' : 'Get Information'}
                    </a>
                </div>

                {/* Features */}
                <div className="p-6 flex-grow">
                    <p className="font-semibold mb-2 text-foreground">
                        {language === 'th' ? 'คุณสมบัติเด่น' : 'Key Features'}
                    </p>
                    <ul className="space-y-3">
                        {features.slice(0, 6).map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <BsFillCheckCircleFill className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-foreground-accent leading-relaxed">{feature}</span>
                            </li>
                        ))}
                        {features.length > 6 && (
                            <li className="text-sm text-gray-400 dark:text-gray-500 font-medium">
                                {language === 'th' 
                                    ? `+${features.length - 6} คุณสมบัติเพิ่มเติม`
                                    : `+${features.length - 6} additional features`
                                }
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PricingColumn
