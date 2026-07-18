import { motion } from "framer-motion"

import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    return (
        <motion.div
            className="mt-6 flex flex-col items-center gap-3 border border-black/10 bg-white/70 p-4 shadow-sm lg:flex-row lg:items-start lg:gap-5 dark:border-white/10 dark:bg-white/5"
            variants={childVariants}
        >
            <div className="flex justify-center mx-auto lg:mx-0 flex-shrink-0 w-fit bg-[var(--industrial-steel)] p-3 text-primary">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-semibold text-foreground">
                    {title}
                </h4>
                <p className="text-base text-foreground-accent">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default BenefitBullet
