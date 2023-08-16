import React, { useState } from 'react';
import { Categories } from "../utils/data";
import Container from "./Container";

console.log(Categories, "--Categories")



const Collection = () => {
	const [isHovered, setIsHovered] = useState(false);

	function handleHover() {
		setIsHovered(true);
	}

	function handleMouseLeave() {
		setIsHovered(false);
	}

	return (
		<Container>
			<div
				className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                       xl:grid-cols-4 2xl:grid-cols-6 gap-5 pb-20 mt-[120px] bg-slate-400'>
				{Categories?.map((data) => (
					<div key={data.id}
						className='col-span-1 cursor-pointer group bg-emerald-200 rounded-lg border-[1px] p-3'
						onMouseEnter={handleHover}
						onMouseLeave={handleMouseLeave}>

						<div className='flex flex-col gap-1 w-full h-full bg-blure-200'>
							<div className="relative w-full h-full overflow-hidden group rounded-lg">
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
									<div className="w-[20%]">
										<img src={data.creatorImg} alt="a rounded pic of a person" className="w-full" />
									</div>

									<div className="flex items-center w-full justify-between bg-slate-500">
										<div>
											<h6 className="text-sm font-normal">Created By</h6>
											<p className="text-base font-medium">{data.creator}</p>
										</div>

										<div>
											<h6 className="text-sm font-normal">Current Bid</h6>
											<p className="text-base font-medium ">{data.currentBid} ETH</p>
										</div>
									</div>
								</div>

								{isHovered && (
									<div className=" bottom-0 w-full h-[50px] mt-2 bg-blue-500 flex justify-center items-center ">
										
										<button>Buy my product</button>
									</div>
								)}
								

							</div>
						</div>
					</div>
				))}
			</div>


		</Container>


	)

}

export default Collection

{/* <div className=" mt-3 d-flex align-items-center justify-content-between">
									<button
										className="bid__btn d-flex align-items-center gap-1"
										onClick={() => setShowModal(true)}
									>
										<i class="ri-shopping-bag-line"></i> Place Bid
									</button>

									{showModal && <Modal setShowModal={setShowModal} />}

									<span className="history__link">
										<Link to="#">View History</Link>
									</span>
								</div> */}