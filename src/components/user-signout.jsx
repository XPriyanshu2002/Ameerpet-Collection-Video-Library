import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useState } from "react";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";

export function UserSignout() {

    const [view, setView] = useState(false) // eslint-disable-next-line
    const [cookie, setCookie, removeCookie] = useCookies();
    let navigate = useNavigate();

    function handleSignoutClick() {
        setView(true);
    }

    function handleYesClick() {
        removeCookie("user-id");
        navigate("/");
    }
    
    function handleNoClick() {
        setView(false);
    }

    return(
        <div>
            <Button variant="outlined" onClick={handleSignoutClick}>{cookie["user-id"]} Signout</Button>
            <Dialog open={view} fullWidth={true} maxWidth="xs">
                <DialogTitle color="error">{"Are You Shure, You Want To Signout!"}</DialogTitle>
                <DialogActions>
                    <Button variant="outlined" color="success" onClick={handleYesClick}>Yes</Button>
                    <Button variant="outlined" color="error" onClick={handleNoClick}>No</Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}