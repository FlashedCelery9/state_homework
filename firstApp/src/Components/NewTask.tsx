import type {Task} from "../models/Task.ts"
import {twMerge} from "tailwind-merge";
import clsx from "clsx";
import {useRef, useState} from "react";

interface NewTaskProps {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
}

export default function NewTask({tasks, setTasks}: NewTaskProps) {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const [done, setDone] = useState<boolean>(false);
    const [inputV, setInputV] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    function doneText(){
        setDone(true);
        setTimeout(() => {
            setDone(false)
        }, 5000);
    }

    function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        setTasks([...tasks, {id: tasks.length+2, title: title, description: description, isComplete: false}]);
        doneText();
        inputRef.current?.focus();
    }

    function titleValidation (){
        if (inputRef.current?.value === null || inputRef.current?.value.length === 0) {
            setInputV(false)
        }
        else{
            setInputV(true);
        }
    }





    return(
        <>
            <form className="p-2 gap-1 bg-gray-600 w-100 justify-self-center m-10 self-center items-center flex flex-col" onSubmit={e => onSubmit(e)}>
                <input className="text-amber-50 bg-gray-400" type="text" placeholder="Task title" onChange={(e) => setTitle(e.target.value)}/>
                <input className=" text-amber-50 bg-gray-400" type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)}/>
                <button type="submit">Submit</button>
                <div className={twMerge(clsx("w-20 h-auto  md:invisible", done && "md:visible bg-green-300 text-amber-50 items-center self-center content-center"))}>
                    <p>New task created!</p>
                </div>
            </form>
            <h2>Task title search:</h2>
            <input ref={inputRef} onChange={() => titleValidation()} className={twMerge(clsx(" bg-red-600 text-white", inputV && "bg-green-500 text-white" ))} type="text" placeholder="Please enter a task name:"/>

        </>
    )
}