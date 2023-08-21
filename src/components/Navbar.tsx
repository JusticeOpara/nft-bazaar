// import { BiSearch } from 'react-icons/bi';
import { AiOutlineMenu } from "react-icons/ai";
import { RiNftFill } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiWallet } from "react-icons/bi"
import { Link } from "react-router-dom"
import React, { useRef, useEffect } from "react";


const Navbar: React.FC = () => {
    
    // const toggleMenu = () => menuRef.current.classList.toggle("active__menu");
    const headerRef = useRef<HTMLDivElement>(null);
    // const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                if (headerRef.current) {
                    headerRef.current.classList.add('header-shrink');
                }
            } else {
                if (headerRef.current) {
                    headerRef.current.classList.remove('header-shrink');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // const toggleMenu = () => {
    //     if (menuRef.current) {
    //         menuRef.current.classList.toggle('active__menu');
    //     }
    // };



    return (

        <div className="max-w-[2520px] px-20 font-poppins py-4 fixed w-full bg-inherit top-0 left-0 z-[111111]" ref={headerRef}>


            <div className="flex flex-row items-center justify-between gapt-3 md:gap-0 text-white">

                <Link to="/" className='flex items-center'>
                    <span className="hero bg-[linear-gradient(-45deg,#e250e5,#4b50e6,#e250e5,#4b50e6)]">

                        <RiNftFill size={50} color="#4b50e6" />
                    </span>

                    <span className='font-extrabold text-xl hero'>NFT Bazaar</span>
                </Link>

                <div className='flex gap-10 text-base font-medium items-center text-center '>

                    <p className='hover:text-[#e250e5]'><Link to="/">Home </Link></p>
                    <p className='hover:text-[#e250e5]'><Link to="/collection">Collection </Link></p>
                    <p className='hover:text-[#e250e5]'> <Link to="/stats">Stats </Link> </p>
                    <p className='hover:text-[#e250e5]'> <Link to="/create">Create </Link> </p>
                    <p className='hover:text-[#e250e5]'> <Link to="/community">Community</Link> </p>

                </div>

                {/* <div className="border-[1px] border-[#5142fc] w-full md:w-auto py-[5px] rounded-[16px] shadow-sm hover:shadow-md transition cursor-pointer">

                        <div className="flex flex-row items-center justify-between" >
                            <div className=" text-sm  font-semibold px-10">
                                Anywhere
                            </div>
                            <div className=" hidden  sm:block  text-sm  font-semibold  px-10  flex-1  text-center">
                           Any week
                            </div>
                            <div className="text-sm pl-6 pr-2  text-gray-600 flex flex-row items-center gap-3">
                                <div className="hidden sm:block">Add Guest</div>

                                <div className=" p-2  bg-rose-500 rounded-full  text-white">
                                    <BiSearch size={18} />
                                </div>

                            </div>
                        </div>
                    </div> */}



                {/* <Search /> */}
                <div className="relative ">
                    <div className="flex flex-row items-center gap-2">

                        <div className='flex items-center py-[7px] px-[20px] border-[1px] border-[#5142fc] rounded-[50px]'>

                            <BiWallet size={20} />
                            <p className='text-sm font-medium flex'>
                                Connect Wallet
                            </p>

                        </div>
                        <div className="p-4 md:py-1 md:px-2 border-[1px] border-neutrval-200 border-[#5142fc] flex flex-row items-center  gap-3  rounded-full   cursor-pointer hover:shadow-md transition">
                            <AiOutlineMenu />
                            <div className="hidden md:block">


                                <RxAvatar size={30} className="rounded-full" />

                            </div>
                        </div>
                        <div className='md:py-2 md:px-2 border-[1px] border-nyeutral-200 border-[#5142fc] rounded-xl cursor-pointer hover:shadow-md transition'>
                            <AiOutlineShoppingCart size={25} color={"gray"} />
                        </div>
                    </div>
                </div>



            </div>



        </div>


    )

}
export default Navbar