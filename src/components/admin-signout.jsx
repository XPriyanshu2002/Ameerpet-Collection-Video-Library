import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";

export function AdminSignout() {
    // eslint-disable-next-line
    const [cookie, setCookie, removeCookie] = useCookies();
    let navigate = useNavigate();

    function handleSignoutClick() {
        removeCookie("admin-id");
        navigate("/");
    }

    return(
        <button className="btn btn-danger" onClick={handleSignoutClick}>{cookie["admin-id"]} Signout</button>
    )

}