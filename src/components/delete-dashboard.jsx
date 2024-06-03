import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AdminSignout } from "./admin-signout";
import { useCookies } from "react-cookie";

export function DeleteDashboard() {
  let params = useParams();
  const [video, setVideo] = useState([{}]);
  const [cookie, setCookie, removeCookie] = useCookies("admin-id");
  let navigate = useNavigate();

  function LoadVideo() {
    axios
      .get(`http://127.0.0.1:2020/get-video/${params.id}`)
      .then((response) => {
        setVideo(response.data);
      });
  }

  function handleDeleteClick() {
    axios.delete(`http://127.0.0.1:2020/delete-video/${params.id}`).then(() => {
      alert("Video Deleted");
      navigate("/admin-dashboard");
    });
  }

  useEffect(() => {
    if (cookie["admin-id"]) {
      LoadVideo();
    } else {
      navigate("*");
    }
  }, []);

  return (
    <body style={{backgroundImage:"url(netflixbanner-2.jpg)"}} >  
       <div style={{backgroundColor:"rgba(0,0,0,0.8)", height:"100vh"}}>
                <div className="d-flex justify-content-between bg-black"><h1 className="text-danger m-5">Delete Video</h1><span className="m-5"><AdminSignout/></span></div>
                <div className=" d-flex justify-content-center">
                    <div className="card mt-5">
                        <div className="card-header">
                            <div className="card-title">{video.map(v=>v.Title)}</div>
                            <div className="card-subtitle">{video.map(v=>v.Description)}</div>
                        </div>
                        <div className="card-body">
                            <div className="card-img">
                                <iframe src={video.map(v=>v.Url)} height="300" width="500"></iframe>
                            </div>
                            <div className="card-text">
                                <span className="bi bi-eye mx-5">{video.map(v=>v.Views)}</span>
                                <span className="bi bi-hand-thumbs-up-fill">{video.map(v=>v.Likes)}</span>
                                <span className="bi bi-hand-thumbs-down-fill mx-5">{video.map(v=>v.Dislikes)}</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            <Link to="/admin-dashboard" className="btn btn-primary bi-chevron-left me-3">Cancle</Link>
                            <button onClick={handleDeleteClick} className="btn btn-danger bi-trash-fill me-3">Delete</button>
                        </div>
                    </div>
                </div>
        </div>
    </body>
  );
}
