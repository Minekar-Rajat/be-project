import React from "react";
import { Button, Card } from "reactstrap";
import { Zoom } from "react-reveal";
import { Fade, Stagger } from 'react-animation-components';
import { NavLink } from 'react-router-dom';
import Options from "./Options";

const Home = () => {
    return (
        <div className="home p-3 row">


            <div id='features' className="col-12 col-md-12 row  p-5">
                <div className="col-12">
                    <center>
                        <Fade in >
                            <h1>Cyber Bullying Detection</h1>
                        </Fade>
                        <hr className="hr-line" />
                        <br />

                    </center>

                </div>

                <Zoom left>

                    <div className="col-6">
                        <center>
                            <br /><br /><br />
                            <h1>Cyber Bullying is Serious !</h1>
                            <br /><br />
                            <h2>Start Analysis Now</h2>

                            <br />
                            <NavLink to="/options"><Button color="primary" className="px-4"><i className="fa fa-angle-double-right"></i></Button></NavLink>

                        </center>
                    </div>
                </Zoom>
                <Zoom right>
                    <div className="col-6 ">
                        <center>
                            <img src="/images/cyber2.gif" className="img-fluid " style={{ maxHeight: "80vh", borderRadius: "20px" }} />
                        </center>
                    </div>
                </Zoom>
            </div>

            <br />
            <Zoom left>
                <div className="col-12 col-lg-6 p-5">
                    <img src="/images/cyberbully.gif" alt="Cyber Bully" className="img-fluid " style={{ borderRadius: "20px" }} />
                </div >
            </Zoom>
            <Zoom right>
                <div className="col-12 col-lg-6 p-5">
                    <h1>What is Cyber Bullying ?</h1>
                    <hr className="hr-line" />
                    <br /><br />
                    <p>Cyberbullying is when someone, typically a teenager, bullies or harasses others on the internet and other digital spaces, particularly on social media sites.
                        Cyberbullying or cyberharassment is a form of bullying or harassment using electronic means. Cyberbullying and cyberharassment are also known as online bullying.
                    </p>
                </div >
            </Zoom>


            <Zoom bottom>
                <div className="col-12 col-lg-6 p-5">
                    <h1>Effects of Cyber Bullying </h1>
                    <hr className="hr-line" />
                    <br /><br />
                    <p>
                        Adolescents who are targeted via cyberbullying report increased depressive affect, anxiety, loneliness, suicidal behavior, and somatic symptoms. Perpetrators of cyberbullying are more likely to report increased substance use, aggression, and delinquent behaviors.
                    </p>
                </div >
            </Zoom>
            <Zoom bottom>
                <div className="col-12 col-lg-6 p-5">
                    <img src="/images/stop.gif" alt="Cyber Bully" className="img-fluid " style={{ borderRadius: "20px" }} />
                </div >
            </Zoom>


            <Zoom left>
                <div className="col-12 col-lg-6 p-5">
                    <img src="/images/cry.gif" alt="Cyber Bully" className="img-fluid " style={{ borderRadius: "20px" }} />
                </div >
            </Zoom>
            <Zoom right>
                <div className="col-12 col-lg-6 p-5">
                    <h1>Need of Cyber Bullying Detection</h1>
                    <hr className="hr-line" />
                    <br /><br />
                    <p>
                        Adolescents who are targeted via cyberbullying report increased depressive affect, anxiety, loneliness, suicidal behavior, and somatic symptoms. Perpetrators of cyberbullying are more likely to report increased substance use, aggression, and delinquent behaviors.
                    </p>
                </div >
            </Zoom>

            <Fade in>
                <div className="col-12 p-5">
                    <center>
                        <h1>Take First Step against Cyber Bullying</h1>
                        <hr className="hr-line" />
                        <br /><br />
                        <NavLink to="/options"><Button color="primary">Start Now</Button></NavLink>
                        <br /><br />
                    </center>
                </div >
            </Fade>



        </div>
    );
}

export default Home;
