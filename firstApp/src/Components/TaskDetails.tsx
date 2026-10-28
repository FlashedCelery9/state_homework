import type {Task} from "../models/Task.ts"
import {twMerge} from "tailwind-merge";
import clsx from "clsx";

interface TaskDetailsProps{
    currentTaskDetail: Task | null;
}

export default function TaskDetails({currentTaskDetail}: TaskDetailsProps) {
    if(currentTaskDetail === null){
        return (
            <></>
        )
    }

    else{
        return(
            <>
            <div className=" p-5 bg-gray-500 border border-gray-600 flex flex-col">
                <h1>Task Details: </h1>
                <h2>{currentTaskDetail.title}</h2>
                <p>{currentTaskDetail.description}</p>
                <button className={twMerge(clsx("hover:bg-green-500 bg-green-400 text-amber-50 pl-3 pr-3 self-center items-center", !currentTaskDetail.isComplete && "bg-red-500 hover:bg-red-600"))}>{currentTaskDetail.isComplete ? "Complete" : "Not complete"}</button>
            </div>
        </>)

    }


}