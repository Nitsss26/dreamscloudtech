import React, { useState, useEffect } from "react";
import {
    CBadge,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import moment from "moment";
import axios from "../store/axios";
import { useHistory } from "react-router";

const TheHeaderDropdownNotif = () => {
    const [items, setitems] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get("/notification").then((res) => {
            setitems(res.data);
            console.log(res.data);
        });
    }, []);

    console.log(items);

    const handleOpenNotification = (id) => {
        setitems(items.filter((i) => i._id !== id));
        history.push(`/notification`);
    };

    let itemsCount = items?.length;
    return (
        <CDropdown inNav className="c-header-nav-item mx-1">
            <CDropdownToggle className="c-header-nav-link" caret={false}>
                <CIcon name="cil-bell" style={{ color: "#42d29d" }} size="lg" />
                {itemsCount > 0 && (
                    <CBadge shape="pill" color="danger">
                        {itemsCount}
                    </CBadge>
                )}
                {/* <CBadge shape="pill" color="danger">{itemsCount}</CBadge> */}
            </CDropdownToggle>
            <CDropdownMenu placement="bottom-end" className="pt-0">
                <CDropdownItem header tag="div" className="text-center" color="light">
                    <strong>You have {itemsCount} notifications</strong>
                </CDropdownItem>
                {items.length > 0 &&
                    items
                        .map((e, index) => (
                            <div key={index}>
                                <CDropdownItem
                                    onClick={() => handleOpenNotification(e._id)}
                                    key={e._id}
                                //href="/notifications"
                                >
                                    <CIcon name="cil-bell" className="mr-2 text-success" />
                                    <div>
                                        {" "}
                                        {e?.title} <br />{" "}
                                        <small className="mr-2">
                                            {moment(e?.createdAt).startOf().fromNow()}
                                        </small>
                                    </div>{" "}
                                    <br />
                                    <hr />
                                </CDropdownItem>{" "}
                            </div>
                        ))
                        .slice(0, 5)}
                <CDropdownItem href="/notifications">
                    <div>View More</div>
                </CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    );
};

export default TheHeaderDropdownNotif;