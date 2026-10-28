
import type {Task} from "../models/Task.ts"
import {useState} from "react";
import TaskList from "./TaskList.tsx";
import NewTask from "./NewTask.tsx";
import TaskDetails from "./TaskDetails.tsx";

export default function TaskForm(){
    const [tasks, setTasks] = useState<Task[]>([]);
    const [currentTaskDetail, setCurrentTaskDetail] = useState<Task | null>(null);

    return (
        <>
            < NewTask tasks={tasks} setTasks={setTasks} />
            <div className="justify-self-center flex w-[80%] self-center items-center bg-blue-600">

                <TaskList tasks={tasks} setTasks={setTasks} setCurrentTaskDetail={setCurrentTaskDetail} />
                < TaskDetails currentTaskDetail={currentTaskDetail} />

            </div>
        </>
    )
}