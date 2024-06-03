import { Link } from "react-router-dom";

export function Error404() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh", backgroundImage:"url(404.jpg)"}} id="bg">
            <h1 className=" fw-bold">404 <br/> PAGE NOT FOUND</h1>
            <div><Link to="/" className="btn btn-primary mx-5" >Back To Home Page</Link></div>
        </div>
    )
}