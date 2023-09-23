'use client'
import React from 'react'
import Image from 'next/image'

const ClickableImage: React.FC<{ modalFlip: boolean, onClick: () => void }> = ({ onClick }) => {

    return (
        <div onClick={onClick}>
            <div className="flex flex-col items-center justify-center h-12 animate-bounce w-30">
                <div className="h-8 w-0 border-l-2 border-r-2 border-gray-900 rounded"><span className=""></span></div>
                <div className="h-4 border-r-4 border-b-4 w-4 rotate-45 -mt-4 border-gray-900 rounded"><span className=""></span></div>
            </div>
            <div className="flex flex-col place-items-start ">
                <Image
                    src="/emily_circle.png"
                    alt="Emily"
                    className="h-auto w-auto relative drop-shadow-[0_0_0.3rem_#00000010] dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    width={600}
                    height={324}
                    priority
                    />
            </div>
        </div>
    )
}

export default ClickableImage
