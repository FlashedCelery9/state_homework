import {use, useState} from "react";
import PostCard from "./PostCard.tsx";
import type {PostCardProps} from "./PostCard.tsx";


const promise = fetch("https://jsonplaceholder.typicode.com/posts?_limit=10").then((res) => res.json() as Promise<PostCardProps[]>);

export default function PostList() {
    const posts = use(promise);
    const [isTestedError, setTestedError] = useState<boolean>(false);
    if(isTestedError){
        throw new Error("Tasted error occurred.");
    }
    return (
        <>
            <button className="bg-red-300 p-3" onClick={() => setTestedError(!isTestedError)}>Test error</button>

            <div className=" bg-gray-500 self-center grid grid-cols-2 gap-3">
                {posts.map(post => (
                    <PostCard {...post} />
                ))}
            </div>
        </>


    )
}