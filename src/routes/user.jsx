import { Outlet } from "react-router"
import Navbar from "../components/Navbar"

const User = () => {

    return(
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
export default User