import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "./Signup.css";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { Checkbox } from '@mui/material';
import { useState } from 'react';



const formValidationSchema = yup.object({
    FirstName: yup.string().required("required"),
   LastName: yup.string().required("required"),
  Email: yup.string().email().required("Email address is required"),
  Password: yup.string().required("password required").min(8),
});


export const Signup =()=>{
    const history = useHistory();
    const [show, setShow] = useState(false);
    const   [open,setopen]=useState(false);
    const    [message,setmessage]=useState([]);


    const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
      useFormik({
        initialValues: {
         FirstName: "",
          LastName: "",
          Email: "",
          Password: "",
        },
        validationSchema: formValidationSchema,
        onSubmit: async (values) => {
          const data = await fetch(`https://urlshortnerapp.onrender.com/Signup`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(values),
          })
          const result = await data.json();
          console.log(result);

          if (data.status === 400) {
            setopen(!open)
            setmessage(result.message);
           console.log(result);
          } else {
            history.push("/");
            console.log("saved")
          }
           
        },
      });


      const togglePassword = () => {
        setShow(!show);
      };
  
    const reDirect = () => {
      history.push("/")
    };

  return (
    <div className="main"> 
    
  <Container component="main" maxWidth="xs">
     <CssBaseline/>
        <Box className="main-box"  >
          <Typography  component="h1" variant="h5">  Sign up   </Typography>
           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="FirstName"
                  label="FirstName"
                  name="FirstName"
                  value={values.FirstName}
                  autoComplete="FirstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.FirstName && errors.FirstName}
                  helperText={touched.FirstName && errors.FirstName ? errors.FirstName : null}
                />
              </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="LastName"
                  label="LastName"
                  name="LastName"
                  value={values.LastName}
                  autoComplete="LastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.LastName && errors.LastName}
                  helperText={touched.LastName && errors.LastName ? errors.LastName : null}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Email"
                  label="Email Address"
                  name="Email"
                  autoComplete="Email"
                  value={values.Email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.Email && errors.Email}
                  helperText={touched.Email && errors.Email ? errors.Email : null}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type={show ? "text" : "Password"}
                  id="password"
                  autoComplete="Password"
                  value={values.Password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.Password && errors.Password}
                  helperText={touched.Password && errors.Password ? errors.Password : null}
                />
              </Grid>
              <span className="showpassword">
                  <Checkbox
                    onClick={togglePassword}
                    aria-label="Checkbox demo"
                  />
                  <span>Show password</span>
                </span>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
             
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link    onClick={() => reDirect()} variant="body2">
                  Already have an account? Sign in
                </Link>
                <Typography  sx={{color:"red",
          ...(!open && { display: 'none' })
          }} component="h1" variant="h5">{message}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      <Typography  component="h1" variant="h5">  Sign up   </Typography>
      </Container>
      <span></span>
      </div>
  );
}