import {type ReactNode, useCallback, useMemo, useState} from "react";
import {CourseContext, type Course} from "./CourseContext.ts";

interface Props{
    children: ReactNode;
}

const initialCourses: Course[] = [
    {id: 1, name: "C++", description: "you will die", isActive: false},
    {id: 2, name: "C#", description: "default c# course", isActive: false},
    {id: 3, name: "Css & HTML", description: "Web-dev course", isActive: false},
    {id: 4, name: "AI", description: "AI course by ........", isActive: false},
];

export function CoursesProvider({children}: Props){
    const [courses, setCourses] = useState<Course[]>(initialCourses);
    const addCourse = useCallback((course: Course) => {
        setCourses((prevCourses) => [...prevCourses, course]);
    }, []);
    const removeCourse = useCallback((course: Course) => {
        setCourses((prevCourses) => prevCourses.filter(c => c !== course));
    }, [])
    const activateCourse = useCallback((courseId: number) => {
        setCourses(prevCourses =>
            prevCourses.map(c =>
                c.id === courseId
                    ? { ...c, isActive: !c.isActive }
                    : c
            )
        );
    }, []);
    const contextValue = useMemo(() => ({
        courses,
        addCourse,
        removeCourse,
        activateCourse,
    }),[courses, addCourse, removeCourse, activateCourse]);

    return (
        <CourseContext.Provider value={contextValue}>
            {children}
        </CourseContext.Provider>
    )
}
