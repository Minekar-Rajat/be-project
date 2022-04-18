import React from "react";
import { useHistory } from "react-router-dom";

import { Button, Input, Form, Label } from "reactstrap";

const Doc = () => {

    const history = useHistory();

    const toResult = (e) => {
        e.preventDefault();
        history.push('/result');
    }

    return (
        <div className="home p-1 row">
            <center>
                <br /><br />
                <Form className="p-5 m-3" onSubmit={toResult} >
                    <Label  ><h4>Attach Your CSV File : </h4></Label>
                    <Input style={{}} placeholder="Attach CSV File" type='file' />
                    <br />
                    <Button color="success" type="submit" >Analyze <i className="fa fa-angle-double-right"></i></Button>
                </Form>
            </center>
        </div>
    );

}


export default Doc;