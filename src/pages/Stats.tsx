

import React from 'react'
import {motion} from "framer-motion"


const Stats: React.FC = () => {
    return (
        <motion.div 
        className="font-poppins text-white"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}>

            <div className="flex justify-center pt-[150px] h-[50vh] items-center bg-center  bg-hero-pattern bg-no-repeat bg-cover relative overflow-hidden">
                <p className="text-4xl font-bold"> stats</p>
            </div>
            <div className="px-20 bg-[#212529] w-full h-[150vh] flex justify-between pt-[50px] ">
                <div className="flex flex-col gap-2"></div>
            </div>

        </motion.div>
    )
}
export default Stats

