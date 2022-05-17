import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Spinner } from "reactstrap";

const Result = () => {

    var location = useLocation();
    var history = useHistory();

    const [res, setRes] = useState({});


    useEffect(() => {

        if (location.state)
            setRes(location.state);

    }, []);

    useEffect(() => {
        console.log(res);
    }, [res]);



    if (!res) {
        return (
            <Spinner />
        )
    }
    return (
        <div className="home p-4">
            {
                res && res.profile && res.profile.data && res.profile.data.map(r => {
                    return (
                        <div className="row m-5">
                            <div className="col-lg-2  py-3">
                                <img src={r.profile_image_url} style={{ height: "100px" }} className="rounded-circle" alt="Profile Imgae" />

                            </div>
                            <div className="col-lg-10 pt-0 pt-lg-5">
                                <h4>{r.name}</h4>
                                <p>{r.description}</p>
                            </div>
                            <hr />
                            <p> {r.public_metrics.followers_count} followers  {r.public_metrics.following_count} following</p>
                        </div>
                    );
                })
            }

            {
                res && res.data && res.data.map(r => {

                    console.log(r);

                    return (
                        <div className="row m-5 shadow-lg mycard" style={{ borderRadius: '10px', backgroundColor: 'black' }}>
                            <div className="col-12  p-3">
                                <center>
                                    <h5>Text</h5>
                                    <h3>{r.Text}</h3>
                                </center>
                            </div>
                            <hr />
                            <div className="col-12 col-md-3 p-3">
                                <center>
                                    <h5>Sentiment</h5>
                                    <h3 style={r.Sentiment == "pos" ? { color: 'rgb(69, 255, 40)' } : { color: 'rgb(255, 80, 80)' }} >{r.Sentiment == "pos" ? "Positive" : "Negative"}</h3>
                                </center>
                            </div>
                            <div className="col-12 col-md-3 p-3">
                                <center>
                                    <h5>Possible Cyber Bullying</h5>
                                    <h3 style={r.Prediction == "not_cyberbullying" ? { color: 'rgb(69, 255, 40)' } : { color: 'rgb(255, 80, 80)' }} >{r.Prediction != "not_cyberbullying" ? (<> <i className="fa fa-exclamation-circle "></i> {"Category : " + r.Prediction} </>) : ("Not Detected")} </h3>
                                </center>
                            </div>
                            <div className="col-12 col-md-3 p-3">
                                <center>
                                    <h5>Profanity</h5>
                                    <h3>{((Number(r.Profanity)) * 100).toFixed(2)} %</h3>
                                </center>
                            </div>
                            <div className="col-12 col-md-3 p-3">
                                <center>
                                    <h5>Sarcasm</h5>
                                    <h3 style={{ color: 'rgb(255, 248, 53)' }} >{r.Sarcasm == 1 ? "Positive" : "Negative"}</h3>
                                </center>
                            </div>

                        </div>
                    );

                })

            }
        </div>
    );

}


export default Result;