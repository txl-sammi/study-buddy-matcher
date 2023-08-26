import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const ROOT = "/"; // this will be the login path
const SIGNUP = "/signUp" 

export default function App()  {

    return (
        <>
        <Router>
            <Routes>
                <Route path = {ROOT} element = {<LoginPage/>}/>
                <Route path = {SIGNUP} element = {<SignUpPage/>}/>
            </Routes>
        </Router>
        </>
    )

}