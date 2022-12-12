import { useEffect } from "react";
import { sidenav } from "../../Utils/sidenav";
import DropDownItems from "./DropDownItems";
import SidenavItems from "./SidenavItems";

const Header = () => {
    useEffect(() => {
        sidenav();
    }, []);
    return (
        <div className='admin-header'>
            <nav className="teal lighten-1">
                <div className="nav-wrapper teal lighten-1 hamburger">
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger show-on-large">
                        <i className="fas fa-bars"></i>
                    </a>
                </div>
            </nav>
            <ul className="sidenav sidenav-content" id="mobile-demo">
                <div className='avatar'></div>
                <SidenavItems />
            </ul>
            <a className='dropdown-trigger btn  dropdown-btn' href='#' data-target='dropdown1'>خانم فرزانه آزاد</a>
            <ul id='dropdown1' className='dropdown-content'>
                <DropDownItems />
            </ul>
        </div>
    );
}

export default Header;