import {use} from "react";

interface UserProfile {
    id: number;
    name: string;
}

const promise = fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => response.json()) as Promise<UserProfile>;

export default function UserProfile() {
    const user = use(promise);
    return (
        <>
            <div>
                <h2>Hey, {user?.name}</h2>
            </div>
        </>
    );
}