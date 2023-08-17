import React from "react"
// import img1 from "../assets/images/img13.webp"
// import img2 from "../assets/images/blink.webp"
import img from "../assets/images/img05.avif"

const Feautures:React.FC = () => {


    return (
        <div className="w-full  ">
            <div className=" h-[100vh] w-full flex justify-evenly items-center">
                <div className="w-[40%] h-[80%] ">
                    <img src={img} className="h-full w-full rounded-xl" alt="nft print" />
                </div>

                <div className="w-[40%] h-[80%] gap-8 flex flex-col justify-center">
                    <h1 className="text-2xl font-bold hero">Mint Your First NFt</h1>

                    <p className="font-normal text-[16px]  ">
                        NFTs, or Non-Fungible Tokens, are unique digital assets that represent ownership of specific
                        items on a blockchain. Minting an NFT involves creating a token and attaching it to a digital asset through platforms like OpenSea or Rarible. Steps include choosing a platform, creating the digital content, funding your wallet, inputting metadata, and paying gas fees. Benefits include ownership verification, monetization opportunities, and global reach. However, environmental concerns and market volatility should also be considered.
                        {/* NFTs offer a modern way for creators to showcase and profit from their digital creations. */}
                    </p>

                    <button className="flex items-center w-[120px]  bg-[#5142fc] hover:bg-blue-500 text-white font-bold py-2.5 px-6 rounded-lg">Nft Mint</button>
                </div>

            </div>

            <div className=" h-[100vh] w-full flex justify-evenly  items-center">
               
                <div className="w-[40%] h-[80%] gap-8 flex flex-col justify-center">
                    <h1 className="text-2xl font-bold hero">Security Audit</h1>

                    <p className="font-normal text-[16px]">
                    SlowMist is a blockchain security firm that provides various security services, including security audits, 
                    threat information, defense deployment, and security consulting. Their security audit service covers smart 
                    contracts and blockchain platforms such as Ethereum and Bitcoin.
                     The audit scheme is characterized by its low cost and short time.
                     The goal of SlowMist is to make the blockchain ecosystem as secure as possible for everyone.



                    </p>

                    <button className="flex  items-center w-[140px]  bg-[#5142fc]  hover:bg-blue-500 text-white font-bold py-2.5 px-6 rounded-lg">Read more</button>
                </div>

                <div className="w-[40%] h-[80%]">
                    <img src={img} className="h-full w-full rounded-xl" alt="nft print" />
                </div>


            </div>


        </div>
    )
}

export default Feautures