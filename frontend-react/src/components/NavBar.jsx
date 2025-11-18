import { Link } from "react-router"
import { useUserStore } from "../store/useUserStore"

const NavBar = () => {
    const { token } = useUserStore()
    return(
        <div className="navbar">
            <div className="navbar-container">
                <h2 className="navbar-brand">Feedback</h2>
                <ul className="navbar-nav">
                    <li>
                        <Link to={"/"}>Домой</Link>
                    </li>
                    {!token ? (
                        <li>
                            <Link to={"/signin"}>Войти</Link>
                        </li>
                    ) : (
                        <li>
                            <Link to={"/logout"}>Выйти</Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
export default NavBar