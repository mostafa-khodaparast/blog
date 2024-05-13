import Link from "next/link"


export default function Auth() {

    const isAuthed = 'yes'

    return (
        <>
            {isAuthed === 'yes' ? (
                <>
                    <Link href="/addPost">add post</Link>
                    <span>
                        signout
                    </span>
                </>
            ) : (
                <Link href="/login">singIn</Link>
            )}
        </>
    )
}
