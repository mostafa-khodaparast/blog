"use client"

import { useState } from "react"
import ReactQuill from "react-quill"
import { useRouter } from "next/navigation"
import { Video, ImagePlus } from "lucide-react"
import { useSession } from "next-auth/react"
import "react-quill/dist/quill.bubble.css"

export default function Page() {

    const [value, setValue] = useState<string>('')
    const router = useRouter()
    const {status} = useSession()

    if(status === 'unauthenticated'){
        router.push('/login')
    }

    return (
        <div>
            <input placeholder="Title" className="placeholder:text-2xl p-3 m-4 text-2xl focus:outline-none" />
            <div className="mx-3">
                <div className="flex space-x-2 [&>*]:cursor-pointer">
                    <Video />
                    <ImagePlus />
                </div>
            </div>
            <ReactQuill
                theme="bubble"
                value={value}
                onChange={setValue}
                placeholder="write your description..."
            />
            <button className='bg-green-500 dark:bg-green-500'>Publish</button>
        </div>
    )
}
