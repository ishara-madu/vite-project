import { FaFacebookF, FaGoogle } from "react-icons/fa"

function AuthSocial() {
    return (
        <div className="flex gap-x-5 mb-5">
            <span className="w-12 h-12 bg-transparent border border-zinc-400 dark:border-zinc-600 rounded-full flex justify-center items-center text-black dark:text-white">
                <FaGoogle size={20} />
            </span>
            <span className="w-12 h-12 bg-transparent border border-zinc-400 dark:border-zinc-600 rounded-full flex justify-center items-center text-black dark:text-white">
                <FaFacebookF size={20} />
            </span>
        </div>
    )
}

export default AuthSocial