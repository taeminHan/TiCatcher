import {BrowserRouter, Route, Routes} from "react-router-dom";
import EditorPage from "./views/EditorPage.tsx";
import LoginPage from "./views/LoginPage.tsx";
import {Suspense} from "react";
import LoadingPage from "@/views/LoadingPage.tsx";


export default function App() {
    return (
            <BrowserRouter>
                <Suspense fallback={<LoadingPage/>}>
                <Routes>
                    <Route path="/" element={<LoginPage />}/>
                    <Route path="/editor" element={<EditorPage />}/>
                </Routes>
            </Suspense>
            </BrowserRouter>
    )
}