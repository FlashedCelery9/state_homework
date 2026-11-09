import {useContext} from "react";
import {CourseContext} from "../contexts/CourseContext.ts";
import {AuthContext} from "../contexts/AuthContext.ts";

interface Props{
    id: number;
    name: string;
    description: string;
    isActive: boolean;
}

export default function CourseCard({id, name, description, isActive} : Props ) {
    const context = useContext(CourseContext);
    const userContext = useContext(AuthContext);
    if (!userContext) throw new Error("User not found");
    if (!context) throw new Error("Could not find CourseList");

    return (
        <article
            onClick={() => {
                userContext.isAuthenticated ? context.activateCourse(id) : alert("Please login")

            }}
            className="w-full max-w-sm cursor-pointer rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm dark:border-slate-700 dark:bg-slate-900"
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        Курс #{id}
                    </p>
                    <h2 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
                        {name}
                    </h2>
                </div>
                <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                        isActive
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                            : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    }`}
                >
                    {isActive ? "Активний" : "Неактивний"}
                </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {description}
            </p>
        </article>
    )
}
