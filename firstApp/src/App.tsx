
import './App.css'
import UserProfile from "./Components/UserProfile.tsx";
import {Suspense} from "react";
import PostList from "./Components/PostList.tsx";
import {ErrorBoundary} from "react-error-boundary";

function App() {



    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <UserProfile/>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>

                <ErrorBoundary fallback={<div>ErrorBoundary</div>}>
                    <PostList />

                </ErrorBoundary>
            </Suspense>
        </>
  )
}

export default App
