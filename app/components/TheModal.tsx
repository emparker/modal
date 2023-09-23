import react from "react"

const TheModal: React.FC<{ modalFlip: boolean, onClick: () => void }> = ({ onClick }) => {

    return (
        <div onClick={onClick} className="">
            
            <div className="flex flex-col items-center justify-center h-12 animate-bounce w-30">
                <div className="h-8 w-0 border-l-2 border-r-2 border-gray-900 rounded"><span className=""></span></div>
                <div className="h-4 border-r-4 border-b-4 w-4 rotate-45 -mt-4 border-gray-900 rounded"><span className=""></span></div>
            </div>
            <div className="bg-slate-50 w-[400px] h-[300px] flex items-center justify-center">
                <h1>YO</h1>
            </div>
        </div>
    )
}

export default TheModal