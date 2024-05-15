export type NavLink = {
    title: string,
    path: string
}

export type CategoryProps = {
    id: string,
    slug: string,
    title: string,
    img?: string | null
}

export type SearchParamsProps = {
    searchParams: {
        page?: string
    }
}

export type PostProps = {
    id: string,
    createdAt: Date,
    slug: string,
    title: string,
    desc: string,
    img: string | null,
    views: number,
    catSlug: string,
    userEmail: string
}