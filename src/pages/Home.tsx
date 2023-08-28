// import { Link } from "react-router-dom"
// import hero from "../assets/images/hero.jpg"
import rainbow from "../assets/images/rainbow ape.jpeg"
// import showcase from "../assets/images/showcase-6.gif"
import metaMask from "../assets/metamask-icon.svg"
import { BsFillRocketFill } from "react-icons/bs"
import { LiaPenAltSolid } from "react-icons/lia"
import { SiOpensea } from "react-icons/si"
import { SiBinance } from "react-icons/si"
import { FaEthereum } from "react-icons/fa"
import { TbCurrencySolana } from "react-icons/tb"
import Carousel from "../components/Carousel"
import Feautures from "../components/Feautures"
import Questions from "../components/Questions"
import { motion } from 'framer-motion';


const smallScreenStyles = {
    fontSize: '4%',
  }
export default function Home() {
   
  
    return (

        <motion.div 
        className=" font-poppins text-white  bg-[#212529] px-20  max-md:w-full max-md:px-0"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity:0}}
        >
            
            <div className="flex justify-between mt-[120px] max-md:mt-[80px] max-sm:mt-[80px] h-[80vh] items-center max-md:w-full max-md:h-[50vh] max-md:justify-center">

                <div className="w-[50%] flex flex-col gap-[40px] h-[357.14px] max-md:w-full max-md:items-center max-md:justify-center max-md:h-full">
                    <div className="flex flex-col gap-2 max-md:text-center">
                        <h2 className="text-[2rem] max-md:text-2xl leading-[50px] font-bold font-poppins ">
                            Discover rare digital art and collect
                            <span className="hero"> sell extraordinary</span> NFTs
                        </h2>
                        <p className="text-base font-normal ">
                            Creating and make money in the market place has become a popular way to montize digital creations. To get started,
                            you first need to create your own NFT(Non-Fungilbe Token).
                        </p>
                    </div>


                    <div className="flex gap-5">
                        <button className="flex items-center gap-2 bg-[#5142fc] text-white font-bold py-2.5 px-6 rounded-lg">
                            <BsFillRocketFill />
                            <a>Explore</a>

                        </button>

                        <button className="flex items-center gap-2 bg-transparent hover:bg-[#5142fc] text-blue-700 font-semibold hover:text-white py-2.5 px-6 border border-[#5142fc] hover:border-transparent rounded-lg">

                            <LiaPenAltSolid />
                            <a>Create NFTs</a>

                        </button>
                    </div>


                </div >

                <div className="w-[500px] h-[357.14px] max-md:hidden">
                    <img src={rainbow}
                     alt="NFT" className=" h-full w-full rounded-lg filter rendering-crisp-edges" />
                </div>

            </div >
            <div className="flex flex-col items-center w-full gap-3 mt-10 max-md:mt-0">
                <p className="text-[25px] max-md:text-lg  font-black">Our Amazing Partner</p>

                <div className="flex items-center font-poppins w-full justify-evenly">
                    <span className="flex justify-center items-center">
                        <SiOpensea size={50} className="" style={window.innerWidth <= 768 ? smallScreenStyles : null} />
                        <p className="font-bold text-xl max-md:hidden">OpenSea</p>
                    </span>

                    <span className="flex justify-center items-center ">
                        <FaEthereum size={50} className="" style={window.innerWidth <= 768 ? smallScreenStyles : null} />
                        <p className="font-bold text-xl max-md:hidden">Ethereum</p>
                    </span>

                    <span className="flex justify-center items-center ">
                        <img src={metaMask} className="w-[50px]" alt="MetaMask icon" />
                        <p className="font-bold text-xl max-md:hidden max-md:text-[8px]">MetaMask</p>
                    </span>

                    <span className="flex justify-center items-center">
                        <TbCurrencySolana size={50} className="" style={window.innerWidth <= 768 ? smallScreenStyles : null} />
                        <p className="font-bold text-xl max-md:hidden">Solana</p>
                    </span>

                    <span className="flex justify-center items-center">
                        <SiBinance size={50} className="" style={window.innerWidth <= 768 ? smallScreenStyles : null} />
                        <p className="font-bold text-xl max-md:hidden">Binance</p>
                    </span>

                </div>


            </div>
            <Carousel />
            <Feautures />
            <Questions />

        </motion.div>

    )
}
