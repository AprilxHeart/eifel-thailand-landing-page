import { FiActivity, FiGrid, FiMapPin, FiPackage } from "react-icons/fi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "2004",
        icon: <FiMapPin size={34} className="text-blue-500" />,
        description: {
            th: "ผู้ผลิต EIFEL Pump (Fuzhou) Corpn., Ltd. เริ่มต้นที่ฝูโจว ประเทศจีน",
            en: "EIFEL Pump (Fuzhou) Corpn., Ltd. was established in Fuzhou, China"
        }
    },
    {
        title: "10+",
        icon: <FiPackage size={34} className="text-emerald-600" />,
        description: {
            th: "กลุ่มผลิตภัณฑ์มากกว่า 10 ซีรีส์ ครอบคลุมงานอุตสาหกรรม ดับเพลิง น้ำเสีย และสุญญากาศ",
            en: "More than 10 pump series across industrial, fire, sewage, and vacuum duties"
        }
    },
    {
        title: "32,000 sqm",
        icon: <FiGrid size={34} className="text-amber-500" />,
        description: {
            th: "ฐานการผลิตใน Minhou, Fuzhou ขนาดประมาณ 32,000 ตารางเมตร",
            en: "Production base in Minhou, Fuzhou covering about 32,000 square meters"
        }
    },
    {
        title: "Grade 2",
        icon: <FiActivity size={34} className="text-violet-500" />,
        description: {
            th: "รองรับด้วยศูนย์ทดสอบปั๊มขนาดใหญ่ระดับประเทศ ความแม่นยำระดับ 2",
            en: "Supported by a national large pump testing center with grade 2 accuracy"
        }
    }
];
