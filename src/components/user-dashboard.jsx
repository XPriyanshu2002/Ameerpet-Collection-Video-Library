import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Modal, Typography, Paper, Divider, InputBase, Menu, MenuItem } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';
import { UserSignout } from "./user-signout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function UserDashboard() {

    const [videos, setVideos] = useState([]);
    const [categories, setCategories] = useState([]);
    const [anchor, setAnchor] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [watchVideo, setWatchVideo] = useState({});  // eslint-disable-next-line
    const [cookie, setCookie, removeCookie] = useCookies();
    const [view, setView] = useState(false);
    const [likeColor, setLikeColor] = useState("");
    const [dislikeColor, setDislikeColor] = useState("");
    const [categoryInfo, setCategoryInfo] = useState();
    var navigate = useNavigate();

    function LoadVideos() {
        axios.get("mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net//get-videos")
        .then(response=>{
            setVideos(response.data);
        })
    }

    function handleWatchClick(id) {
        
        //setWatchVideo(videos.find(v=>v.VideoId===id));

        // let video = videos.find(v=>v.VideoId===id);
        // video.Views=video.Views+1;
        // setWatchVideo(video);
        // axios.put(`mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net//edit-video/${watchVideo.VideoId}`, watchVideo)
        // .then(()=>{
        //     console.log("View Updated");
        // })
        // axios.get("mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net//get-videos")
        // .then(response=>{
        //     setVideos(response.data);
        // })

        axios.get(`mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net//get-video/${id}`)
        .then(response=>{
            let viewVideo = response.data[0];
            viewVideo.Views=viewVideo.Views+1;
            setWatchVideo(viewVideo);
            axios.put(`mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net//edit-video/${viewVideo.VideoId}`, viewVideo)
            .then(()=>{
                console.log("View Updated");
            })
        })
        setView(true);
    }

    function handleCloseClick(id) {
        if (categoryInfo) {
            handleCategoryChange(id); 
        } else {
            LoadVideos(); 
        }
        setView(false);
        setLikeColor("");
        setDislikeColor("");
    }

    function handleLikeClick(e) {
        
        // if (likeColor==="") {
        //     watchVideo.Likes=e+1;
        //     axios.put(`mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net//edit-video/${watchVideo.VideoId}`, watchVideo)
        //     .then(()=>{
        //         console.log("Liked");
        //     })
        //     setLikeColor("primary");
        // } else {
        //     watchVideo.Likes=e-1;
        //     axios.put(`mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net//edit-video/${watchVideo.VideoId}`, watchVideo)
        //     .then(()=>{
        //         console.log("Undo Like");
        //     })
        //     setLikeColor("");
        // }

        if (likeColor==="" && dislikeColor==="") {
            watchVideo.Likes=e+1;
            axios.put(`mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net//edit-video/${watchVideo.VideoId}`, watchVideo)
            .then(()=>{
                console.log("Liked");
            })
            setLikeColor("primary");
        } else if (likeColor==="" && dislikeColor==="error") {
            watchVideo.Likes=e+1;
            watchVideo.Dislikes=watchVideo.Dislikes-1;
            axios.put(`mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net//edit-video/${watchVideo.VideoId}`, watchVideo)
            .then(()=>{
                console.log("Liked \nDislike Altered");
            })
            setLikeColor("primary");
            setDislikeColor("");
        } else {
            watchVideo.Likes=e-1;
            axios.put(`mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net//edit-video/${watchVideo.VideoId}`, watchVideo)
            .then(()=>{
                console.log("Like Altered");
            })
            setLikeColor("");
        }
    }

    function handleDislikeClick() {

        // if (dislikeColor==="") {
        //     watchVideo.Dislikes=watchVideo.Dislikes+1;
        //     axios.put(`mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net//edit-video/${watchVideo.VideoId}`, watchVideo)
        //     .then(()=>{
        //         console.log("Disliked");
        //     })
        //     setDislikeColor("error");
        // } else {
        //     watchVideo.Dislikes=watchVideo.Dislikes-1;
        //     axios.put(`mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net//edit-video/${watchVideo.VideoId}`, watchVideo)
        //     .then(()=>{
        //         console.log("Undo Dislike");
        //     })
        //     setDislikeColor("");

        if (dislikeColor==="" && likeColor==="") {
            watchVideo.Dislikes=watchVideo.Dislikes+1;
            axios.put(`mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net//edit-video/${watchVideo.VideoId}`, watchVideo)
            .then(()=>{
                console.log("Disliked");
            })
            setDislikeColor("error");
        } else if (dislikeColor==="" && likeColor==="primary") {
            watchVideo.Dislikes=watchVideo.Dislikes+1;
            watchVideo.Likes=watchVideo.Likes-1;
            axios.put(`mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net//edit-video/${watchVideo.VideoId}`, watchVideo)
            .then(()=>{
                console.log("Disliked \nLike Altered");
            })
            setDislikeColor("error");
            setLikeColor("");
        } else {
            watchVideo.Dislikes=watchVideo.Dislikes-1;
            axios.put(`mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net//edit-video/${watchVideo.VideoId}`, watchVideo)
            .then(()=>{
                console.log("Dislike Altered");
            })
            setDislikeColor("");
        }
    }

    function LoadCategories() {
        axios.get("mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net//get-categories")
        .then(response=>{
            response.data.unshift({CategoryId:0, CategoryName:"All"});
            setCategories(response.data);
        })
    }

    function handleMenuClick(e) {
        setAnchor(e.currentTarget);
        setMenuOpen(true);
    }

    function handleMenuClose() {
        setMenuOpen(false);
    }

    function handleCategoryChange(id) {
        if (id===0) {
            axios.get("mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net//get-videos")
            .then(response=>{
                setVideos(response.data);
            })
        } else {
            axios.get(`mongodb+srv://Priyanshu:Priyanshu007@ameerpetcollections.hivkc9e.mongodb.net//get-videos/${id}`)
            .then(response=>{
                setVideos(response.data);
            })
        }
        setMenuOpen(false);
        setCategoryInfo(id);
    }

    useEffect(()=>{
        if(cookie["user-id"]) {
            LoadVideos();
            LoadCategories();
        } else {
            navigate("*");
        }   // eslint-disable-next-line
    },[])

    return(
        <div style={{backgroundImage:"url(netflixbanner-2.jpg)"}}>
            <div style={{backgroundColor:"rgba(0,0,0,0.8)"}}>
                <div className="d-flex justify-content-between p-3 bg-black">
                    <h1 className="text-danger py-2 ms-2">Ameerper Collection</h1>
                    <Paper component="form" sx={{margin:"15px", display: "flex", alignItems: "center", width: 500, marginLeft:"-185px" }}>
                        <div>
                            <IconButton sx={{ p: '10px' }} onClick={handleMenuClick} >
                                <MenuIcon />
                            </IconButton>
                            <Menu open={menuOpen} anchorEl={anchor} onClose={handleMenuClose}>
                                {
                                    categories.map(category=>
                                        <MenuItem key={category.CategoryName} onClick={()=>{handleCategoryChange(category.CategoryId)}}>{category.CategoryName}</MenuItem>
                                    )
                                }
                            </Menu>
                        </div>
                        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Netflix" inputProps={{ 'aria-label': 'search netflix' }}/>
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon/>
                        </IconButton>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical"/>
                    </Paper>
                    <span className="pt-3"><UserSignout/></span>
                </div>
                <Box className="d-flex flex-wrap pb-5">
                   {
                    videos.map(video=>
                        <Card key={video.VideoId} sx={{maxWidth:500}} className="container-fluid mt-4">
                            <CardHeader title={video.Title}/>
                            <CardMedia component="iframe" src={video.Url} height="300" title={video.Title} />
                            <CardContent>{video.Description}</CardContent>
                            <CardActions className="d-flex justify-content-between">
                                <div><span><VisibilityIcon/></span><span className="mx-1 fw-bold">{video.Views}</span></div>
                                <Button className="ms-5" variant="contained" onClick={()=>{handleWatchClick(video.VideoId)}}>Watch</Button>
                                <div style={{marginRight:"-10px"}}>
                                    <span className="mx-1 "><ThumbUpIcon/></span>
                                    <span className="me-3 fw-bold">{video.Likes}</span>
                                    <span><ThumbDownIcon/></span>
                                    <span className="ms-1 fw-bold">{video.Dislikes}</span>
                                </div>
                            </CardActions>
                        </Card>
                    )
                   }
                   <Modal open={view} container={document.body}>
                        <Card>
                            <CardHeader title={watchVideo.Title} action={<IconButton onClick={()=>{handleCloseClick(watchVideo.CategoryId)}}><CloseIcon fontSize="large" color="error"/></IconButton>} />
                            <CardMedia component="iframe" src={watchVideo.Url} height="700" title={watchVideo.Title}/> 
                            <CardContent><h5>{watchVideo.Description}</h5></CardContent>
                            <CardActions className=" d-flex justify-content-between pb-4" sx={{marginTop:"-10px"}}>
                                <div className="d-flex"><VisibilityIcon className="mx-2" fontSize="large" /><Typography fontSize={25}>{watchVideo.Views}</Typography></div>
                                <div className="d-flex" style={{marginTop:"-10px"}}>
                                    <IconButton className="me-1" onClick={()=>{handleLikeClick(watchVideo.Likes)}} color={likeColor}><ThumbUpIcon fontSize="large"/></IconButton><Typography className="mt-2" fontSize={25}>{watchVideo.Likes}</Typography>
                                    <IconButton className="ms-4 me-1 mt-1" onClick={handleDislikeClick} color={dislikeColor}><ThumbDownIcon fontSize="large"/></IconButton><Typography className="me-4 mt-2" fontSize={25}>{watchVideo.Dislikes}</Typography>
                                </div>
                            </CardActions>
                        </Card>
                    </Modal>
                </Box>
            </div>
        </div>
    )
}