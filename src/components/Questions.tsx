import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion"
import {useRef} from "react"

// Interface for the individual FAQ item
interface FaqItem {
    question: string;
    answer: string;
}

// Array of FAQ items
const faqData: FaqItem[] = [
    {
        question: "What is an NFT?",
        answer: "An NFT, or Non-Fungible Token, is a unique digital asset that represents ownership of a specific item, artwork, video, music, collectible, or any other digital content on a blockchain."
    },
    {
        question: "How do NFTS work ?",
        answer: "NFTs work on blockchain technology, often using Ethereum's ERC-721 or ERC-1155 standards. Each NFT has a unique identifier that distinguishes it from other tokens",
    },
    {
        question: "What makes NFTs valuable ?",
        answer: "NFTs derive value from their scarcity, provenance, and ownership rights. The ability to prove authenticity and ownership of a digital item has led to their appeal in the art gaming, and entertainment industries."

    },
    {
        question: "How do I create or mint an NFT ?",
        answer: "To create an NFT, you typically need to use a platform that supports NFT minting, such as OpenSea, Rarible, or Mintable.  You'll upload your digital content, define metadata, and pay a gas fee for the minting process."
    },
    {
        question: "What's the future of NFTs?",
        answer: "The future of NFTs is still evolving. They hold potential in revolutionizing ownership and distribution of digital content, enabling creators to directly monetize their work and providing new ways for people to engage with digital media."
    }


];

// Collapsible component
const Collapsible: React.FC<FaqItem & { isOpen: boolean; onClick: () => void }> = ({
    question,
    answer,
    isOpen,
    onClick,
}) => {
    return (
        <div
            className={`w-full mb-5 max-md:mb-2 bg-[-[#212529] flex flex-col justify-between cursor-pointer border-[1px] border-[#767676] rounded ${isOpen ? "mb-0" : "mb-0"
                }`}
        >
            <div
                className="flex flex-row justify-between px-3 py-3  items-center border-[#767676] rounded"
                style={{ color: isOpen ? "#004DB3" : "#000" }}
                onClick={onClick}
            >
                <h4 className="text-xl text-white font-medium text-medium">
                    {question}
                </h4>
                <button className="text-[25px] w-[30px] h-[25px] flex justify-center items-center rounded hero">
                    {isOpen ? "-" : "+"}
                </button>
            </div>
            {isOpen && (
                <div className="leading-6 bg-[#212529] flex justify-center items-center">
                    <p className="text-sm font-medium px-3 py-3">{answer}</p>
                </div>
            )}
        </div>
    );
};


const Questions: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleAccordionClick = (index: number) => {
        if (index === openIndex) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    const yRange = [0, 1]
    const vRange = [0.6, 1]
    const xRange = [0, 1]
    const opacityRange = [0.8, 1]
    const scaleProgess = useTransform(scrollYProgress, xRange, opacityRange)
    const opacityProgess = useTransform(scrollYProgress, yRange, vRange)

    return (
        <motion.div ref={ref}
        style={{scale: scaleProgess,opacity: opacityProgess}}
        className="w-full bg-inherit max-sm:h-[60vh]  h-[100vh] 2xl:h-[60vh] flex flex-col justify-evenly items-center">
            
                <h1 className="font-bold text-2xl 2xl:text-4xl text-center">
                    Frequently Asked <span className="hero">Questions</span>
                </h1>
            
            <div className="w-full flex flex-col gap-[0px] ">
                {faqData.map((faq, index) => (
                    <Collapsible
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={index === openIndex}
                        onClick={() => handleAccordionClick(index)}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default Questions;
