import {CourseContext} from "../contexts/CourseContext.ts";
import {useContext} from "react";
import CourseCard from "./CourseCard.tsx";

export default function CourseList() {
    const context = useContext(CourseContext);
    if (!context) throw new Error("Could not find CourseList");

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {context.courses.map(course => (
                <CourseCard key={course.id} {...course} />
            ))}
        </div>
    )

}
