import React from "react"

const TheModal: React.FC<{ modalFlip: boolean, onClick: () => void }> = ({ onClick }) => {

    const [ card, setCard ] = React.useState(0)
    const [ openCard, setOpenCard ] = React.useState(false)
    

   const cards : {
        title : string;
        text : string;
        icon : string;
        [key: string]: any;
    }[] = [
        {
            title: 'card_1',
            text: 'this is fun',
            icon: 'fa-regular fa-1',
            key: 1
        },
        {
            title: 'card_2',
            text: 'are we having fun?',
            icon: "fa-regular fa-2",
            key: 2
        },
        {
            title: 'card_3',
            text: 'lets gooooo',
            icon: "fa-regular fa-3",
            key: 3
        },
        {
            title: 'card_4',
            text: 'ok silly me',
            icon: "fa-regular fa-4",
            key: 4
        }
    ]


   
//    const cardComponent.map(card => {
//         <div key={card.key}>
//             <h1>{card.title}</h1>
//             <p>{card.text}</p>
//             <i className={card.icon}></i> 
//         </div>
//        })

       
 
    return (
        <div onClick={onClick} className="">
            
            <div className="flex flex-col items-center justify-center h-12 animate-bounce w-30">
                <div className="h-8 w-0 border-l-2 border-r-2 border-gray-900 rounded"><span className=""></span></div>
                <div className="h-4 border-r-4 border-b-4 w-4 rotate-45 -mt-4 border-gray-900 rounded"><span className=""></span></div>
            </div>
            <div className="bg-slate-50 w-[400px] h-[300px] ">
            <div className="flex items-center justify-center">
                {/* {card} */}
                        <h1>{cards[0].title}</h1>
                        <p>{cards[0].text}</p>
                        <i className="{cards[0].icon}"></i> 
                    </div>
                    
            </div>
        </div>
    )
}

export default TheModal
