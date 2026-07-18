import { BsFillStarFill, BsShieldCheck } from "react-icons/bs";
import { PiDropFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "2004",
        icon: <PiDropFill size={34} className="text-blue-500" />,
        description: {
            th: "ปีที่ผู้ผลิต EIFEL Pump เริ่มต้นพัฒนาและผลิตปั๊มน้ำอุตสาหกรรม",
            en: "Year EIFEL Pump began developing and manufacturing industrial pump products"
        }
    },
    {
        title: "UL / ISO",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: {
            th: "มาตรฐานและการรับรองที่พบในเอกสารแบรนด์สำหรับสินค้าและระบบคุณภาพ",
            en: "Standards and certifications referenced in brand and quality documents"
        }
    },
    {
        title: "TH Team",
        icon: <BsShieldCheck size={34} className="text-green-600" />,
        description: {
            th: "ทีมไทยช่วยให้คำปรึกษา ออกแบบ ติดตั้ง ซ่อมบำรุง และจัดหาอะไหล่",
            en: "Thai team for consulting, system design, installation, maintenance, and parts"
        }
    }
];
