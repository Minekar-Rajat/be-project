import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import Account from "./Account";
import Doc from "./Doc";
import Footer from "./Footer";
import Home from "./Home";
import Latest from "./Latest";
import Nav from "./Nav";
import Options from "./Options";
import Query from "./Query";
import Result from "./Result";
import Text from "./Text";

const Main = () => {
    return (
        <>
            <Nav />
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/text' component={Text} />
                <Route path='/account' component={Account} />
                <Route path='/doc' component={Doc} />
                <Route path='/latest' component={Latest} />
                <Route path='/query' component={Query} />
                <Route path='/result' component={Result} />
                <Route path="/options" component={Options} />
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </>
    );
}

export default Main;
