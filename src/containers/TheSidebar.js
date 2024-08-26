import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    CCreateElement,
    CSidebar,
    CSidebarBrand,
    CSidebarNav,
    CSidebarNavDivider,
    CSidebarNavTitle,
    CSidebarMinimizer,
    CSidebarNavDropdown,
    CSidebarNavItem,
} from "@coreui/react";
import { selectSidebarShow, set } from "../store/slices/appSlice";
import logo from "../assets/icons/logo.png";
import "../scss/custom-styles.scss"; // Import your custom styles

const TheSidebar = ({ navs }) => {
    const dispatch = useDispatch();
    const show = useSelector(selectSidebarShow);

    return (
        <CSidebar
            className="sidebar__main"
            show={show}
            onShowChange={(val) => dispatch(set(val))}
            style={{ width: '255px', backgroundColor: "#fffff5" }}  // Entire Sidebar background
        >
            <CSidebarBrand
                className="d-md-down-none nav__brand"
                to="/"
                style={{ backgroundColor: "#fffff5", }} // Uniform padding instead of margin
            >
                <img
                    className="c-sidebar-brand-full"
                    src={logo}
                    alt="logo-negative"
                    height={100}
                    width={280}
                    style={{ backgroundColor: "#fffff5" }}  // Ensuring image background matches
                />
            </CSidebarBrand>
            <CSidebarNav style={{ backgroundColor: "#fffff5", paddingLeft: "5px" }}>
                <CCreateElement
                    classname=""
                    items={navs}
                    components={{
                        CSidebarNavDivider,
                        CSidebarNavDropdown,
                        CSidebarNavItem,
                        CSidebarNavTitle,
                    }}
                />
            </CSidebarNav>
            {/* <CSidebarMinimizer className="c-d-md-down-none bg-white" /> */}
        </CSidebar>
    );
};

export default React.memo(TheSidebar);
