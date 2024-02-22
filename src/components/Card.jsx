import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ data, reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scaleX: 1.2}} className='relative flex-shrink-0 w-48 h-64 rounded-[40px] bg-zinc-900/90 text-white py-8 px-10 overflow-hidden'>
            <FaRegFileAlt />
            <p className='mt-5 text-sm leading-tight font-semibold'>{data.desc}</p>
            <div className="footer absolute bottom-0 left-0  w-full">
                <div className='flex items-center justify-between  py-3 px-8 mb-3'>
                    <h5>{data.fileSize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex  items-center justify-center text-white'>
                        {data.close ? <IoIosClose /> : <MdOutlineFileDownload size=".8em" color='#fff' />}


                    </span>
                </div>
                {data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColor==="blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                        <h5 className='text-sm font-semibold'>{data.tag.tagTitle}</h5>
                    </div>) }

            </div>
        </motion.div>
    )
}

export default Card