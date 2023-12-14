import React from "react"
import img from "../assets/images/img05.avif"
import showcase from "../assets/images/showcase-6.gif"
//  import { motion, useScroll, useTransform } from "framer-motion"
// import {useRef} from "react"



const Feautures: React.FC = () => {
    // const ref = useRef<HTMLDivElement>(null)
    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ["0 1", "1.33 1"]
    // })
    // const yRange = [0, 1]
    // const vRange = [0.6, 1]
    // const xRange = [0, 1]
    // const opacityRange = [0.8, 1]
    // const scaleProgess = useTransform(scrollYProgress, xRange, opacityRange)
    // const opacityProgess = useTransform(scrollYProgress, yRange, vRange)

    return (
        // <motion.div ref={ref}
        //     style={{scale: scaleProgess,opacity: opacityProgess}}
        
        //     className="w-full ">
        <div>
            <div className="h-[100vh] w-full flex justify-between items-center max-md:h-[60vh]">
                <div className="w-[40%] h-[80%] ">
                    <img src={showcase} className="h-full w-full rounded-xl" alt="nft print" />
                </div>

                <div className="w-[40%] max-md:w-[50%] h-[80%] gap-8 max-md:gap-4 flex flex-col justify-center ">
                    <h1 className="text-2xl max-md:text-lg font-bold hero 2xl:text-4xl">Mint Your First NFt</h1>

                    <p className="font-normal text-[16px] max-md:text-[10px] 2xl:text-lg">
                        NFTs, or Non-Fungible Tokens, are unique digital assets that represent ownership of specific
                        items on a blockchain. Minting an NFT involves creating a token and attaching it to a digital asset through platforms like OpenSea or Rarible. Steps include choosing a platform, creating the digital content, funding your wallet, inputting metadata, and paying gas fees. Benefits include ownership verification, monetization opportunities, and global reach. However, environmental concerns and market volatility should also be considered.

                    </p>

                    <button
                        className="flex justify-center items-center w-[120px] max-md:w-[90px] bg-[#5142fc] hover:bg-blue-500 text-white font-bold py-2.5 max-md:py-1.5 rounded-lg">
                        Nft Mint
                    </button>
                </div>

            </div>

            <div className=" h-[100vh] w-full flex justify-between items-center max-md:h-[60vh]">

                <div className="w-[40%] h-[80%] gap-8 flex flex-col justify-center max-md:gap-4">
                    <h1 className="text-2xl max-md:text-lg font-bold hero 2xl:text-4xl">Security Audit</h1>

                    <p className="font-normal text-[16px] max-md:text-[10px] 2xl:text-lg">
                        SlowMist is a blockchain security firm that provides various security services, including security audits,
                        threat information, defense deployment, and security consulting. Their security audit service covers smart
                        contracts and blockchain platforms such as Ethereum and Bitcoin.
                        The audit scheme is characterized by its low cost and short time.
                        The goal of SlowMist is to make the blockchain ecosystem as secure as possible for everyone.
                    </p>
                    <button className="flex items-center w-[130px] max-md:text-sm bg-[#5142fc] hover:bg-blue-500 text-white font-bold py-2.5 justify-center rounded-lg">Read more</button>
                </div>

                <div className="w-[40%] max-md:w-[45%] h-[80%]">
                    <img src={img} className="h-full w-full rounded-xl" alt="nft print" />
                </div>


            </div>


        </div>
    )
}

export default Feautures