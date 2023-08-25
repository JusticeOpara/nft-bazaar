import React, { useState } from 'react';
import { Categories } from "../utils/data";
import { FaEthereum } from "react-icons/fa"
import { BsFilter, BsSearch } from "react-icons/bs"
import { motion } from "framer-motion"

interface Category {
	id: string;
	title: string;
	imgUrl: string;
	price: number;
	creatorImg: string;
	currentBid: number;
}
console.log(Categories, "--Categories")

const Collection: React.FC = () => {
	const [data, setData] = useState<Category[]>([]);
	console.log(data, "--data to handle sort")
	const [hoveredStates, setHoveredStates] = useState<boolean[]>(Array(Categories.length).fill(false));
	const [favorite, setFavorite] = useState<{ [id: number]: boolean }>({})


	const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const filterValue = e.target.value;

		switch (filterValue) {

			case 'high':
				setData(Categories.filter(item => item.currentBid >= 6));
				break;
			case 'mid':
				setData(Categories.filter(item => item.currentBid >= 5.5 && item.currentBid < 6));
				break;
			case 'low':
				setData(Categories.filter(item => item.currentBid >= 4.89 && item.currentBid < 5.5));
				break;

			default:
				setData(Categories);
				console.log(Categories,"--default")
				break;
		}
		console.log(filterValue, "-filteredValue")
	};



	const handleFavourited = (index: number) => {
		setFavorite((prevFavorites) => ({ ...prevFavorites, [index]: true }));
	};

	const handleUnfavourite = (index: number) => {
		setFavorite((prevFavorites) => ({ ...prevFavorites, [index]: false }));
	};

	const handleHover = (index: number) => {
		setHoveredStates((prevStates) => {
			const updatedStates = [...prevStates];
			updatedStates[index] = true;
			console.log(updatedStates, "---updatedStates")
			return updatedStates;

		});

	};

	const handleMouseLeave = (index: number) => {
		setHoveredStates((prevStates) => {
			const updatedStates = [...prevStates];
			updatedStates[index] = false;
			return updatedStates;
		});
	};
	console.log(hoveredStates, "--hoverStates")



	return (
		<motion.div
			className='font-poppins text-white'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>

			<div className="flex justify-center h-[50vh] items-center bg-center bg-hero-pattern bg-no-repeat bg-cover relative overflow-hidden">
				<p className="text-4xl font-bold text-white"> Collection</p>
			</div>

			<div className="w-full bg-slate-500 flex items-center justify-between px-20 gap-6">
				<div className='bg-gray-300 rounded-xl'>
					<BsFilter size={40} />
				</div>

				<div className='flex items-center cursor-pointer w-full bg-inherit border pty-2 h-[46px] rounded-xl pl-5 gap-4 pr-5'>
					<BsSearch size={20} color={"white"} />
					<input type="text"
						placeholder='Search by the name of trait'
						className='w-full bg-inherit h-[2rem] focus:border-0 focus:outline-none placeholder-white text-black border-[#D1D5DB]' />
				</div>

				<div className="bg-red-400">
					<select className='bg-red-400' onChange={handleSort}>
						<option>sfs</option>
						<option value="default">Default</option>
						<option value="high">High Rate</option>
						<option value="mid">Mid Rate</option>
						<option value="low">Low Rate</option>
					</select>
				</div>
			</div>


			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                       xl:grid-cols-4 2xl:grid-cols-6 gap-6 px-20 pb-20 mt-[50px] max-md:p-0 '>
				{data?.map((data, index: number) => (
					<div key={data.id}
						className='col-span-1 cursor-pointer group bg-[#0f1729] max-md:h-[60vh] text-white border-[1px] border-gray-500  p-[8px] shadow-2xl rounded-lg'
						onMouseEnter={() => handleHover(index)}
						onMouseLeave={() => handleMouseLeave(index)}>

						<div className='flex flex-col items-center gap-1 w-full h-full'>

							<div className="relative w-[236.67px] h-[236.67px] overflow-hidden group rounded-lg max-md:w-full max-md:h-full bg-white">
								<img src={data.imgUrl} className="z-0 relative w-full h-full object-cover transition-transform transform-gpu filter-grayscale group-hover:filter-none group-hover:scale-110" />


								<div className="absolute top-[8px] right-[8px]">
									{favorite[index] ? (
										<svg onClick={() => handleUnfavourite(index)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
											focusable="false" className="chakra-icon css-13otjrl" aria-hidden="true">
											<path d="M4.999 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424l-7.234-4.537-7.234 4.536a.5.5 0 0 
                                      1-.766-.423V3a1 1 0 0 1 1-1Z" fill="currentColor"></path>
										</svg>

									) : (
										<svg onClick={() => handleFavourited(index)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
											focusable="false" className="chakra-icon css-13otjrl" aria-hidden="true">
											<path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.767.424L12 
							18.03l-7.234 4.536a.5.5 0 0 1-.766-.423V3a1 1 0 0 1 1-1Zm13 2H6v15.432l6-3.761 6 3.761V4Z"
												fill="currentColor"></path>
										</svg>

									)}

								</div>
							</div>



							<div className="w-full">
								<div className="w-[32px] flex flex-row items-center gap-2 flex-start ">
									<img src={data.creatorImg} alt="a rounded picture of a person" className="w-full" />
									<p className='text-[16px]  font-medium hover:text-[#5142fc]'>@Jacqueline</p>
								</div>

								<div className="flex w-full justify-between items-center  ">
									<p className="text-base text-white font-bold hover:text-[#5142fc]">{data.title}</p>
									<div className="bg-yelllow-300 bg-[#5142fc] text-center py-1 px-4 rounded m-1">
										<p className="font-bold text-sm">ETH</p>
									</div>
								</div>

								<div className="flex flex-row  w-full justify-between p-[8px] rounded-[8px]   bg-slate-500">
									<div className=''>
										<p className="text-sm font-normal ">Price</p>
										<p className="text-base font-semibold">{data.price}</p>
									</div>
									<div className=''>
										<p className="text-sm font-normal">Higest Bid</p>
										<p className="text-base font-semibold p-0 flex items-center "><FaEthereum size={15} />{data.currentBid} ETH</p>
									</div>
								</div>
							</div>


							{hoveredStates[index] && (

								<button className="bottom-0 w-full h-[40px] max-md:h-[50px] bg-[#5142fc] flex justify-center items-center rounded-lg ">
									Place a Bid
								</button>

							)}

						</div>
					</div>
				))}
			</div>

		</motion.div>

	);
};

export default Collection;