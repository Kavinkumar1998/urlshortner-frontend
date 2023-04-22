import React from 'react'
import  { useEffect, useState } from "react";
import "./Dashboard.css";
import {  Typography } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import { useHistory } from "react-router-dom";

const Dashboard = () => {
    const history = useHistory();
    const [url,seturl]= useState([]);
    useEffect(() =>{
    const geturl = async() =>{
        try{
          const response = await fetch(`https://urlshortnerapp.onrender.com/alldata`,{
            method:"GET",
            headers: {
              "x-auth-token": localStorage.getItem("token"),
             "Content-Type":"application/json"
            },
           });
          const data= await response.json();
          seturl(data);
        }
        catch(error){
     console.log(error);
        }
      };
      geturl();
    },[])
    console.log(url)
      return (
    
    <div classNameName="card-container"> 
         <Navbar/>
    <div className="main-content">
    <Typography sx={{ mt: 3, mb: 2,fontFamily:"cursive",fontWeight:"Bold",fontSize:"3rem"}} component="h1" variant="h5"> urls </Typography>
    </div>         <div className="row" >
    {url.map((url)=>(
                       <div className="container" key ={url._id}>
                       <div className="contentArea">
                       <Typography   component="h1" variant="h6">Original Url: <p>{url.longurl}</p></Typography>
                       <Typography   component="h1" variant="h6">Shortern Url: <p>https://urlshortnerapp.onrender.com/{url.shorturl}</p></Typography>
                       <Typography   component="h1" variant="h6">Clicks: <span>{url.click}</span></Typography>
                       <Typography   component="h1" variant="h6">Date: <span>{url.date}</span></Typography>
                       
                       </div>
                       </div> 
                  ))}
    </div>
            </div>
     
      )
}

export default Dashboard
