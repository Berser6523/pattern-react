import React from 'react'
import Home from "./pages/index"
import { BrowserRouter, Route } from "react-router-dom";


const Router = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
    </BrowserRouter>
)

export default Router
