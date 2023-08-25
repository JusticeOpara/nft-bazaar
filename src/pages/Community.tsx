import React from 'react'
import { motion } from "framer-motion"


const Community: React.FC = () => {
    return (
        <motion.div
            className="font-poppins text-white bg-green-100  "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>

            <div className="flex justify-center pt-[150px] h-[50vh] items-center bg-center bg-hero-pattern bg-no-repeat bg-cover relative overflow-hidden">
                <p className="text-4xl font-bold"> Communities</p>
            </div>


            <div className='flex flex-col justify-evenly items-center bg-slate-600 h-[100vh] w-full m-0'>
                <div className='flex gap-8'>
                    <p className="font-bold w-[33.33%] text-[180px] ">4</p>

                    <img alt="404 image" src="https://opensea.io/static/images/404-compass-full.gif"
                        className='w-[150px] h-auto p-0 m-0 '></img>
                    <p className="font-bold w-[33.33%] text-[180px]">4</p>
                </div>

                <div className=''>
                    <p className='font-black text-5xl'>This Page Is Not Available Yet</p>
                </div>
                <button className='border-0 flex justify-center rounded-xl text-base py-[17px] px-[24px] font-bold bg-blue-500'> Navigate back home</button>


            </div>


            <div className="px-20 bg-[#212529] w-full h-[150vh] flex justify-between pt-[50px] ">
                <div className="flex flex-col gap-2"></div>
            </div>

        </motion.div>
    )
}
export default Community
