import Draggable from "react-draggable"
import { MdCallEnd, MdNavigateNext } from "react-icons/md"

function Home() {
    return (
        <div className={` bg-zinc-200 dark:bg-zinc-900 w-full min-h-lvh flex items-center`}>
            <div className="flex w-full md:w-7/12 bg-slate-400 min-h-lvh relative justify-center items-end">
                <Draggable bounds="parent">
                    <div className="flex absolute w-32 h-40 md:w-52 md:h-72 bg-slate-300 left-5 top-5 rounded-md shadow-lg z-10"></div>
                </Draggable>
                <div className="flex w-[90%] sm:w-96 absolute z-20 bottom-10  h-14 justify-around items-center">
                    <button type="button" className={`w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex justify-center items-center`}><MdCallEnd size={20} color="white"/></button>
                    <button type="button" className={`w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex justify-center items-center`}><MdNavigateNext size={24} color="white"/></button>
                    <button type="button" className={`w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex justify-center items-center`}></button>
                </div>
                <div className="flex absolute z-20 top-5 right-5 flex-col gap-y-5">
                    <button type="button" className={`w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full`}></button>
                    <button type="button" className={`w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full`}></button>
                </div>

            </div>
            <div className="flex"></div>
        </div>
    )
}

export default Home