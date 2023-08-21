import React from "react"
// import { RiNftFill } from "react-icons/ri";

const Footer: React.FC = () => {
    return (
        <div className="flex justify-between bg-blue-500 h-[50vh] items-center">
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-2xl" >NFT</h1>
                <p className="text-base max-w-[300px] bg-blue-200">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). </p>
            </div>
            <div className="">
                <h1 className="text-base font-bold">Marketplace</h1>
                <p>Collection</p>
                <p>Roadmap</p>
                <p>About</p>
            </div>
            <div className="">
                <h1 className="text-base font-bold">Social Media</h1>
                <p>Twitter</p>
                <p>Linkedin</p>
                <p>Telegram</p>

            </div>
            <div className="">
                <h1 className="text-base font-bold">Resources</h1>
                <p>Github</p>
                <p>Blog</p>
                <p>Help center</p>
            </div>

        </div>
        // family: -apple-system,BlinkMacSystemFont,Segoe
        //  UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;

    );
};

export default Footer;
