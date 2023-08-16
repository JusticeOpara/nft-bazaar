import React, { useState } from 'react';
import { Categories } from "../utils/data";
import Container from "./Container";

console.log(Categories, "--Categories")

const Collection: React.FC = () => {

	const [hoveredStates, setHoveredStates] = useState<boolean[]>(Array(Categories.length).fill(false));

	const handleHover = (index: number) => {
		setHoveredStates(prevStates => {
		  const updatedStates = [...prevStates];
		  updatedStates[index] = true;
		  return updatedStates;
		});
	  };
	
	  const handleMouseLeave = (index: number) => {
		setHoveredStates(prevStates => {
		  const updatedStates = [...prevStates];
		  updatedStates[index] = false;
		  return updatedStates;
		});
	  };

	return (
		<Container>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                       xl:grid-cols-4 2xl:grid-cols-6 gap-6 pb-20 mt-[120px] bg-slate-400'>
				{Categories?.map((data, index: number) => (
					<div key={data.id}
						className='col-span-1 cursor-pointer group bg-emerald-200 rounded border-[1px] p-3'
						onMouseEnter={() => handleHover(index)}
						onMouseLeave={() => handleMouseLeave(index)}>
						
						<div className='flex flex-col gap-1 w-full h-full bg-blure-200'>
							<div className="relative w-full h-full overflow-hidden group rounded">
								<img src={data.imgUrl} className="w-full h-full object-cover  transition-transform transform-gpu filter-grayscale group-hover:filter-none group-hover:scale-110" />
							</div>


							<div className="relfative">

								<div className="flex w-full justify-between items-center ">
									<p className="text-base font-bold">{data.title}</p>
									<div className="bg-yellow-300 text-center py-1 px-4 rounded">
										<p className="font-bold text-sm">BCS</p>
									</div>
								</div>

								<div className="flex gap-3">
									<div className="w-[22%] ">
										<img src={data.creatorImg} alt="a rounded pic of a person" className="w-full" />
									</div>

									<div className="flex items-center w-full justify-between bg-slate-500">
										<div>
											<h6 className="text-sm font-normal">Created By</h6>
											<p className="text-base font-semibold">{data.creator}</p>
										</div>
										<div>
											<h6 className="text-sm font-normal">Current Bid</h6>
											<p className="text-base font-semibold ">{data.currentBid} ETH</p>
										</div>
									</div>
								</div>
								{hoveredStates[index] && (
									<div className="bottom-0 w-full h-[40px] mt-2 bg-blue-500 flex justify-center items-center">
										<button>Buy Now</button>
									</div>
									
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</Container>
	);
};

export default Collection;

