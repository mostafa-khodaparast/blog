import { POST_PER_PAGE } from "@/constants";
import prisma from "@/prisma/db";
import { PostProps } from "@/types/types";


interface PostsResponse {
    posts: PostProps[];
    count: number;
}

export async function getCategories() {
    try {
        const categories = await prisma.category.findMany()
        return categories
    }
    catch (error) {
        console.log(error)
    }
}

export async function getPosts(pageNumber: number): Promise<PostsResponse> {
    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany({
                take: POST_PER_PAGE,
                skip: POST_PER_PAGE * (pageNumber - 1)
            }),
            prisma.post.count()
        ])
        return { posts, count }
    }
    catch (error) {
        console.log(error)
        throw error
    }
}