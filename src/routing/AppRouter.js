import React, { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from "./PrivateRoutes";
import NavBar from "../components/NavBar";
import Spinner from "../components/Spinner";

const TopStories = lazy(() => import("../components/TopStories"));
const SearchArticle = lazy(() => import("../components/SearchArticle"));
const PageNotFound = lazy(() => import("../components/PageNotFound"));
const Login = lazy(() => import("../components/Login"));


const AppRouter = () => {
    return (
        <>
            <Suspense
                fallback={
                    <div>
                        <Spinner />
                    </div>
                }
            >
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route element={<PrivateRoutes />} >
                        <Route exact path="/topStories" element={<TopStories />} />
                        <Route exact path="/searchArticle" element={<SearchArticle />} />
                    </Route>
                    <Route path="/page_not_found" element={<PageNotFound />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Suspense>
        </>
    )
}

export default AppRouter
