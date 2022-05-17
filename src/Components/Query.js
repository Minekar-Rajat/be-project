
import React, { useEffect, useState } from "react";
import { Button, Input, Form } from "reactstrap";

import { useHistory } from "react-router-dom";
import { Fade } from "react-reveal";
import Swal from "sweetalert2";
const Query = () => {


    const history = useHistory();

    const [text, setText] = useState(null);

    const getRes = (fData) => {
        Swal.fire({
            timerProgressBar: true,
            background: "none",
            didOpen: () => {
                Swal.showLoading();
                fetch("http://localhost:5000/query_tweet", { method: "POST", headers: { Accept: "application/json;charset=UTF-8" }, body: fData })
                    .then(res => res.json())
                    .then(res => {
                        setText(res);
                        console.log(res);
                    })
                    .catch(err => Swal.fire("", "Something Went Wrong !", "warning"));

            },
        });
    }

    const toResult = (e) => {
        e.preventDefault();

        var fData = new FormData();

        fData.append('query', e.target.txt.value);
        getRes(fData);
    }

    useEffect(() => {
        if (text) {
            setTimeout(() => {
                Swal.close();
                history.push({ pathname: '/result', state: text });
            }, 1000);
        }

    }, [text]);


    return (
        <div className="home p-5 row">
            <h3>Query Analysis</h3>
            <hr />
            <center>
                <Form className="p-5 m-3" onSubmit={toResult}>
                    <Fade left>
                        <Input style={{ width: '70%' }} required name="txt" placeholder="Enter Topic ..." />
                    </Fade>
                    <br />
                    <Fade right>
                        <Button color="success" type="submit" >Analyze <i className="fa fa-angle-double-right"></i></Button>
                    </Fade>
                </Form>
            </center>
        </div>
    );

}


export default Query;