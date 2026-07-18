'use client';

import React, { FormEvent, useState } from 'react';
import { FiMail, FiMapPin, FiPhoneCall, FiSend } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';
import { siteDetails } from '@/data/siteDetails';

type ContactForm = {
    name: string;
    company: string;
    email: string;
    phone: string;
    productType: string;
    message: string;
};

const initialForm: ContactForm = {
    name: '',
    company: '',
    email: '',
    phone: '',
    productType: '',
    message: '',
};

const Contact: React.FC = () => {
    const { t, language, isLoading } = useLanguage();
    const [form, setForm] = useState<ContactForm>(initialForm);
    const [notice, setNotice] = useState('');

    const updateField = (field: keyof ContactForm, value: string) => {
        setForm((current) => ({ ...current, [field]: value }));
    };

    const submitEmail = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const productLabel = productOptions.find((option) => option.value === form.productType)?.label[language] || '-';
        const subject = encodeURIComponent(`${language === 'th' ? 'สอบถามปั๊มน้ำ EIFEL' : 'EIFEL pump inquiry'} - ${form.company || form.name || 'Website'}`);
        const body = encodeURIComponent([
            language === 'th' ? 'รายละเอียดผู้ติดต่อ' : 'Contact details',
            `${language === 'th' ? 'ชื่อ' : 'Name'}: ${form.name}`,
            `${language === 'th' ? 'บริษัท/องค์กร' : 'Company'}: ${form.company || '-'}`,
            `${language === 'th' ? 'อีเมล' : 'Email'}: ${form.email}`,
            `${language === 'th' ? 'โทรศัพท์' : 'Phone'}: ${form.phone}`,
            `${language === 'th' ? 'ประเภทสินค้าที่สนใจ' : 'Product type'}: ${productLabel}`,
            '',
            language === 'th' ? 'รายละเอียดงาน/ข้อความ' : 'Requirement/message',
            form.message || '-',
            '',
            language === 'th'
                ? 'ส่งจากฟอร์มติดต่อบนเว็บไซต์ Eifel Thailand'
                : 'Sent from the Eifel Thailand website contact form',
        ].join('\n'));

        const cc = siteDetails.companyInfo.alternativeEmail
            ? `&cc=${encodeURIComponent(siteDetails.companyInfo.alternativeEmail)}`
            : '';

        setNotice(language === 'th'
            ? 'กำลังเปิดโปรแกรมอีเมลพร้อมข้อมูลที่กรอกไว้'
            : 'Opening your email app with the completed inquiry');

        window.location.href = `mailto:${siteDetails.companyInfo.email}?subject=${subject}${cc}&body=${body}`;
    };

    if (isLoading) {
        return (
            <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="h-96 animate-pulse bg-gray-200 dark:bg-gray-700" />
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="section-band bg-background py-20">
            <div className="relative mx-auto max-w-7xl px-5">
                <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
                    <div className="bg-luxury-black p-8 text-white shadow-2xl md:p-10">
                        <p className="text-sm font-semibold uppercase text-[var(--signal)]">
                            {language === 'th' ? 'ติดต่อทีมไทย' : 'Contact the Thai team'}
                        </p>
                        <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                            {t.contact.title}
                        </h2>
                        <p className="mt-5 text-base leading-8 text-white/75">
                            {language === 'th'
                                ? 'ส่งสเปกหน้างาน รุ่นปั๊มที่สนใจ หรือปัญหาที่ต้องการแก้ ทีมงานจะได้รับข้อมูลผ่านอีเมลหลักและอีเมลสำรองทันทีจากเครื่องของคุณ'
                                : 'Send the site requirements, pump series, or issue you want to solve. The inquiry is addressed to both the primary and backup email accounts.'}
                        </p>

                        <div className="mt-8 space-y-5">
                            <a href={`tel:${siteDetails.companyInfo.phone}`} className="flex items-start gap-4 border border-white/12 bg-white/8 p-4 transition hover:bg-white/12">
                                <FiPhoneCall className="mt-1 h-5 w-5 shrink-0 text-[var(--signal)]" />
                                <div>
                                    <p className="font-semibold">{siteDetails.companyInfo.phone}</p>
                                    <p className="text-sm text-white/65">{siteDetails.companyInfo.alternativePhones?.join(', ')}</p>
                                </div>
                            </a>
                            <a href={`mailto:${siteDetails.companyInfo.email}`} className="flex items-start gap-4 border border-white/12 bg-white/8 p-4 transition hover:bg-white/12">
                                <FiMail className="mt-1 h-5 w-5 shrink-0 text-[var(--signal)]" />
                                <div>
                                    <p className="font-semibold">{siteDetails.companyInfo.email}</p>
                                    <p className="text-sm text-white/65">{siteDetails.companyInfo.alternativeEmail}</p>
                                </div>
                            </a>
                            <div className="flex items-start gap-4 border border-white/12 bg-white/8 p-4">
                                <FiMapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--signal)]" />
                                <p className="text-sm leading-7 text-white/75">{siteDetails.companyInfo.address}</p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={submitEmail} className="steel-panel p-6 md:p-8">
                        <div className="grid gap-5 md:grid-cols-2">
                            <Field
                                label={t.contact.form.name}
                                value={form.name}
                                onChange={(value) => updateField('name', value)}
                                placeholder={t.contact.form.namePlaceholder}
                                required
                            />
                            <Field
                                label={t.contact.form.company}
                                value={form.company}
                                onChange={(value) => updateField('company', value)}
                                placeholder={t.contact.form.companyPlaceholder}
                            />
                            <Field
                                label={t.contact.form.email}
                                type="email"
                                value={form.email}
                                onChange={(value) => updateField('email', value)}
                                placeholder={t.contact.form.emailPlaceholder}
                                required
                            />
                            <Field
                                label={t.contact.form.phone}
                                type="tel"
                                value={form.phone}
                                onChange={(value) => updateField('phone', value)}
                                placeholder={t.contact.form.phonePlaceholder}
                                required
                            />
                        </div>

                        <label className="mt-5 block">
                            <span className="text-sm font-semibold text-foreground">{t.contact.form.productType}</span>
                            <select
                                value={form.productType}
                                onChange={(event) => updateField('productType', event.target.value)}
                                className="mt-2 min-h-[52px] w-full border border-black/10 bg-white px-4 text-foreground outline-none transition focus:border-primary dark:border-white/10 dark:bg-black/20"
                                required
                            >
                                <option value="">{t.contact.form.selectProduct}</option>
                                {productOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label[language]}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="mt-5 block">
                            <span className="text-sm font-semibold text-foreground">{t.contact.form.message}</span>
                            <textarea
                                value={form.message}
                                onChange={(event) => updateField('message', event.target.value)}
                                rows={5}
                                className="mt-2 w-full border border-black/10 bg-white px-4 py-3 text-foreground outline-none transition focus:border-primary dark:border-white/10 dark:bg-black/20"
                                placeholder={t.contact.form.messagePlaceholder}
                            />
                        </label>

                        {notice && (
                            <p className="mt-4 border-l-4 border-primary bg-primary/10 px-4 py-3 text-sm font-medium text-foreground">
                                {notice}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="mt-6 inline-flex min-h-[56px] w-full items-center justify-center gap-3 bg-primary px-6 py-4 font-semibold text-white shadow-xl transition hover:bg-primary-accent"
                        >
                            <FiSend className="h-5 w-5" />
                            {language === 'th' ? 'ส่งอีเมลถึงทีม EIFEL' : 'Email EIFEL team'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

interface FieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    type?: string;
    required?: boolean;
}

const Field = ({ label, value, onChange, placeholder, type = 'text', required = false }: FieldProps) => (
    <label className="block">
        <span className="text-sm font-semibold text-foreground">{label}</span>
        <input
            type={type}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder={placeholder}
            required={required}
            className="mt-2 min-h-[52px] w-full border border-black/10 bg-white px-4 text-foreground outline-none transition focus:border-primary dark:border-white/10 dark:bg-black/20"
        />
    </label>
);

const productOptions = [
    { value: 'industrial', label: { th: 'ปั๊มน้ำอุตสาหกรรม', en: 'Industrial pumps' } },
    { value: 'fire', label: { th: 'ปั๊มดับเพลิง', en: 'Fire pumps' } },
    { value: 'wastewater', label: { th: 'ปั๊มน้ำเสีย', en: 'Wastewater pumps' } },
    { value: 'vacuum', label: { th: 'ปั๊มสุญญากาศ', en: 'Vacuum pumps' } },
    { value: 'service', label: { th: 'ซ่อม/อะไหล่/บริการหลังการขาย', en: 'Repair, parts, and after-sales service' } },
    { value: 'consultation', label: { th: 'ปรึกษาทั่วไป', en: 'General consultation' } },
];

export default Contact;
