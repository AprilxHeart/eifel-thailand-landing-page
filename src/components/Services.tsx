'use client';

import { useLanguage } from "@/contexts/LanguageContext";
import { 
  FiTool, 
  FiSettings, 
  FiUsers, 
  FiPackage, 
  FiHeadphones, 
  FiZap, 
  FiGlobe, 
  FiTruck,
  FiArrowRight
} from "react-icons/fi";

interface ServiceItem {
  title: string;
  description: string;
  iconType: string;
}

const Services: React.FC = () => {
  const { t, language } = useLanguage();

  // Product Catalog Schema for SEO
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "ปั๊มน้ำอุตสาหกรรม Eifel Thailand",
    "description": "รายการสินค้าและบริการปั๊มน้ำอุตสาหกรรมครบวงจร",
    "numberOfItems": t.services.length,
    "itemListElement": t.services.map((service: ServiceItem, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": service.title.includes('บริการ') || service.title.includes('Service') ? "Service" : "Product",
        "name": service.title,
        "description": service.description,
        "brand": {
          "@type": "Brand",
          "name": "Eifel"
        },
        "manufacturer": {
          "@type": "Organization", 
          "name": "Eifel"
        },
        "category": "Industrial Equipment",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "THB",
          "seller": {
            "@type": "Organization",
            "name": "วอเตอร์เทค เซลล์ แอนด์ เซอร์วิส"
          }
        }
      }
    }))
  };

  const getIcon = (iconType: string) => {
    const iconProps = { size: 24, className: "text-blue-600 dark:text-blue-400" };
    
    switch (iconType) {
      case 'package': return <FiPackage {...iconProps} />;
      case 'settings': return <FiSettings {...iconProps} />;
      case 'users': return <FiUsers {...iconProps} />;
      case 'tool': return <FiTool {...iconProps} />;
      case 'headphones': return <FiHeadphones {...iconProps} />;
      case 'wrench': return <FiZap {...iconProps} />;
      case 'globe': return <FiGlobe {...iconProps} />;
      case 'hard-hat': return <FiTruck {...iconProps} />;
      default: return <FiTool {...iconProps} />;
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
      />
      <div className="pb-12">
        <div className="mb-8 grid gap-4 border border-black/10 bg-luxury-black p-5 text-white shadow-xl md:grid-cols-4 dark:border-white/10">
          {[
            language === 'th' ? 'สำรวจความต้องการ' : 'Requirement',
            language === 'th' ? 'เลือกสเปกปั๊ม' : 'Specification',
            language === 'th' ? 'ติดตั้งและทดสอบ' : 'Installation',
            language === 'th' ? 'ซ่อมและอะไหล่' : 'After-sales',
          ].map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[var(--signal)] text-sm font-bold text-luxury-black">
                {index + 1}
              </span>
              <span className="text-sm font-semibold">{step}</span>
              {index < 3 && <FiArrowRight className="ml-auto hidden h-4 w-4 text-white/35 md:block" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {t.services.map((service: ServiceItem, index: number) => (
            <div
              key={index}
              className="group border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--industrial-steel)] flex items-center justify-center transition group-hover:bg-primary/12">
                  {getIcon(service.iconType)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-foreground-accent text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
