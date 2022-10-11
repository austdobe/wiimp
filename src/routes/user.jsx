import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import UserBanner from "../components/UserBanner"

const User = () => {

    return(
        <>
            <UserBanner />
                <Outlet />
            <Navbar />
        </>
    )
}
export default User