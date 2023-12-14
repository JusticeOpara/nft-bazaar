// import { Link } from "react-router-dom"
// import hero from "../assets/images/hero.jpg"
// import rainbow from "../assets/images/rainbow ape.jpeg"
import rainbow from "../assets/images/rainbow-dog.png";
import metaMask from "../assets/metamask-icon.svg";
import { BsFillRocketFill } from "react-icons/bs";
import { LiaPenAltSolid } from "react-icons/lia";
import { SiOpensea } from "react-icons/si";
import { SiBinance } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { TbCurrencySolana } from "react-icons/tb";
import Carousel from "../components/Carousel";
import Feautures from "../components/Feautures";
import Questions from "../components/Questions";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const smallScreenStyles = {
  fontSize: "4%",
};
export default function Home() {
  return (
    <motion.div
      className=" font-poppins text-white  bgg-[#212529]  px-20  max-md:w-full max-md:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-between mt-[120px] h-[80vh] items-center max-md:w-full max-md:h-full max-md:justify-center ">
        <div className="w-[50%] flex flex-col justify-between h-[357.14px] max-md:w-full max-md:items-center max-md:justify-center max-md:gap-12 max-md:h-full">
          <div className="flex flex-col gap-2 max-md:text-center">
            <h2 className="text-[2rem] max-md:text-2xl leading-[50px] font-bold font-poppins 2xl:text-5xl ">
              Discover rare digital art and collect
              <span className="hero"> sell extraordinary</span> NFTs
            </h2>
            <p className="text-base font-normal 2xl:text-lg">
              Creating and make money in the market place has become a popular
              way to montize digital creations. To get started, you first need
              to create your own NFT(Non-Fungilbe Token).
            </p>
          </div>

          <div className="flex gap-5">
            <button className="flex items-center gap-2 bg-[#5142fc] text-white font-bold py-2.5 px-6 rounded-lg">
              <BsFillRocketFill />
              <Link to="/collection">Explore</Link>
            </button>

            <button className="flex items-center gap-2 bg-transparent hover:bg-[#5142fc] text-blue-700 font-semibold hover:text-white py-2.5 px-6 border border-[#5142fc] hover:border-transparent rounded-lg">
              <LiaPenAltSolid />
              <Link to="/create">Create NFTs</Link>
            </button>
          </div>

          <div className="flex w-full gap-8 max-md:justify-center ">
            
            <div className="flex flex-col leading-normal ">
              <span className="text-[2rem] max-md:text-2xl leading-[50px] font-bold font-poppins 2xl:text-4xl ">98k+</span>
              <span className="text-base font-normal 2xl:text-lg">Artwork</span>
            </div>

            <div className="flex flex-col leading-normal ">
              <span className="text-[2rem] max-md:text-2xl leading-[50px] font-bold font-poppins 2xl:text-4xl">12k+</span>
              <span className="text-base font-normal 2xl:text-lg">Auction</span>
            </div>

            <div className="flex flex-col leading-normal ">
              <span className="text-[2rem] max-md:text-2xl leading-[50px] font-bold font-poppins 2xl:text-4xl">15k+</span>
              <span className="text-base font-normal 2xl:text-lg">Artist</span>
            </div>
          </div>
        </div>

        <div className="w-[500px] h-auto max-md:hidden 2xl:w-[600px] 2xl:h-auto ">
          <img
            src={rainbow}
            alt="NFT"
            className=" h-full w-full rounded-lg filter rendering-crisp-edges"
          />
        </div>
      </div>

      <div className="flex flex-col items-center w-full gap-3 mt-10 max-md:my-10">
        <p className="text-[25px] max-md:text-lg 2xl:text-3xl font-black">
          Our Amazing Partner
        </p>

        <div className="flex items-center font-poppins w-full justify-evenly">
          <span className="flex justify-center items-center">
            <SiOpensea
              size={50}
              className=""
              style={window.innerWidth <= 768 ? smallScreenStyles : null}
            />
            <p className="font-bold text-xl max-md:hidden">OpenSea</p>
          </span>

          <span className="flex justify-center items-center ">
            <FaEthereum
              size={50}
              className=""
              style={window.innerWidth <= 768 ? smallScreenStyles : null}
            />
            <p className="font-bold text-xl max-md:hidden">Ethereum</p>
          </span>

          <span className="flex justify-center items-center ">
            <img src={metaMask} className="w-[50px]" alt="MetaMask icon" />
            <p className="font-bold text-xl max-md:hidden max-md:text-[8px]">
              MetaMask
            </p>
          </span>

          <span className="flex justify-center items-center">
            <TbCurrencySolana
              size={50}
              className=""
              style={window.innerWidth <= 768 ? smallScreenStyles : null}
            />
            <p className="font-bold text-xl max-md:hidden">Solana</p>
          </span>

          <span className="flex justify-center items-center">
            <SiBinance
              size={50}
              className=""
              style={window.innerWidth <= 768 ? smallScreenStyles : null}
            />
            <p className="font-bold text-xl max-md:hidden">Binance</p>
          </span>
        </div>
      </div>
      <Carousel />
      <Feautures />
      <Questions />
    </motion.div>
  );
}
