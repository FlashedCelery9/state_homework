import {createContext} from "react";

export interface Course{
    id: number;
    name: string;
    description: string;
    isActive: boolean;
}
interface CourseContextType{
    courses: Course[];
    addCourse: (course: Course) => void;
    removeCourse: (course: Course) => void;
    activateCourse: (courseId: number) => void;
}

export const CourseContext = createContext<CourseContextType | null>(null)
