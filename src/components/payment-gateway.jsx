import { Button } from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";  // eslint-disable-next-line
import GooglePayButton from "@google-pay/button-react";

export function PaymentPage() {
    // eslint-disable-next-line
    const [cookie, setCookie, removeCookie] = useCookies();
    console.log(cookie["newuser-id"]);

    return(
        <div className="container-fluid">
            <div className="d-flex justify-content-between p-5"><h1>AMEERPET COLLECTION</h1><Link to="/"><Button variant="contained" color="error">Sign In</Button></Link></div>
            <LockOpenIcon fontSize="large" color="error" viewBox="0 0 24 24"/>
            <div className="d-flex justify-content-center align-items-center mt-2">
                <div className=" p-3 border border-2 rounded-3 border-black" style={{height:"600px", width:"400px"}}>
                    <h3 className="mt-2">Secured Payment</h3>
                    <h5>Powered By Google</h5>
                    <ul className="text-danger mt-4 " style={{fontFamily:"", fontSize:"20px"}}>
                        <li className="mx-4 my-2">At Just &#8377; 145</li>
                        <li className="mx-4 my-2">Unlimited Video Access</li>
                        <li className="mx-4 my-2">Latest Videos</li>
                        <li className="mx-4 my-2">All Courses</li>
                        <li className="mx-4 my-2">Top Faculties</li>
                        <li className="mx-4 my-2">Top Institutes</li>
                        <li className="mx-4 my-2">Fast Updates</li>
                        <li className="mx-4 my-2">Clean UI</li>
                        <li className="mx-4 my-2">User Friendly</li>
                        <li className="mx-4 my-2">24/7 Customer Support</li>
                    </ul>
                    {/* <GooglePayButton  className="mt-3" environment="PRODUCTION" paymentRequest={{
                        apiVersion:2, 
                        apiVersionMinor:0, 
                        merchantInfo:{
                            merchantId:"BCR2DN4TWW6LXFR3",
                            merchantName:"Ameerpet Collection"
                        }, 
                        allowedPaymentMethods:[
                            {
                                type:"CARD",
                                parameters:{
                                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                    allowedCardNetworks: ["AMEX","DISCOVER","INTERAC","JCB","MASTERCARD","VISA"]
                                }
                            }
                        ], 
                        transactionInfo: {
                            currencyCode:"INR",
                            countryCode:"IN",
                            transactionId: `${Math.round(Math.random()*10)}${Math.round(Math.random()*10)}${Math.round(Math.random()*10)}${Math.round(Math.random()*10)}${Math.round(Math.random()*10)}${Math.round(Math.random()*10)}`,
                            totalPriceStatus: "FINAL",
                            totalPrice: "1.00"
                        } 
                    }} /> */}
                </div>
            </div>
        </div>
    )
}