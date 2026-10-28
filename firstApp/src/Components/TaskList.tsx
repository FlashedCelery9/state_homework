import type {Task} from "../models/Task.ts";
import {twMerge} from "tailwind-merge";
import clsx from "clsx";

interface TaskListProps{
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
    setCurrentTaskDetail: (task: Task) => void;
}



export default function TaskList({tasks, setTasks, setCurrentTaskDetail}: TaskListProps){
    function editTaskStatus(task: Task){
       setTasks(tasks.map((taskEl) => {
            if(taskEl.id !== task.id)
                return taskEl;
            else{
                taskEl.isComplete = !taskEl.isComplete;
                return taskEl;
            }
       }))
    }



    return (
        <>
        <div className="w-auto justify-self-center items-center">
            <h2>Tasks list</h2>
            <div className="grid grid-cols-2 gap-4">{
                tasks.map((task) => {
                    return (
                        <div onClick={() => setCurrentTaskDetail(task)} className="w-50 bg-amber-50 m-2 p-2 text-amber-100 hover:bg-amber-200 hover:shadow-2xl">
                            <h3 className="text-amber-500">{task.title}</h3>
                            <p className="text-gray-700 p-2">{task.description}</p>
                            <button onClick={() => editTaskStatus(task)} className={twMerge(clsx("hover:bg-green-500 bg-green-400 text-amber-50 pl-3 pr-3 self-center items-center", !task.isComplete && "bg-red-500 hover:bg-red-600"))}>{task.isComplete ? "Complete" : "Not complete"}</button>
                        </div>
                    )
                })
            }</div>
        </div>
        </>
    )

}