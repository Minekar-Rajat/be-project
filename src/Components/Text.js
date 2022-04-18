import React from "react";
import { Button, Input, Form } from "reactstrap";

import { useHistory } from "react-router-dom";


const Text = () => {

    const history = useHistory();

    const toResult = (e) => {
        e.preventDefault();
        history.push('/result');
    }

    return (
        <div className="home p-5 row">
            <center>
                <Form className="p-5 m-3" onSubmit={toResult} >
                    <Input style={{ width: '70%' }} placeholder="Enter Your Text Here ..." />
                    <br />
                    <Button color="success" type="submit" >Analyze <i className="fa fa-angle-double-right"></i></Button>
                </Form>
            </center>
        </div>
    );

}


export default Text;