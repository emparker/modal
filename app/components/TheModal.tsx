'use client'

import React from "react"
import Card from "./Card"

const TheModal: React.FC<{ modalFlip: boolean, onClick: () => void }> = ({ onClick }) => {
    // const [ card, setCard ] = React.useState(0)
    // const [ openCard, setOpenCard ] = React.useState(false)
    

   const card : {
        title : string;
        subTitle: string;
        text : string;
        image : string;
    } = 
        {
            title: 'Your Title',
            subTitle: 'Sub Title Goes Here',
            text: '404: Sense of Humor Not Found',
            image: 'topo-unsplash.jpg'
        }
       
  

console.log(card)

    return (
        <div onClick={onClick} className="flex flex-col items-center bg-slate-50 w-[800px] h-auto p-20 ">
                {/* { cards.map(card => <Card key={card.key} title={card.title} text={card.text} />)} */}
            <Card title={card.title} subTitle={card.subTitle} text={card.text} image={card.image} />
        </div>
                    
    )
}

export default TheModal
