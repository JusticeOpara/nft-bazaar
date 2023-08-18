// import { Link } from "react-router-dom"
import hero from "../assets/images/hero.jpg"
import metaMask from "../assets/metamask-icon.svg"
import { BsFillRocketFill } from "react-icons/bs"
import { LiaPenAltSolid } from "react-icons/lia"
import { SiOpensea } from "react-icons/si"
import { SiBinance } from "react-icons/si"
import { FaEthereum } from "react-icons/fa"
import { TbCurrencySolana } from "react-icons/tb"
import Carousel from "./Carousel"
import Feautures from "./Feautures"
import Questions from "./Questions"
import Footer from "./Footer"


export default function Home() {
    return (
        
            <div className=" font-poppins text-white bg-[#212529] px-20">
                <div className="flex justify-between mt-[120px] h-[80vh] items-center  ">

                    <div className="w-[50%] flex flex-col gap-[40px] h-[357.14px]">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-[2rem] leading-[50px] font-bold font-poppins">
                                Discover rare digital art and collect
                                <span className="hero" > sell extraordinary</span> NFTs
                            </h2>
                            <p className="text-base font-normal">
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

                    <div className="w-[500px] h-[357.14px]">
                        <img src={hero} alt="NFT" className=" h-full w-full rounded-lg" />
                    </div>

                </div >
                <div className="flex flex-col items-center w-full gap-3 mt-10">
                    <p className="text-[25px] font-black">Our Amazing Partner</p>

                    <div className="flex items-center font-poppins w-full justify-evenly">
                        <span className="flex justify-center items-center ">
                            <SiOpensea size={50} className="" />
                            <p className="font-bold text-xl">OpenSea</p>
                        </span>

                        <span className="flex justify-center items-center ">
                            <FaEthereum size={50} className="" />
                            <p className="font-bold text-xl">Ethereum</p>
                        </span>

                        <span className="flex justify-center items-center ">
                            <img src={metaMask} className="w-[50px]" alt="MetaMask icon" />
                            <p className="font-bold text-xl">MetaMask</p>
                        </span>

                        <span className="flex justify-center items-center">
                            <TbCurrencySolana size={50} className="" />
                            <p className="font-bold text-xl">Solana</p>
                        </span>

                        <span className="flex justify-center items-center">
                            <SiBinance size={50} className="" />
                            <p className="font-bold text-xl">Binance</p>
                        </span>

                    </div>


                </div>
                <Carousel />
                <Feautures />
                <Questions />
                <Footer />
            </div>
    
    )
}
