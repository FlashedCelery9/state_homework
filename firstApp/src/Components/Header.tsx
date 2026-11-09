import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext.ts";

export default function Header() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('Not logged in.');
    }
    const {student} = context;
    return (
        <>
            <div>
                <ul>
                    <li>Username: {student?.name ? student.name : "None"}</li>
                </ul>
            </div>
        </>
    )
}