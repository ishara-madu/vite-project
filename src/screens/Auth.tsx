import AuthImage from "../components/AuthImage"
import AuthInput from "../components/AuthInput"
import { useState } from "react"
import AuthSocial from "../components/AuthSocial"

function Auth() {
    const [showLogin, setshowLogin] = useState<boolean>(false)
    return (
        <div className={` bg-zinc-200 dark:bg-zinc-900 w-full min-h-lvh flex items-center`}>
            {
                showLogin ? (
                    <div
                        className={`flex h-full w-full flex-row-reverse animate-rightSlide`}
                    >
                        <div className="hidden md:flex flex-col items-center justify-center w-[100%] sm:w-[50%]">
                            <AuthImage title="Welcome back to Viboo" />
                        </div>
                        <div className={`flex items-center justify-center m-auto w-[100%] sm:w-[50%] min-h-lvh bg-blue-700 bg-opacity-10`}>
                            <div className={`flex flex-col items-center justify-center m-auto`}>
                                <h1 className="font-bold text-3xl md:hidden text-black dark:text-white my-10">Welcome back to Viboo</h1>
                                <AuthInput title="Email" placeholder="Enter your email here" type="email" />
                                <AuthInput title="Password" placeholder="Enter your password here" type="password" />
                                <div className="flex mb-5 w-[90%] md:w-96">
                                    <p className={`text-zinc-500 text-base`}>Don't have an account? &nbsp;</p>
                                    <p onClick={() => setshowLogin(false)} className="text-blue-700 hover:underline font-bold text-base cursor-pointer">Sign up</p>
                                </div>
                                <input type="submit" value="Sign up" className="bg-blue-700 w-[90%] md:w-96 h-12 rounded-md text-white my-2" />
                                <div className="flex w-[90%] md:w-96 justify-center items-center m-3"><div className={`flex flex-1 bg-zinc-400 dark:bg-zinc-600 h-0.5`} /> <p className={`mx-2 text-black dark:text-white`}>or</p> <div className={`flex flex-1 bg-zinc-400 dark:bg-zinc-600 h-0.5`} /></div>
                                <AuthSocial/>
                                <div className="flex mb-5 w-[90%] md:w-96 text-sm text-black dark:text-white">
                                    <p className="flex flex-wrap">
                                        By signing up, you agree to our&nbsp;
                                        <a href="/terms" className="text-blue-700 hover:underline">Terms of Service</a>&nbsp;
                                        and&nbsp;
                                        <a href="/privacy" className="text-blue-700 hover:underline">Privacy Policy</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={`flex h-full w-full animate-leftSlide`}>
                        <div className="hidden md:flex flex-col items-center justify-center w-[100%] sm:w-[50%]">
                            <AuthImage title="Welcome to Viboo" />
                        </div>
                        <div className={`flex items-center justify-center m-auto w-[100%] sm:w-[50%] min-h-lvh bg-blue-700 bg-opacity-10`}>
                            <div className={`flex flex-col items-center justify-center m-auto`}>
                                <h1 className="font-bold text-3xl md:hidden text-black dark:text-white my-10">Welcome to Viboo</h1>
                                <AuthInput title="Name" placeholder="Enter your name here" />
                                <AuthInput title="Email" placeholder="Enter your email here" type="email" />
                                <AuthInput title="Password" placeholder="Enter your password here" type="password" />
                                <AuthInput title="Confirm password" placeholder="Confirm your password here" type="password" />
                                <div className="flex mb-5 w-[90%] md:w-96">
                                    <p className={`text-zinc-500 text-base`}>Already have an account? &nbsp;</p>
                                    <p onClick={() => setshowLogin(true)} className="text-blue-700 hover:underline font-bold text-base cursor-pointer">Sign In</p>
                                </div>
                                <input type="submit" value="Sign in" className="bg-blue-700 w-[90%] md:w-96 h-12 rounded-md text-white my-2" />
                                <div className="flex w-[90%] md:w-96 justify-center items-center m-3"><div className={`flex flex-1 bg-zinc-400 dark:bg-zinc-600 h-0.5`} /> <p className={`mx-2 text-black dark:text-white`}>or</p> <div className={`flex flex-1 bg-zinc-400 dark:bg-zinc-600 h-0.5`} /></div>
                                <AuthSocial/>
                                <div className="flex mb-5 w-[90%] md:w-96 text-sm text-black dark:text-white">
                                    <p className="flex flex-wrap">
                                        By signing up, you agree to our&nbsp;
                                        <a href="/terms" className="text-blue-700 hover:underline">Terms of Service</a>&nbsp;
                                        and&nbsp;
                                        <a href="/privacy" className="text-blue-700 hover:underline">Privacy Policy</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Auth