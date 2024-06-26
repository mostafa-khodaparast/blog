"use client"

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Comments() {

    const { status } = useSession()

    return (
        <div>
            <h2>Comments</h2>
            {status === 'authenticated' ?
                (
                    <div className='flex items-center space-x-2'>
                        <textarea placeholder='write comment...' className='w-[80%] p-1 bg-slate-400 rounded-md focus:outline-none border-none dark:bg-slate-400' />
                        <button className='bg-green-500 dark:bg-green-500'>Send</button>
                    </div>
                )
                :
                <Link
                    href='/login'
                    className='text-center bg-custom-primary text-white rounded-lg flex justify-center p-3'
                >
                    Login to write comment
                </Link>
            }
            <div>
                <div className="flex items-center my-3 max-w-max">
                    <Image
                        src="/images/culture.png"
                        width={50}
                        height={50}
                        alt="editor"
                        className="rounded-e-xl mr-2 object-fill"
                    />
                    <div className="flex flex-col">
                        <Link href="#" className="pr-3">
                            mostafa
                        </Link>
                        <span className="dark:text-gray-400">
                            .4/12/2023
                        </span>
                    </div>
                </div>
                <p>this was great.</p>
            </div>
        </div>
    )
}
