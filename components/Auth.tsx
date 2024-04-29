import Link from "next/link"


export default function Auth() {

    const isAuthed = 'yes'

    return (
        <>
            {isAuthed ? (
                <>
                    <Link href="/newPost">add post</Link>
                    <span>
                        signout
                    </span>
                </>
            ) : (
                <Link href="/singIn">singIn</Link>
            )}
        </>
    )
}
