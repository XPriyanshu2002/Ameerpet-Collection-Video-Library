import { Button } from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from "react-router-dom";

export function PaymentPage() {
    return(
        <div>
            <div className="d-flex justify-content-between p-5"><h1>AMEERPET COLLECTION</h1><Link to="/"><Button variant="contained" color="error">Sign In</Button></Link></div>
            <LockOpenIcon fontSize="large" color="error" viewBox="0 24 24"/>
        </div>
    )
}