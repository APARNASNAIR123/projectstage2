import React from "react"
import "./homepage.css"
import  { useState } from "react"
//import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import Post from "./post"

const Homepage = ({updateUser}) => {
    return (
        <div className="homepage">
            <h1>Hello Homepage</h1>
            <Post/>
            <div className="button" onClick={() => updateUser({})} >Logout</div>
        </div>
    )
}

export default Homepage
