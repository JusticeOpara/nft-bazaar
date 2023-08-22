import React,{ useState } from "react"

interface CollapsibleProps {
    question: string,
    answer: string
}


const Collapsible: React.FC<CollapsibleProps> = ({ question, answer }) => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open);
    };

    
    return (
        <div className={`w-full mb-10 btg-[#343444] flex flex-col justify-between cursor-pointer border-[1px] border-[#767676] rounded ${open ? 'mb-0' : 'mb-0'}`}>
    
            <div className="flex flex-row justify-between px-3 py-3 items-center border-[#767676] rounded " style={{ color: !open ? '#000' : '#004DB3' }}>

                <h4 className="text-xl max-md:text-base text-white font-medium text-medium">{question}</h4>

                <button className="text-[25px] w-[30px] h-[25px] flex justify-center items-center rounded hero" onClick={toggle}   >

                    {open ? "-" : "+"}

                </button>

            </div>

            {open &&
                <div className="leading-6 bg-[#212529] flex justify-center items-center">
                    <p className="text-sm font-medium px-3 py-3">{answer}</p>
                </div>
            }
        </div>

    )
}


const Questions:React.FC = () =>{

    return (

        <div className="w-full h-[120vh] flex flex-col justify-evenly items-center max-md:h-[100vh]">


            <h1 className="font-bold text-2xl text-center">Frequently Asked <span className="hero">Questions</span> </h1>


            <div className="w-full flex flex-col gap-[5px]">
                <Collapsible
                    question="What is an NFT ?"
                    answer="An NFT, or Non-Fungible Token, is a unique digital asset that represents ownership of a specific item, 
                    artwork, video, music, collectible, or any other digital content on a blockchain."
                />
                <Collapsible
                    question="How do NFTS work ?"
                    answer="NFTs work on blockchain technology, often using Ethereum's ERC-721 or ERC-1155 standards. 
                    Each NFT has a unique identifier that distinguishes it from other tokens, 
                    making it impossible to interchange one NFT for another on a one-to-one basis."
                />

                <Collapsible
                    question="What makes NFTs valuable ?"
                    answer="NFTs derive value from their scarcity, provenance, and ownership rights. 
                    The ability to prove authenticity and ownership of a digital item has led to their appeal in the art, 
                    gaming, and entertainment industries."

                />

                <Collapsible
                    question="How do I create or mint an NFT ?"
                    answer="To create an NFT, you typically need to use a platform that supports NFT minting, such as OpenSea, Rarible, or Mintable. 
                    You'll upload your digital content, define metadata, and pay a gas fee for the minting process."
                />

                <Collapsible
                    question="What's the future of NFTs?"
                    answer="The future of NFTs is still evolving. They hold potential in revolutionizing ownership and distribution of digital content, 
                    enabling creators to directly monetize their work and providing new ways for people to engage with digital media."

                />

            </div>


        </div>


    )
}
export default Questions
