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
            style={{ width: '254px' }}
        >
            <CSidebarBrand className="d-md-down-none nav__brand" to="/">
                <img
                    className="c-sidebar-brand-full"
                    src={logo}
                    alt="logo-negative"
                    height={70}
                    width={230}
                    style={{ marginLeft: "10px", marginTop: "5px", marginBottom: "20px" }}
                />
            </CSidebarBrand>
            <CSidebarNav>
                <CCreateElement
                    classname="bg-white"
                    items={navs}
                    components={{
                        CSidebarNavDivider,
                        CSidebarNavDropdown,
                        CSidebarNavItem,
                        CSidebarNavTitle,
                    }}
                    style={{ marginLeft: '5px' }}
                />
            </CSidebarNav>
            {/* <CSidebarMinimizer className="c-d-md-down-none bg-white" /> */}
        </CSidebar>
    );
};

export default React.memo(TheSidebar);
