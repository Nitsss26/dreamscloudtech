import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
    let year = new Date();

    return (
        <CFooter fixed={false}>
            <p className="text-center  w-100 mt-3">
                © 2020 - {year.getFullYear()} Dreams CloudTect PVT Ltd. All Rights
                Reserved.
            </p>
        </CFooter>
    );
};

export default React.memo(TheFooter);