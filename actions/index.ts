import prisma from "@/prisma/db";

export async function getCategories() {
    try {
        const categories = await prisma.category.findMany()
        return categories
    } catch (error) {
        console.log(error)
    }
}

export async function getPosts() {
    try {
        const posts = await prisma.post.findMany()
        return posts
    } catch (error) {
        console.log(error)
    }
}