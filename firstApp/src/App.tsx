import './App.css'
import Header from "./Components/Header.tsx";
import LoginForm from "./Components/LoginForm.tsx";
import CourseList from "./Components/CourseList.tsx";



function App() {

    return (
        <>
            <Header></Header>
            <LoginForm></LoginForm>
            <CourseList></CourseList>
        </>
  )
}

export default App
