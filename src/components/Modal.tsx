import { FC, ReactNode } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode; // Use ReactNode type to allow any type of content
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#212529]">
            <div className='overflow-scroll w-[32%] h-[100%] mt-5 overflow-x-hidden max-md:w-full  max-sm:h-[90%]  max-md:mt-20'>

                <div className="bg-blafck p-5 flex flex-col w-full h-full rounded-2xl mt-20 shadow-2xl z-10 text-white border-[1px]">

                    <div className='flex justify-between mb-5 '>
                        <p className='text-xl font-bold text-white'> Place Bid</p>

                        <button className="px-2 py-1 text-white rounded hover:bg-slate-200" onClick={onClose}>
                            <AiOutlineClose size={20} />
                        </button>
                    </div>
                    {children}

                </div>

            </div>


        </div>
    );
};

export default Modal;
