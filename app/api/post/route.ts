import { NextResponse } from "next/server";
import { POSTTYPE } from "@/app/types/type";

let posts: POSTTYPE[] = [
    {
        "id": 1,
        "title": "Post 1",
        "content": "This is the content of post 1",
    },
]

export async function GET() {
    return NextResponse.json(posts)
}

export const POST = async (request: Request) => {
    const body = await request.json()
    posts.push(body)
    return NextResponse.json(
        {
            message: "Post created successfully",
        }
    )
}

export const DELETE = (request: Request) => {
    const id = new URL(request.url).searchParams.get('id');
    console.log("id", id);
    posts = posts.filter((post) => post.id !== Number(id));
    return NextResponse.json(
        { message: "Post deleted successfully" })
}

export const PUT = async (req: Request) => {
    const body: POSTTYPE = await req.json();
    posts.map((post) => {
        if (post.id === body.id) {
            post.title = body.title
            post.content = body.content;
            return post
        } else {
            return post
        }
    })
    return NextResponse.json(
        {
            message: "Post updated successfully",
        }
    )
}