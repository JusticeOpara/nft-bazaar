

export default function Carousel() {
  return (
    <div className="flex  flex-col justify-between  mt-3 bg-slate-400 w-[100%] h-[90vh]">

      <div className="flex flex-col items-center text-center gap-1 w-full">
        <h1 className="text-4xl  font-bold">Own Your NFT</h1>
        <p className="text-[18px] font-medium max-w-[760px] ">
          Bazzar is the only place you can collect, buy, and sell digtial items ,
          crypto colectibles and non-fungible token. NFTS (non-Fungible Tokens) have gained sigincant popuarity.
        </p>

      </div>

      <div className="flex justify-between w-full h-[70vh] bg-zinc-700">

        <div className="w-[287px] rounded-xl  bg-blue-200"></div>
        <div className="w-[287px] rounded-xl  bg-blue-200"></div>
        <div className="w-[287px] rounded-xl  bg-blue-200"></div>
        <div className="w-[287px] rounded-xl  bg-blue-200"></div>

      </div>


    </div>
  )
}
