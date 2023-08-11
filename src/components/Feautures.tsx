import img1 from "../assets/images/img13.webp"
import img2 from "../assets/images/blink.webp"

const Feautures = () => {


    return (
        <div className="w-full h-[300vh] bg-slate-600">
            <div className=" h-[100vh] w-full flex justify-evenly bg-stone-300 items-center">
                <div className="w-[40%] h-[70%] ">
                    <img src={img1} className="h-full w-full rounded-xl" alt="nft print" />
                </div>

                <div className="w-[40%] h-[80%] gap-6 flex  flex-col justify-center bg-neutral-600 ">
                    <h1 className="text-2xl font-bold">Mint Your First NFt</h1>

                    <p className="font-normal text-[16px]  ">
                        NFTs, or Non-Fungible Tokens, are unique digital assets that represent ownership of specific
                        items on a blockchain. Minting an NFT involves creating a token and attaching it to a digital asset through platforms like OpenSea or Rarible. Steps include choosing a platform, creating the digital content, funding your wallet, inputting metadata, and paying gas fees. Benefits include ownership verification, monetization opportunities, and global reach. However, environmental concerns and market volatility should also be considered.
                        {/* NFTs offer a modern way for creators to showcase and profit from their digital creations. */}
                    </p>

                    <button className="flex items-center w-[120px]  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg">Nft Mint</button>
                </div>

            </div>

            <div className=" h-[100vh] w-full flex justify-evenly bg-stone-500 items-center">
               
                <div className="w-[40%] h-[80%] gap-6 flex  flex-col justify-center bg-neutral-600 ">
                    <h1 className="text-2xl font-bold">Mint Your First NFt</h1>

                    <p className="font-normal text-[16px]  ">
                        NFTs, or Non-Fungible Tokens, are unique digital assets that represent ownership of specific
                        items on a blockchain. Minting an NFT involves creating a token and attaching it to a digital asset through platforms like OpenSea or Rarible. Steps include choosing a platform, creating the digital content, funding your wallet, inputting metadata, and paying gas fees. Benefits include ownership verification, monetization opportunities, and global reach. However, environmental concerns and market volatility should also be considered.
                        {/* NFTs offer a modern way for creators to showcase and profit from their digital creations. */}
                    </p>

                    <button className="flex  items-center w-[140px]  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg">Read more</button>
                </div>

                <div className="w-[40%] h-[80%]">
                    <img src={img2} className="h-full w-full rounded-xl" alt="nft print" />
                </div>


            </div>


        </div>
    )
}

export default Feautures