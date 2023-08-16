import { BiSearch } from 'react-icons/bi';
import { AiOutlineMenu } from "react-icons/ai";
import { RiNftFill } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Container from "./Container";
import { Link } from "react-router-dom"



export default function Navbar() {


    return (

        <div className=" py-4 border-b-[1px] bg-slate-400 fixed w-full top-0 left-0 z-[111111]">


            <Container>

                <div className="flex flex-row items-center justify-between gapt-3 md:gap-0 bg-bluue-500">
                    {/* <div className=''> */}
                        <Link to="/" className='flex items-center'>
                            <RiNftFill size={50} />
                            <span className='font-extrabold text-xl'>NFT Bazaar</span>
                        </Link>


                    {/* </div> */}

                    <div className='flex gap-6 bg-skjy-500 text-lg font-semibold items-center text-center'>
                        <p><Link to="/">Home</Link></p>

                        <p><Link to="/collection">Collection </Link></p>
                        <p> <Link to="/stats">Stats </Link> </p>
                    </div>

                    <div className="border-[1px] w-full md:w-auto py-2 rounded-[16px] shadow-sm hover:shadow-md transition cursor-pointer bg-amber-500">

                        <div className="flex flex-row  items-center  justify-between" >
                            <div className=" text-sm  font-semibold px-10">
                                Anywhere
                            </div>
                            <div className=" hidden  sm:block  text-sm  font-semibold  px-10 border-x-[1px] flex-1  text-center">
                                Any week
                            </div>
                            <div className="text-sm pl-6 pr-2  text-gray-600 flex flex-row items-center gap-3">
                                <div className="hidden sm:block">Add Guest</div>

                                <div className=" p-2  bg-rose-500 rounded-full  text-white">
                                    <BiSearch size={18} />
                                </div>

                            </div>
                        </div>
                    </div>



                    {/* <Search /> */}
                    <div className="relative ">
                        <div className="flex flex-row items-center gap-2">
                            <div className="hidden md:block text-sm font-semibold py-3 px-4  rounded-fullhover:bg-neutral-100 transition cursor-pointer">
                                <p className='text-base font-bold'>
                                    Connect Wallet
                                </p>
                            </div>
                            <div className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center  gap-3  rounded-full   cursor-pointer hover:shadow-md transition">
                                <AiOutlineMenu />
                                <div className="hidden md:block">


                                    <RxAvatar size={30} className="rounded-full" />

                                </div>
                            </div>
                            <div className='md:py-2 md:px-2 border-[1px] border-neutral-200 rounded-xl cursor-pointer hover:shadow-md transition'>
                                <AiOutlineShoppingCart size={25} color={"gray"} />
                            </div>
                        </div>
                    </div>



                </div>


            </Container>
        </div>


    )

}