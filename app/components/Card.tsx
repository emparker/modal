'use client'

import React from 'react'
import Image from 'next/image'

const Card: React.FC<{ title: string, subTitle: string, text:string, image:string }> = ({title, subTitle, text, image}) => {
   
    return (
            <>
                <h1 className="text-7xl">{title}</h1>
                <img src={image} className="w-full h-36 object-cover"/>
                <h2>{subTitle}</h2>
                <p className="bg-red-600 text-5xl">{text}</p>
            </>
    )
}

export default Card