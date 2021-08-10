
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const navbar = () => {
    return (
        <div>
            <ul class="nav nav-tabs justify-content-between bg-dark">
                <li>
                    <Link class="nav-link text-white" to="/">Home</Link>
                </li>
                <li>
                    <Link class="nav-link text-white" to="/menu">Menu</Link>
                </li>
                <li>
                    <Link class="nav-link text-white" to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link class="nav-link text-white" to="/delivery">Delivery</Link>
                </li>

            </ul>
        </div>
    )
}

export default navbar;