import React, { useState } from "react";

const Result = () => {

    const [res, setRes] = useState([{
        Prediction: 0,
        Profanity: 90.8,
        Sarcasm: "Positive",
        Sentiment: "Positive",
        Text: "hi how are you"
    },
    {
        Prediction: 0,
        Profanity: 90.8,
        Sarcasm: "Positive",
        Sentiment: "Negative",
        Text: "Go to hell ! "
    },
    {
        Prediction: 0,
        Profanity: 90.8,
        Sarcasm: "Positive",
        Sentiment: "Positive",
        Text: "hi how are you"
    },
    {
        Prediction: 0,
        Profanity: 90.8,
        Sarcasm: "Positive",
        Sentiment: "Positive",
        Text: "hi how are you"
    },
    {
        Prediction: 0,
        Profanity: 90.8,
        Sarcasm: "Positive",
        Sentiment: "Positive",
        Text: "hi how are you"
    }
    ]);

    return (
        <div className="home p-4">
            {
                res.map(r => {

                    return (
                        <div className="row m-5 shadow-lg " style={{ borderRadius: '10px', backgroundColor: 'rgb(23, 55, 214)' }}>
                            <div className="col-12  p-3">
                                <center>
                                    <h5>Text</h5>
                                    <h3>{r.Text}</h3>
                                </center>
                            </div>
                            <div className="col-12 col-md-3 p-3">
                                <center>
                                    <h5>Sentiment</h5>
                                    <h3 style={r.Sentiment == "Positive" ? { color: 'rgb(69, 255, 40)' } : { color: 'rgb(224, 35, 35)' }} >{r.Sentiment}</h3>
                                </center>
                            </div>
                            <div className="col-12 col-md-3 p-3">
                                <center>
                                    <h5>Prediction</h5>
                                    <h3>{r.Prediction}</h3>
                                </center>
                            </div>
                            <div className="col-12 col-md-3 p-3">
                                <center>
                                    <h5>Profanity</h5>
                                    <h3>{r.Profanity} %</h3>
                                </center>
                            </div>
                            <div className="col-12 col-md-3 p-3">
                                <center>
                                    <h5>Sarcasm</h5>
                                    <h3 style={r.Sarcasm == "Positive" ? { color: 'rgb(69, 255, 40)' } : { color: 'rgb(224, 35, 35)' }} >{r.Sarcasm}</h3>
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