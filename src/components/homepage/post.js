import React from "react"
import "./homepage.css"
import  { useState } from "react"
//import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
const Post = () => {

    const history = useHistory()
    
    const [ post, setPost] = useState({
        symptoms:"",
        testdate:"",
        selfisolation:"",
        medicalcenter:"",
        medicinestatus:"",
        issues:""
    })
    
    const handleChange = e => {
        const { name, value } = e.target
        setPost({
            ...post,
            [name]: value
        })
    }
    
    const post1 = () => {
        const {   symptoms,testdate,  selfisolation,  medicalcenter,  medicinestatus,  issues, } = post
            axios.post("http://localhost:1000/post", post)

           }
    
    return (
        <div className="register">
            {console.log("Post", post)}
            <h1>POST</h1>
            <label>What all symptoms do you have ?</label>
            <input type="text" name="symptoms" value={post.symptoms} onChange={ handleChange }></input>
            <label>When did you undergo corona test ?</label>
            <input type="text" name="testdate" value={post.testdate} onChange={ handleChange }></input>
            <label>Are you in self isolation?</label>
            <input type="text" name="selfisolation" value={post.selfisolation}  onChange={ handleChange }></input>
            <label>Do you inform your near by medical center?</label>
            <input type="text" name="medicalcenter" value={post.medicalcenter}  onChange={ handleChange }></input>
            <label>Do they providing you sufficient medicines?</label>
            <input type="text" name="medicinestatus" value={post.medicinestatus}  onChange={ handleChange }></input>
            <label>Is there any other issues ?</label>
            <input type="text" name="issues" value={post.issues} onChange={ handleChange }></input>
            
            <div className="button" onClick={post1} >Post</div>
            
        </div>
    )
    }
    
    
    //             <div className="button" onClick={() => updateUser({})} >Logout</div>
    //         </div>
    //     )
    // }
    
    //export default Homepage
    export default Post;