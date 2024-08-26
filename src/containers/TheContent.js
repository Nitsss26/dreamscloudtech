import React, { Suspense } from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

// routes config
//import routes from '../routes'

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

const TheContent = ({ routes, path }) => {
    return (
        <main className="c-main" style={{
            backgroundColor: "#edece4  ",
            // backgroundColor: "#eef2f7",
            // backgroundColor: "#ebedef",
            border: "none",         // Removes the border
            boxShadow: "none"       // Removes the shadow
        }}>
            <CContainer fluid>
                <Suspense fallback={loading}>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => (
                                        <CFade>
                                            <route.component {...props} />
                                        </CFade>
                                    )}
                                />
                            )
                        })}
                    </Switch>
                </Suspense>
            </CContainer>
        </main>
    )
}

export default React.memo(TheContent)


