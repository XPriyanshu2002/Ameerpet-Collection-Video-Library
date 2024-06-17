import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export function UserLogin() {

    const [userEmail, setUserEmail] = useState([]);
    const [check, setCheck] = useState(false);
    var navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies("user-id");
    const [view, setView] = useState(false);
    

    const formik = useFormik({
        initialValues:{InputEmail:"",InputPassword:""},
        onSubmit:(userInput)=> {
            if (userInput.InputEmail==="") {
                alert("Email Required To Login");
            } else {
                axios.get("http://127.0.0.1:2020/get-user")
                .then(response=> {
                setUserEmail(response.data.map(user=>user.Email));
                let userDetails = response.data.find(u=>u.Email===userInput.InputEmail);
                if (userDetails) {
                    setCheck(true);
                    if(userDetails.Password===userInput.InputPassword) {
                        setCookie("user-id",userDetails.UserName)
                        navigate("/user-dashboard");
                    } else if (userInput.InputPassword==="") {
                        //alert("Enter Password");
                    } else {
                        alert("Invalid Password");
                    }
                                                                // switch(true)
                                                                // {
                                                                //     case(userDetails.Password===userInput.Password):
                                                                //     setCookie("user-id",userDetails.UserName);
                                                                //     navigate("/user-dashboard")
                                                                //     break;

                                                                //     case(userInput.Password===""):
                                                                //     alert("Enter Password");
                                                                //     break;

                                                                //     case(userDetails.Password!==userInput.Password):
                                                                //     alert("Invalid Password");
                                                                //     break;
                                                                // }
                } else {
                    alert("Invalid Email Address or Email Not Registered");
                    setView(true);
                }                                            
            })
            }
        }   
    })

    function handleLoginClick() {
        if (document.getElementById("inputPass").value==="") {
            alert("Please Enter Password");
        } else {
            
        }
    }

    function handleClose() {
        setView(false);
    }

    const Registerformik = useFormik({
        initialValues:{ UserId:"", UserName:"", Password:"", Email:"", Mobile:0},
        validationSchema: yup.object({UserId:yup.string().required("UserId Required"), 
                                      UserName:yup.string().required("Name Rquired"), 
                                      Password:yup.string().required("Password required"), 
                                      Email:yup.string().required("Email Required"), 
                                      Mobile:yup.string().required("Mobile No. Required").matches(/\d{10}/,"Please Enter a Valid Mobile No.")
                                    }),
        onSubmit:(RegisterInput)=>{
            if(userEmail.includes(RegisterInput.Email)) {
                alert("Email already Registered please try Logging-In or\nTry Another Email");
            } else {
                navigate("/payment-page");
                setCookie("newuser-id",RegisterInput);
                // axios.post("http://127.0.0.1:2020/register-user", RegisterInput)
                // .then(()=>{
                //     alert("Congragulations You have Registered!");
                //     setCookie("user-id",RegisterInput);
                //     navigate("/user-dashboard");
                // })
            }
        }
    })

    return(
        <div>
            <div style={{display:(check)?"none":"block"}}>
                <form onSubmit={formik.handleSubmit} className="input-group input-group-lg w-50 mt-5 m-auto">
                    <input className="form-control" placeholder="Enter Your Email" type="email" name="InputEmail" onChange={formik.handleChange} />
                    <button className="btn btn-danger w-25 mx-1" type="submit">Get Started <span className="bi bi-chevron-right"></span></button>
                </form>
            </div>
            <div style={{display:(check)?"block":"none"}}>
                <form onSubmit={formik.handleSubmit} className="input-group input-group-lg w-50 mt-5 m-auto">
                    <input className="form-control" placeholder="Enter Password" type="password" name="InputPassword" onChange={formik.handleChange} id="inputPass" />
                    <button className="btn btn-danger w-25 mx-1" type="submit" onClick={handleLoginClick}>Login <span className="bi bi-chevron-right"></span></button>
                </form>
            </div>
            <Dialog open={view} fullWidth={true} >
                <form onSubmit={Registerformik.handleSubmit}>
                    <DialogTitle className="fw-bold" sx={{fontSize:"30px"}} >
                        {"Register User"}
                    </DialogTitle>
                    <DialogContent>
                        <dl>
                            <dd><TextField type="text" className="form-control mt-2" onChange={Registerformik.handleChange} name="UserId" label="User Id" /></dd>
                            <dd className="text-danger">{Registerformik.errors.UserId}</dd>
                            <dd><TextField type="text" className="form-control mt-2" onChange={Registerformik.handleChange} name="UserName" label="Name" /></dd>
                            <dd className="text-danger">{Registerformik.errors.UserName}</dd>
                            <dd><TextField type="password" className="form-control mt-2" onChange={Registerformik.handleChange} name="Password" label="Password" /></dd>
                            <dd className="text-danger">{Registerformik.errors.Password}</dd>                               
                            <dd><TextField type="email" className="form-control mt-2" onChange={Registerformik.handleChange} name="Email" label="Email" /></dd>
                            <dd className="text-danger">{Registerformik.errors.Email}</dd>
                            <dd><TextField type="number" className="form-control mt-2" onChange={Registerformik.handleChange} name="Mobile" label="Mobile" /></dd>
                            <dd className="text-danger">{Registerformik.errors.Mobile}</dd>
                        </dl>
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit2">Register</Button>
                        <Button onClick={handleClose}>Cancle</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )

}