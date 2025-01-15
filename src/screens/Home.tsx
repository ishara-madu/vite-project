import Draggable from "react-draggable"
import { MdCallEnd, MdNavigateNext } from "react-icons/md"
import path from '../assets/flags/lk.svg'
import gender from '../assets/gender/all.svg'
import premium from '../assets/premium.svg'
import settings from '../assets/settings.svg'
import report from '../assets/report.svg'
import camera from '../assets/camera.svg'
import maximize from '../assets/maximize.svg'
import minimize from '../assets/minimize.svg'
import { useRef, useState } from "react"
import Webcam from "react-webcam"
import Basics from "../components/Basics"


function Home() {
    const [showMe, setshowMe] = useState<boolean>(false)
    const [maximizeMe, setmaximizeMe] = useState<boolean>(false)
    const webcamRef = useRef<Webcam>(null);

    return (
        <div className={` bg-zinc-200 dark:bg-zinc-900 w-full min-h-lvh flex items-center justify-between`}>
            <div className="flex w-full md:w-7/12 bg-blue-100 bg-opacity-60 min-h-lvh relative justify-center items-end">
                {
                    !maximizeMe && (
                        showMe ? (
                            <Draggable bounds="parent">
                                <div className="flex absolute w-32 h-40 md:w-52 md:h-72 bg-slate-300 left-5 top-5 rounded-md shadow-lg z-10 overflow-hidden">
                                    <Webcam
                                        ref={webcamRef}
                                        screenshotFormat="image/png"
                                        videoConstraints={{
                                            facingMode: 'user',
                                        }}
                                        className={`absolute flex object-cover w-full h-full`}
                                    >
                                    </Webcam>
                                    <div className="flex flex-col absolute right-3  w-8 md:w-10 justify-center items-center top-3 gap-y-2">
                                        <button onClick={() => setshowMe(prev => !prev)} className="w-8 h-8 md:w-10 md:h-10 rounded-full flex justify-center items-center cursor-pointer bg-blue-300 bg-opacity-50">
                                            <img src={camera} alt="show and hide button" className={`object-contain w-6 h-6`} />
                                        </button>
                                        <button onClick={() => setmaximizeMe(true)} className="w-8 h-8 md:w-10 md:h-10 rounded-full hidden md:flex justify-center items-center cursor-pointer bg-blue-300 bg-opacity-50">
                                            <img src={maximize} alt="resize button" className={`object-contain w-6 h-6`} />
                                        </button>
                                    </div>
                                </div>
                            </Draggable>
                        ) : (
                            <div onClick={() => setshowMe(prev => !prev)} className="w-8 h-8 md:w-10 md:h-10 rounded-full flex justify-center items-center cursor-pointer  absolute left-5 top-5 z-10 bg-blue-300 bg-opacity-50">
                                <img src={camera} alt="" className={`object-contain w-6 h-6`} />
                            </div>
                        )
                    )
                }
                <div className="flex w-[90%] sm:w-96 absolute z-20 bottom-10  h-14 justify-center items-center gap-x-5">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex justify-center items-center`}><MdCallEnd size={20} color="white" /></div>
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex justify-center items-center`}><MdNavigateNext size={24} color="white" /></div>
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-blue-700 rounded-full flex justify-center items-center overflow-hidden`}>
                        <img src={path} alt="" className={`flex object-contain w-6 h-6`} />
                    </div>
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-blue-700 hover:bg-transparent duration-150 group rounded-full flex justify-center items-center`}>
                        <img src={gender} alt="" className={`flex object-contain w-8 h-8 group-hover:w-12 group-hover:h-12 duration-150`} />
                    </div>
                </div>
                <div className="flex absolute z-20 top-5 right-5 flex-col gap-y-5 justify-center items-center">
                    <button className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full`}>
                        <img src={settings} alt="settings icon" className="flex object-contain w-9 h-9 hover:rotate-45 duration-150" />
                    </button>
                    <button className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full`}>
                        <img src={premium} alt="premium icon" className="flex object-contain w-9 h-9 hover:scale-105 duration-150" />
                    </button>
                    <button className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full`}>
                        <img src={report} alt="report icon" className="flex object-contain w-9 h-9 hover:scale-105 duration-150" />
                    </button>
                </div>

            </div>
            <div className="hidden w-full md:flex md:w-5/12 bg-blue-400 bg-opacity-60 min-h-lvh relative justify-center items-end">
                {
                    maximizeMe && (
                        <div className="flex absolute w-full h-full bg-slate-300 shadow-lg z-10 overflow-hidden">
                            <Webcam
                                ref={webcamRef}
                                screenshotFormat="image/png"
                                videoConstraints={{
                                    facingMode: 'user',
                                }}
                                className={`absolute flex object-cover w-full h-full`}
                            >
                            </Webcam>
                            <div className="flex flex-col absolute right-3 w-10 justify-center items-center top-3 gap-y-2">
                                <div onClick={() => setmaximizeMe(false)} className="w-8 h-8 md:w-10 md:h-10 rounded-full hidden md:flex justify-center items-center cursor-pointer bg-blue-300 bg-opacity-50">
                                    <img src={minimize} alt="resize button" className={`object-contain w-6 h-6`} />
                                </div>
                            </div>
                        </div>
                    )
                }
            <Basics/>
            </div>
        </div>
    )
}

export default Home