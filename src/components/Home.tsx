// import { Link } from "react-router-dom"
import hero from "../assets/images/hero.jpg"
import Container from "./Container"
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
        <Container>
            <div className=" font-poppins">
                <div className="flex justify-between mt-[120px]  bg-slate-400 h-[80vh] ">

                    <div className="w-[50%] flex flex-col gap-[20px] pt-4 bg-neutral-200">

                        <h2 className="text-[2.5rem] leading-[50px] font-bold font-poppins">
                            Discover rare digital art and collect
                            <span className="hero" > sell extraordinary</span> NFTs


                        </h2>
                        <p className="text-[18px] font-normal font-poppins">
                            Creating and make money in the market place has become a popular way to montize digital creations. To get started,
                            you first need to create your own NFT(Non-Fungilbe Token).
                        </p>

                        <div className="flex gap-5  ">
                            <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg">
                                <BsFillRocketFill />
                                <a>Explore</a>

                            </button>

                            <button className="flex items-center gap-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2.5 px-6 border border-blue-500 hover:border-transparent rounded-lg">

                                <LiaPenAltSolid />
                                <a>Create NFTs</a>

                            </button>
                        </div>


                    </div >

                    <div className="w-[500px] bg-yellow-50">
                        <img src={hero} alt="a picture of a bored ape NFT" className=" h-full w-full rounded-lg  " />
                    </div>

                </div >
                <div className="flex flex-col items-center w-full gap-3 mt-4 bg-blue-400">
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
        </Container>
    )
}
