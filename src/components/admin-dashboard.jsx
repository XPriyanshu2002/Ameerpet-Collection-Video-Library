import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { AdminSignout } from "./admin-signout";
import { useCookies } from "react-cookie";

export function DashBoard() {

    const [videos,setVideos] = useState([{VideoId:0, Title:'', Url:'', Description:'', Views:0, Likes:0, Dislikes:0, CategoryId:0}]);
    const [cookie, setCookie, removeCookie] = useCookies();
    let navigate = useNavigate();

    function LoadVideos() {
        axios.get("http://127.0.0.1:2020/get-videos")
        .then(response=>{
            setVideos(response.data);
        })
    }

    useEffect(()=>{
        if(cookie["admin-id"]) {
            LoadVideos();
        } else {
            navigate("*");
        }
    },[])

    return(
        <div style={{ backgroundImage:"url(netflixbanner.jpg)"}}>
           <div style={{ width:"100%", backgroundColor:"rgba(0, 0, 0, 0.8)", paddingBottom:"50px"}}>
                <div className="d-flex justify-content-between"><h1 className="text-danger m-5">Admin Dashboard</h1><span className="m-5"><AdminSignout/></span></div>
                <Link to="/add-dashboard" className="btn btn-primary mt-3">Add Video</Link>
                <table className="table table-hover text-white mt-5 rounded-3" style={{width:"1500px", marginLeft:"35px"}}>
                    <thead>
                        <tr>
                            <th className="col-4">Title</th>
                            <th className="col-4">Preview</th>
                            <th className="col-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            videos.map(video=>
                                <tr className="table-dark" key={video.VideoId}>
                                    <td><h5>{video.Title}</h5><br />{video.Description}</td>
                                    <td><iframe width="400" height="200" src={video.Url}></iframe></td>
                                    <td>
                                        <Link to={`/edit-dashboard/${video.VideoId}`} className="bi bi-pen-fill btn btn-warning mx-2" style={{marginTop:"85px"}} />
                                        <Link to={`/delete-dashboard/${video.VideoId}`} className="bi bi-trash-fill btn btn-danger" style={{marginTop:"85px"}} />
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
           </div>
        </div>
    )
}