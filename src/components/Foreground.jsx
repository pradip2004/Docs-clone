import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null)
    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            fileSize: ".9mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Delete", tagColor: "green"}
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            fileSize: ".7mb",
            close: false,
            tag: {isOpen: false, tagTitle: "Download now", tagColor: "green"}
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            fileSize: ".4mb",
            close: false,
            tag: {isOpen: true, tagTitle: "Download now", tagColor: "blue"} 
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            fileSize: ".7mb",
            close: false,
            tag: {isOpen: true, tagTitle: "Download now", tagColor: "green"}
        },
    ]


    return (
        <div ref={ref} className='w-full h-[85vh] fixed  top-[15vh] left-0 z-[3] flex gap-8 flex-wrap'>
            {data.map((item, index)=>(
                <Card data={item} reference={ref}/>
            ))}
        </div>
    )
}

export default Foreground