import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <NavLink
                    to="/"
                    className={({ isActive }) => {
                        return isActive ? "link active" : "link";
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => {
                        return isActive ? "link active" : "link";
                    }}
                >
                    About
                </NavLink>
                <NavLink
                    to="/products"
                    className={({ isActive }) => {
                        return isActive ? "link active" : "link";
                    }}
                >
                    Products
                </NavLink>
            </div>
        </>
    );
};

export default Navbar;
