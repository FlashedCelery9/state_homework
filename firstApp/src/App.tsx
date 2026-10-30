
import './App.css'
import {useEffect, useState} from "react";
import {twMerge} from "tailwind-merge";
import clsx from "clsx";


interface User {
    id: number
    name: string
    email: string
    phone: string
}
type Status = "loading" | "success" | "error";




function App() {
    const [users, setUsers] = useState<User[]>([]);
    const [status, setStatus] = useState<Status>("loading");
    const [CurrentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        async function getUsers() {
            await fetch("https://jsonplaceholder.typicode.com/users", {signal: controller.signal}).then(async res =>  {
                if(!res.ok) {
                    setStatus("error");
                    setUsers([]);
                }
                else{
                    setStatus("success");
                    return setUsers(await res.json() as User[]);
                }


            })
        }
        setStatus("loading");
        getUsers();
        return ( () => {
            controller.abort();

        })
    }, [])

    return (
        <>
            <div>
                <h3>Status:</h3>
                <p className={twMerge(clsx("text-amber-300", status === "success" && "text-green-400", status === "error" && "text-red-500"))}>{status}</p>
                <input type="text" placeholder="Username" onChange={(e) =>{

                    let user = users.find((x) => x.name === e.target.value);
                    if (user !== undefined){
                        setStatus("success");
                        setCurrentUser(user);
                    }
                    else{
                        setStatus("error");
                        setCurrentUser(null);
                    }
                    if(e.target.value === "") {
                        setStatus("success");
                    }

                    }}/>
                <div className={twMerge(clsx("md:invisible w-0 h-0", CurrentUser !== null && "md:visible mt-5 justify-self-center w-45 h-20 bg-amber-200 text-amber-50"))}>
                    <div>
                        <p>{CurrentUser !== null ? CurrentUser.name : null}</p>
                        <p>{CurrentUser !== null ? CurrentUser.email : null}</p>
                    </div>
                </div>
            </div>
            <h2>Users</h2>
            <div className="justify-self-center grid grid-cols-2 gap-2">{users.map((user) => (
                <div key={user.id} className="text-amber-50 bg-green-300">
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
            </div>

        </>
  )
}

export default App
