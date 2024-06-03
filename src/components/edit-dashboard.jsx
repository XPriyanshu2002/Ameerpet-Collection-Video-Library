import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { AdminSignout } from "./admin-signout";
import { useCookies } from "react-cookie";

export function EditDashboard() {

    let params = useParams();
    const [video, setVideo] = useState([{}]);
    const [cookie, setCookie, removeCookie] = useCookies();
    let navigate = useNavigate();

    function LoadVideo() {
        axios.get(`http://127.0.0.1:2020/get-video/${params.id}`)
        .then(response=>{
            setVideo(response.data);
            console.log(video);
        })
    }

    const formik = useFormik({
        initialValues:{VideoId:video[0].VideoId, CategoryId:video[0].CategoryId, Title:video[0].Title, Url:video[0].Url, Description:video[0].Description, Views:video[0].Views, Likes:video[0].Likes, Dislikes:video[0].Dislikes},
        
        enableReinitialize: true,

        onSubmit: (vid)=>{
            axios.put(`http://127.0.0.1:2020/edit-video/${params.id}`, vid)
            .then(()=>{
                alert("Video Updated Successfully");
                navigate("/admin-dashboard");
            })
        }
    })

    useEffect(()=>{
        if(cookie["admin-id"]) {
            LoadVideo();
        } else {
            navigate("*");
        }
    },[])

    return(
        <div style={{backgroundImage:"url(netflixbanner-2.jpg)"}}>
           <div style={{height:"100vh", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.8)"}}>
            <div className="d-flex justify-content-between"><h1 className="text-danger m-5">Edit Video</h1><span className="m-5"><AdminSignout/></span></div>
               <form onSubmit={formik.handleSubmit} className="container-fluid">
                <table className="table text-white bg-black rounded-3 shadow-lg" style={{height:"600px"}}>
                        <thead>
                            <th className="pt-2">Properties</th>
                            <th className="pt-2">Values</th>
                            <th className="pt-2">Preview</th>
                        </thead>
                        <tbody>
                            <td><br /></td>
                            <td><br /></td>
                        </tbody>
                        <tbody>
                            <td className="pt-2">VIDEO ID</td>
                            <td><input type="text" value={formik.values.VideoId} onChange={formik.handleChange} name="VideoId" className="form-control" /></td>
                        </tbody>
                        <tbody>
                            <td className="pt-2">CATEGORY ID</td>
                            <td><input type="text" value={formik.values.CategoryId} onChange={formik.handleChange} name="CategoryId" className="form-control" /></td>
                        </tbody>
                        <tbody>
                            <td className="pt-2">TITLE</td>
                            <td><input type="text" value={formik.values.Title} onChange={formik.handleChange} name="Title" className="form-control" /></td>
                        </tbody>
                        <tbody>
                            <td className="pt-2">URL</td>
                            <td><input type="text" value={formik.values.Url} onChange={formik.handleChange} name="Url" className="form-control" /></td>
                        </tbody>
                        <tbody>
                            <td className="pt-2">DESCRIPTION</td>
                            <td><input type="text" value={formik.values.Description} onChange={formik.handleChange} name="Description" className="form-control" /></td>
                        </tbody>
                        <tbody>
                            <td className="pt-2">VIEWS</td>
                            <td><input type="text" value={formik.values.Views} onChange={formik.handleChange} name="Views" className="form-control" /></td>
                        </tbody>
                        <tbody>
                            <td className="pt-2">LIKES</td>
                            <td><input type="text" value={formik.values.Likes} onChange={formik.handleChange} name="Likes" className="form-control" /></td>
                        </tbody>
                        <tbody>
                            <td className="pt-2">DISLIKES</td>
                            <td><input type="text" value={formik.values.Dislikes} onChange={formik.handleChange} name="Dislikes" className="form-control" /></td>
                        </tbody>
                        <tbody>
                            <td></td>
                            <td></td>
                            <td><iframe src={`${video.map(v=>v.Url)}`} onChange={formik.handleChange} name="Preview" /></td>
                        </tbody>
                    </table>
                    <div className="mt-5 w-50" style={{marginLeft:"800px"}}>
                        <button className="btn btn-success mx-3 w-25" type="submit" >Save</button>
                        <Link to="/admin-dashboard" className="btn btn-danger w-25">Cancel</Link>
                    </div>
                </form>
           </div>
        </div>
    )
}