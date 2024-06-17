import { Button } from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import GooglePayButton from "@google-pay/button-react";

export function PaymentPage() {

    const [cookie, setCookie, removeCookie] = useCookies();
    console.log(cookie);

    return(
        <div>
            <div className="d-flex justify-content-between p-5"><h1>AMEERPET COLLECTION</h1><Link to="/"><Button variant="contained" color="error">Sign In</Button></Link></div>
            <LockOpenIcon fontSize="large" color="error" viewBox="0 24 24"/>
            <GooglePayButton environment="TEST" paymentRequest={{
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
            }} />
        </div>
    )
}