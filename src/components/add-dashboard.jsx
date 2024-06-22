import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { AdminSignout } from "./admin-signout";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import * as yup from "yup";

export function AddDashboard() {

    let navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies();
    const [videoId, setVideoId] = useState();
    const [categories, setCategories] = useState([]);

    const formik = useFormik({
        initialValues:{VideoId:videoId, CategoryId:0, Title:"", Url:"", Description:"", Views:0, Likes:0, Dislikes:0 },
        validationSchema: yup.object({CategoryId:yup.string().required("Required").matches(/[^0]/ ,"Required"), Title:yup.string().required("Required"), Url:yup.string().required("Required"), Description:yup.string().required("Required")}),
        enableReinitialize: true,
        onSubmit:(video)=>{
            axios.post("http://127.0.0.1:2020/post-video", video)
            .then(()=>{
                alert("Video Added Susessfully");
                navigate("/admin-dashboard");
            })
        }
    })

    function LoadVideos() {
        axios.get("http://127.0.0.1:2020/get-videos")
        .then(response=>{
            let lastVideoId = response.data[response.data.length-1];
            setVideoId(lastVideoId.VideoId+1);
        })
    }

    function LoadCategories() {
        axios.get("http://127.0.0.1:2020/get-categories")
        .then(response=>{
            setCategories(response.data);
        })
    }

    useEffect(()=>{
        if (cookie["admin-id"]) {
            LoadVideos();
            LoadCategories();
        } else {
            navigate("*");
        }
    },[])

    return(
        <div style={{backgroundImage:"url(netflixbanner-2.jpg)"}} >
            <div style={{backgroundColor:"rgba(0,0,0,0.8)", height:"100vh"}}>
            <div className="d-flex justify-content-between"><h1 className="text-primary m-5">Add Videos</h1><span className="m-5"><AdminSignout/></span></div>
                <Box sx={{mt:"20px", bgcolor:"gray", pt:"30px", pb:"20px"}} component="form" className="container-fluid" onSubmit={formik.handleSubmit}>
                    <div className="row my-2">
                        <div className="col-3 fw-bold pt-4 h5">Video Id</div>
                        <div className="col-9"><TextField className="w-75"  value={videoId} type="number" variant="outlined" label="Video Id" color="secondary" autoFocus={true} fullWidth={true} name="VideoId" /></div>
                    </div>
                    <div className="row my-3">
                        <div className="col-3 fw-bold pt-4 h5">Category</div>
                        <div className="col-9">
                            <FormControl fullWidth className="w-75" color="secondary">
                                <InputLabel>Category</InputLabel>
                                <Select label="Category Id" onChange={formik.handleChange} name="CategoryId">
                                    {
                                        categories.map(category=>
                                            <MenuItem value={category.CategoryId} key={category.CategoryId}>{category.CategoryName}</MenuItem>
                                        )
                                    }
                                </Select>
                                <div className="text-danger">{formik.errors.CategoryId}</div>
                            </FormControl>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-3 fw-bold pt-4 h5">Title</div>
                        <div className="col-9"><TextField className="w-75" onChange={formik.handleChange} variant="outlined" label="Title" color="secondary" fullWidth={true} name="Title"/><div className="text-danger">{formik.errors.Title}</div></div>
                    </div>
                    <div className="row my-3">    
                        <div className="col-3 fw-bold pt-4 h5">Url</div>
                        <div className="col-9"><TextField className="w-75" onChange={formik.handleChange} variant="outlined" label="Url" color="secondary" fullWidth={true} name="Url"/><div className="text-danger">{formik.errors.Url}</div></div>
                    </div>
                    <div className="row my-3">    
                        <div className="col-3 fw-bold pt-4 h5">Description</div>
                        <div className="col-9"><TextField className="w-75" onChange={formik.handleChange} variant="outlined" label="Description" color="secondary" fullWidth={true} multiline={true} name="Description"/><div className="text-danger">{formik.errors.Description}</div></div>
                    </div>
                    <div className="row my-3">
                        <div className="col-3 fw-bold pt-4 h5">Views</div>
                        <div className="col-9"><TextField className="w-75" onChange={formik.handleChange} type="number" variant="outlined" label="Views" color="secondary" fullWidth={true} name="Views"/></div>
                    </div>
                    <div className="row my-3">
                        <div className="col-3 fw-bold pt-4 h5">Likes</div>
                        <div className="col-9"><TextField className="w-75" onChange={formik.handleChange} type="number" variant="outlined" label="Likes" color="secondary" fullWidth={true} name="Likes"/></div>
                    </div>
                    <div className="row my-3">
                        <div className="col-3 fw-bold pt-4 h5">Dislikes</div>
                        <div className="col-9"><TextField className="w-75" onChange={formik.handleChange} type="number" variant="outlined" label="Dislikes" color="secondary" fullWidth={true} name="Dislikes"/></div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-7"></div>
                        <div className="col-5">
                            <Link to="/admin-dashboard" className="btn btn-danger me-3 px-1 w-25">Cancle</Link>
                            <button className="btn btn-success w-25" type="submit">ADD</button>
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    )
}