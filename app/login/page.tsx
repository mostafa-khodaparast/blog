"use client"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


export default function Page() {

    const { status } = useSession()
    const router = useRouter()

    if (status === "authenticated") {
        router.push('/')
    }

    const handleLogin = () => {
        signIn('google', {
            callbackUrl: '/addPost'
        })
    }

    return (
        <div className="w-52 h-72 mx-auto rounded-md flex items-center justify-center">
            <span
                className="bg-red-500 px-4 py-3 rounded-md font-semibold text-lg cursor-pointer"
                onClick={handleLogin}
            >
                Login with Google
            </span>
        </div>
    )
}
