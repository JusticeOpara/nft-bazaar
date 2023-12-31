import React, { useState } from "react"
import { Nfts } from "../utils/data";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
console.log(Nfts, "--NftCollection")


const Carousel: React.FC = () => {
  // const [showNavigation, setShowNavigation] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextImages = () => {
    const newIndex = Math.min(currentIndex + 4, Nfts.length - 4);
    setCurrentIndex(newIndex);
  };

  const showPreviousImages = () => {
    const newIndex = Math.max(currentIndex - 4, 0);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex flex-col justify-evenly mt-10 max-md:mt-0 w-full h-[100vh] max-md:h-[50vh]">

      <div className="flex flex-col items-center text-center gap-1 w-full font-poppins">
        <h1 className="text-4xl font-bold hero 2xl:text-6xl">Own Your NFT</h1>
        <p className="text-[16px] font-medium max-w-[760px] 2xl:text-lg ">
          Bazzar is the only place you can collect, buy, and sell digtial items ,
          crypto colectibles and non-fungible token. NFTS (non-Fungible Tokens) have gained sigincant popuarity.
        </p>

      </div>


      <div className=" w-full h-[60vh] relative max-md:h-[20vh] ">
        <div className="flex justify-start items-center">
          <button onClick={showPreviousImages} disabled={currentIndex === 0} className='flex justify-center items-center absolute z-[5] rounded-[50%] 
			            border-1 border-solid transition-[0.25] max-md:top-[4rem] top-[8rem] xl:top-[16rem]  p-0 cursor-pointer bg-white xl:w-[40px] xl:h-[40px]'>
            <GrFormPrevious size={`25px`} />
          </button>
        </div>

        <div className="flex justify-between w-full h-full reslative overflow-hidden z-0">
          
          {Nfts.slice(currentIndex, currentIndex + 4).map((image, index) => (
            <img key={index} src={image.imgUrl} className="w-[260px] 2xl:w-[390px] xl:w-[280px] max-md:w-[92px] rounded-xl object-cover h-full transition bg-black" alt={`Image ${currentIndex + index}`} />
          ))}

        </div>

        <div className="flex justify-end items-center bg-red-500">

          <button onClick={showNextImages} disabled={currentIndex + 4 >= Nfts.length} className='flex justify-center items-center absolute z-[5] rounded-[50%] 
              border-1 border-solid transition-[0.25] top-[8rem] max-md:top-[4rem] xl:top-[16rem] p-0 cursor-pointer bg-white xl:w-[40px] xl:h-[40px] '>
            <GrFormNext size={`25px`} className='' />
          </button>
        </div>
      </div>

    </div>
  )
}
export default Carousel
