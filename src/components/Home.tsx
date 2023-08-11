// import { Link } from "react-router-dom"
import boredApe from "../assets/boredApe.png"
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



export default function Home() {
    return (
        <Container>
            <div className="mb-8 font-poppins">


                <div className="flex justify-between mt-[120px]  bg-slate-400 h-[80vh] ">

                    <div className="w-[50%] flex flex-col gap-[18px]  bg-neutral-200">
                        {/* <div className="bg-green-200"> */}
                        <h2 className="text-[2.5rem] leading-[50px] font-bold ">
                            Discover rare digital art and collect
                            <span > sell extraordinary</span> NFTs
                        </h2>
                        <p className="text-[18px] font-normal ">
                            Creating and make money in the market place has become a popular way to montize digital creations. To get started,
                            you first need to create your own NFT(Non-Fungilbe Token).
                        </p>
                        {/* </div> */}


                        <div className="flex gap-5 ">
                            <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg">
                                <BsFillRocketFill />
                                <a>Explore</a>
                                {/* <Link to="">Explore</Link> */}
                            </button>

                            <button className="flex items-center gap-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2.5 px-6 border border-blue-500 hover:border-transparent rounded-lg">

                                <LiaPenAltSolid />
                                <a>Create NFTs</a>
                                {/* <Link to="">Create</Link> */}
                            </button>
                        </div>

                        <div className="flex items-center gap-2 ">
                            <p className="text-[14px] font-medium">Supported by</p>
                            <span>
                                <SiOpensea size={50} />
                            </span>

                            <span>
                                <FaEthereum size={50} />
                            </span>

                            <span>
                                <img src={metaMask} className="w-[50px]" alt="MetaMask icon" />
                            </span>

                            <span>
                                <TbCurrencySolana size={50} />
                            </span>

                            <span>
                                <SiBinance size={50} />
                            </span>

                        </div>
                    </div >



                    <div className="w-[40%]  bg-yellow-50">
                        <img src={boredApe} alt="a picture of a bored ape NFT" className=" h-[100%] w-[500px]  " />
                    </div>

                </div >
                <Carousel />
                <Feautures/>
            </div>
        </Container>
    )
}
