import React from "react"
import { IoIosPricetags } from "react-icons/io"
import { AiOutlineCloudUpload } from "react-icons/ai"
import { motion } from "framer-motion"
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup'
// import background from "../assets/images/nft-background.jpg"

const Create: React.FC = () => {

  return (
    <motion.div
      className="font-poppins text-white  mb-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <div className="flex justify-center pt-[150px] h-[50vh] items-center bg-center bg-hero-pattern bg-no-repeat bg-cover relative overflow-hidden">
        <p className="text-4xl font-bold">Create Your Own NFT</p>
      </div>

      <div className="px-20 max-md:px-0 bg-[#212529] w-full h-[150vh] max-sm:h-[235vh] max-sm:justify-evenly flex justify-between pt-[50px] max-md:pt-0 max-md:flex-col">
        <div className="flex flex-col gap-2 max-gmd:bg-gray-500 max-md:w-full max-md:items-center">
          <div className="bg-gradient-to-r from-[#e250e5] to-[#4b50e6] rounded-lg w-[20rem] h-[25rem] flex justify-center items-center border">

            <div className="flex flex-col gap-4 items-center">
              <AiOutlineCloudUpload size={50} />

              <div className="flex justify-center flex-col">
                <p className="text-base font-normal">SVG,PNG,JPG,WEBP</p>
                <p className="text-base font-normal">MP4,AVI,WMV,MPEG</p>
                <p className="text-base font-normal te">MP3,WAV,AAC,WAV</p>

              </div>
              <span>
                <h1 className=" font-medium text-lg">Max Size 1 GB</h1>
              </span>

            </div>

          </div>

          <div className="flex gap-2 flex-col max-md:items-start max-md:pl-20 max-md:w-full">
            <p>Note:</p>
            <p>Service charge: 2%</p>
            <p>Today conversion rate:</p>
            <p>1ETH = 1500 Dollar</p>
            <button className="flex items-center justify-center bg-transparent  text-blue-700 font-semibold py-1 w-20 border border-[#5142fc] rounded-lg">
              Preview
            </button>
          </div>
        </div>

        <div className="w-[48rem] h-[40rem] p-6 rounded-lg border max-md:w-full">
          <form className="gap-5 flex flex-col">
            <div className="">
              <label>Item Name</label>
              <input type="text"
                placeholder="e.g Digital NFT item name"
                className="w-full h-[40px] rounded-md bg-transparent pl-4 outline-none cursor-pointer border " />
            </div>

            <div className="">
              <label htmlFor="">Description</label>
              <input type="text"
                placeholder="e.g This item is deisign by famous digital Artist Paul Hart"
                className="w-full h-[100px] rounded-md bg-transparent pl-4  outline-none cursor-pointer border" />
            </div>


            <div className="flex gap-7">
              <div className="">
                <label htmlFor="">Unlocked one Purchashed</label>
                <input type="text"
                  placeholder="e.g 1500$"
                  className="w-full h-[40px] rounded-md bg-transparent border pl-4" />
              </div>

              <div className="">
                <label htmlFor="">Properties</label>
                <input type="text"
                  placeholder="e.g Properties"
                  className="w-full h-[40px] rounded-md bg-transparent border pl-4" />
              </div>

              <div className="">
                <label htmlFor="">Size</label>
                <input type="text"
                  placeholder="e.g 5000x3000px"
                  className="w-full h-[40px] rounded-md bg-transparent border pl-4" />
              </div>
            </div>

            <div className=" flex gap-7">

              <div className="w-[400px] h-[60px] bg-greegn-200 flex flex-col float-l5eft">
                <label htmlFor="">Starting Date</label>
                <input type="text"
                  className="w-full h-[100px] rounded-md bg-transparent border pl-4" />
              </div>

              <div className="w-[250px] h-[40px] mt-5 rounded-md bg-transparent border flex justify-center items-center flo5at-right">
                <p>NEW COLLECTION</p>
              </div>

            </div>

            <div className="">
              <label>Unlock One Purchase</label>
              <input type="text"
                placeholder="Content will be unlocked after sucessfull transaction"
                className="w-full h-[40px] rounded-md bg-transparent pl-4 outline-none cursor-pointer border" />
            </div>



            <div className="flex justify-between gap-6">
              <div className="flex flex-row items-center w-full h-[40px] bg-[#e250e5] border  rounded justify-center ">
                <IoIosPricetags size={15} className="" />
                <span className="font-medium text-base">FIXED PRICE</span>
              </div>
              <div className="flex w-full h-[40px] border rounded bg-transparent justify-center items-center">
                <p className="font-medium text-base">TIMED AUCTION</p>
              </div>
              <div className="flex items-center w-full h-[40px] rounded bg-transparent justify-center border">
                <p className="font-medium text-base">OPEN FOR BID</p>
              </div>
            </div>

            <div className="w-full h-[40px] bg-[#4b50e6] rounded flex items-center justify-center">
              <p className="font-semibold text-base ">CREATE COLLLECTION</p>
            </div>

          </form>

        </div>

      </div>
    </motion.div>
  );
};

export default Create;


