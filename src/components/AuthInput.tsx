import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

interface AuthInputProps {
    title: string;
    placeholder: string;
    type?: string; // default is text
}

function AuthInput(props: AuthInputProps) {
    const [inputType, setinputType] = useState<string>("text")
    const [showPassword, setShowPassword] = useState<boolean>(false)


    const Icon = () => {
        if (props.type === 'email') {
            setinputType('email')
            return <IoMdMail size={17} />
        } else if (props.type === 'password') {
            setinputType(showPassword ? 'text' : 'password')
            return showPassword ? <FaEyeSlash size={17} /> : <FaEye size={17} />
        } else {
            setinputType('text')
            return <FaUser size={17} />
        }
    }



    return (
        <div className={`w-[90%] md:w-96 m-auto mb-5`}>
            <label htmlFor={props.title} className="text-black text-base font-semibold dark:text-white">{props.title}</label>  {/* title */}
            <div className="flex items-center relative">
                <input type={inputType} id={props.title} placeholder={props.placeholder} className="border border-zinc-400 dark:border-zinc-600 rounded-md p-2 w-full outline-none text-base bg-transparent text-black dark:text-white pr-10" />
                <span onClick={() => { setShowPassword(prev => !prev) }} className={`absolute end-0 p-3 text-zinc-500`}>
                    <Icon />
                </span>
            </div>
        </div>
    )
}

export default AuthInput