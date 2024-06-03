import { Box, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { AdminSignout } from "./admin-signout";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

export function AddDashboard() {

    let navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies();

    const formik = useFormik({
        initialValues:{VideoId:0, CategoryId:0, Title:"", Url:"", Description:"", Views:0, Likes:0, Dislikes:0 },
        onSubmit:(video)=>{
            axios.post("http://127.0.0.1:2020/post-video", video)
            .then(()=>{
                alert("Video Added Susessfully");
                navigate("/admin-dashboard");
            })
        }
    })

    useEffect(()=>{
        if (cookie["admin-id"]) {
            
        } else {
            navigate("*")
        }
    },[])

    return(
        <div style={{backgroundImage:"url(netflixbanner-2.jpg)"}} >
            <div style={{backgroundColor:"rgba(0,0,0,0.8)", height:"100vh"}}>
            <div className="d-flex justify-content-between"><h1 className="text-primary m-5">Add Videos</h1><span className="m-5"><AdminSignout/></span></div>
                <Box sx={{mt:"20px", bgcolor:"gray", pt:"30px", pb:"20px"}} component="form" className="container-fluid" onSubmit={formik.handleSubmit}>
                    <div className="row my-2">
                        <div className="col-3 fw-bold pt-4 h5">Video Id</div>
                        <div className="col-9"><TextField className="w-75" onChange={formik.handleChange} type="number" variant="outlined" label="Video Id" color="secondary" autoFocus="true" fullWidth="true" name="VideoId" /></div>
                    </div>
                    <div className="row my-2">
                        <div className="col-3 fw-bold pt-4 h5">Category Id</div>
                        <div className="col-9"><TextField className="w-75" onChange={formik.handleChange} type="number" variant="outlined" label="Category Id" color="secondary" fullWidth="true" name="CategoryId"/></div>
                    </div>
                    <div className="row my-2">
                        <div className="col-3 fw-bold pt-4 h5">Title</div>
                        <div className="col-9"><TextField className="w-75" onChange={formik.handleChange} variant="outlined" label="Title" color="secondary" fullWidth="true" name="Title"/></div>
                    </div>
                    <div className="row my-2">    
                        <div className="col-3 fw-bold pt-4 h5">Url</div>
                        <div className="col-9"><TextField className="w-75" onChange={formik.handleChange} variant="outlined" label="Url" color="secondary" fullWidth="true" name="Url"/></div>
                    </div>
                    <div className="row my-2">    
                        <div className="col-3 fw-bold pt-4 h5">Description</div>
                        <div className="col-9"><TextField className="w-75" onChange={formik.handleChange} variant="outlined" label="Description" color="secondary" fullWidth="true" multiline="true" name="Description"/></div>
                    </div>
                    <div className="row my-2">
                        <div className="col-3 fw-bold pt-4 h5">Views</div>
                        <div className="col-9"><TextField className="w-75" onChange={formik.handleChange} type="number" variant="outlined" label="Views" color="secondary" fullWidth="true" name="Views"/></div>
                    </div>
                    <div className="row my-2">
                        <div className="col-3 fw-bold pt-4 h5">Likes</div>
                        <div className="col-9"><TextField className="w-75" onChange={formik.handleChange} type="number" variant="outlined" label="Likes" color="secondary" fullWidth="true" name="Likes"/></div>
                    </div>
                    <div className="row my-2">
                        <div className="col-3 fw-bold pt-4 h5">Dislikes</div>
                        <div className="col-9"><TextField className="w-75" onChange={formik.handleChange} type="number" variant="outlined" label="Dislikes" color="secondary" fullWidth="true" name="Dislikes"/></div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-7"></div>
                        <div className="col-5">
                            <Link to="/admin-dashboard" className="btn btn-danger me-3 px-1 w-25">Cancle</Link>
                            <button className="btn btn-success w-25">ADD</button>
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    )
}