"use client"

import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import Spinner from "./Spinner"


export default function Auth() {
    const { data, status } = useSession()

    if(status === 'loading') {
        <Spinner />
    }
    
    return (
        <>
            {status === 'authenticated' ? (
                <>
                 <Link href="/addPost">addPost</Link>
                    <span
                        onClick={() => signOut()}
                        className="cursor-pointer font-semibold hover:text-purple-500 transition-all duration-500"
                    >
                        logout
                    </span>
                </>
            ) : (
                <Link href="/login">login</Link>
            )}
        </>
    )
}
