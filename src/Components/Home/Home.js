import React, { useState } from 'react'
import "./Home.css";
import Navbar from '../Navbar/Navbar';
import { useFormik } from 'formik';
import * as yup from "yup";
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';




const formValidationSchema = yup.object({
longurl: yup.string().required("Url  is required")
});



const Home = () => {
  const history = useHistory();
  const[short,setshort]=useState([]);
  const [error,seterror]= useState(false);
   const   [open,setopen]=useState(false);
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
  useFormik({
    initialValues: {
      longurl: "",
    
    },
    validationSchema: formValidationSchema,
    onSubmit: async (values) => {
     const data = await fetch(`https://urlshortnerapp.onrender.com/shorten`, {
        method: "POST",
        headers: { 
          "x-auth-token": localStorage.getItem("token"),
          "content-type": "application/json" },
        body: JSON.stringify(values),
      })
      const result = await data.json();
        if (data.status === 400) {
         console.log(result);
         setshort(result.message);
          setopen(!open);
          seterror(true);
        } else {
        setshort(result.data);
        seterror(false);
             setopen(!open);
             console.log(result);
        }
    },
  }
  );

  const mainurl= async(shorturl)=>{
    try{
      console.log(shorturl);
      const response = await fetch(`https://urlshortnerapp.onrender.com/${shorturl}`,{
        method:"GET",
        headers: { 
          "x-auth-token": localStorage.getItem("token"),
          "content-type": "application/json" },
       });
  const data = await response.json();
  console.log(data.longurl);
  window.open(`${data.longurl}`, "_blank");
    }catch(error){
  console.log(error);
    }
  }


  return (

    <div className='Home'>
      <Navbar/>
<div className="Home-main">
<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
<Grid container spacing={2}>
<Grid item xs={12}>
<Typography   component="h1" variant="h4"> Paste the URL to be shortened  </Typography>
<TextField       sx={{margin:"2rem",marginRight:"auto",marginLeft:"auto"}}
                  required
                  fullWidth
                  id="url"
                  label="Enter the URL"
                  name="longurl"
                  autoComplete="longurl"
                  value={values.longurl}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.longurl && errors.longurl}
                  helperText={touched.longurl && errors.longurl ? errors.longurl : null}
                />
        <Button sx={{margin:"2rem",alignSelf:"center",marginRight:"auto",marginLeft:"auto"}}
        type="submit"
             disableElevation
              variant="contained"
              color="success">
Submit
</Button>
              </Grid>
              </Grid>

        </Box>
</div>
<div className="shorturl">
{error?    <Typography 
           sx={{fontWeight:"Bold",color:"red",
          ...(!open && { display: 'none' })}} 
          component="h1"
           variant="h5" 
           >{short}</Typography>:



<Typography 
           sx={{fontWeight:"Bold",color:"black",
          ...(!open && { display: 'none' })}} 
          component="h1"
           variant="h5" 
  
           ><a target='blank' href={`https://urlshortnerapp.onrender.com/${short}`}>https://urlshortnerapp.onrender.com/{short}</a></Typography>
           
      
} 
  
</div>
    </div>
  )
}

export default Home
