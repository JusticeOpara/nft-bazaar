import React from "react"
import { RiNftFill } from "react-icons/ri";

const Footer: React.FC = () => {
    return (
        <div className="h-[50vh] max-md:h-[70vh] flex flex-col justify-center w-full px-20 max-md:px-0 bg-black">
            <div className="flex justify-between max-md:flex-col max-md:items-start max-md:justify-evenly h-full w-full  items-center font-poppins text-white">

                <div className="flex flex-col gap-3 items-start">
                    <span className="flex items-center">
                        <RiNftFill size={40} color={"#4b50e6"} />
                        <h1 className="font-bold text-2xl hero" >NFT</h1>
                    </span>

                    <p className="text-base max-md:text-xs font-medium max-w-[350px] bg-yblue-200">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). </p>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="text-base font-bold">Marketplace</h1>
                    <div className="flex flex-col gap-2">
                        <a href={"/"} className="text-sm font-medium">Collection</a>
                        <a href={"/"} className="text-sm font-medium">Roadmap</a>
                        <a href={"/"} className="text-sm font-medium">About</a>
                    </div>

                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="text-base font-bold">Social Media</h1>
                    <div className="flex flex-col gap-2">
                        <a href={"/"} className="text-sm font-medium">Twitter</a>
                        <a href={"/"} className="text-sm font-medium">Linkedin</a>
                        <a href={"/"} className="text-sm font-medium">Telegram</a>
                    </div>

                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="text-base font-bold">Resources</h1>
                    <div className="flex flex-col gap-2">
                        <a href={"https://github.com/JusticeOpara"} className="text-sm font-medium">Github</a>
                        <a href={"https://hashnode.com"} className="text-sm font-medium">Blog</a>
                        <a href={"https://dontasktoask.com"} className="text-sm font-medium">Help center</a>
                    </div>

                </div>

            </div>
            <p className="flex items-center max-md:text-sm text-white justify-center bg-black"> Copyright 2023 - NFT MARETPLACE BY JUSTSCRIPT</p>
        </div>

    
    );
};

export default Footer;
