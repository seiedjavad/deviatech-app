import React from 'react';
import Header from "../components/Header/Header";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

export default function PublicRoute({Component, onlyComponent = false, ...rest}) {
    return (
        <Route {...rest} render={props => (
            <>
                {onlyComponent ? <Component {...props} /> :
                    <>
                        <Header {...props}/>
                            <Component {...props} />
                        {/*<Footer/>*/}
                    </>
                }
            </>
        )}/>

    );
};

