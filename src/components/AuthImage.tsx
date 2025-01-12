import React from 'react'
import image from '../assets/foreground.png'

interface AuthImageProps {
    title: string
}
function AuthImage(props: AuthImageProps) {
    return (
        <>
            <h2 className='text-6xl font-bold mb-10 text-black dark:text-white'>{props.title}</h2>
            <img src={image} alt="foreground image" className={``} />
        </>
    )
}

export default AuthImage