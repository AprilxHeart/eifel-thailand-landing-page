import { ITestimonial } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";

export const useTestimonials = (): ITestimonial[] => {
  const { language } = useLanguage();

  if (language === "th") {
    return [
      {
        message: "ปั๊มที่ทำงานนิ่งต่อเนื่อง ช่วยลด Downtime และทำให้ไลน์ผลิตเดินได้อย่างมั่นใจมากขึ้น",
      },
      {
        message: "มีมาตรฐานที่อ้างอิงชัด ช่วยให้คุยกับที่ปรึกษา ส่งมอบงาน และผ่านการตรวจได้มั่นใจขึ้น",
      },
      {
        message: "มีทีมซัพพอร์ตในไทยและดูแลง่ายกว่าเดิม ทำให้แก้ปัญหาได้ไว ไม่เสียเวลารออะไหล่หรือหยุดงานนาน",
      },
    ];
  }

  return [
    {
      message: "Stable performance day after day helps our line run continuously and cuts the risk of costly downtime.",
    },
    {
      message: "International-standard pumps make approvals, inspections, and project handover feel much more confident.",
    },
    {
      message: "Fast local support and easier maintenance help our team solve issues quickly without dragging out repair time.",
    },
  ];
};
