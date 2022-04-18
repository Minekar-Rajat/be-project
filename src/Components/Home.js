import React from "react";
import { Button, Card } from "reactstrap";
import { Zoom } from "react-reveal";
import { Fade, Stagger } from 'react-animation-components';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home p-3 row">

            <div id='features' className="col-12 col-md-12  pt-4" style={{ height: '100vh' }}>
                <center>
                    <Fade in >
                        <h1>Cyber Bullying Detection</h1>
                    </Fade>
                    <hr className="hr-line" />
                    <br />

                    <Stagger in>
                        <Fade in>
                            <Zoom bottom >
                                {/* <Card className="py-3 px-2 m-3" style={{ width: '70%', backgroundColor: 'rgb(144, 53, 193)', cursor: 'pointer' }}>
                                    <h3>Text Analysis</h3>
                                </Card> */}
                                <NavLink to='/text'>
                                    <Button className="py-3 px-2 m-2" color="success" style={{ width: '70%', cursor: 'pointer' }} ><h3>Text Analysis</h3></Button>
                                </NavLink>
                            </Zoom>
                        </Fade>
                        <Fade in>
                            <Zoom bottom >
                                {/* <Card className="py-3 px-2 m-3" style={{ width: '70%', backgroundColor: 'rgb(144, 53, 193)', cursor: 'pointer' }}>
                                    <h3>Account Analysis</h3>
                                </Card> */}
                                <NavLink to='/account'>
                                    <Button className="py-3 px-2 m-2" color="success" style={{ width: '70%', cursor: 'pointer' }} ><h3>Account Analysis</h3></Button>
                                </NavLink>
                            </Zoom>
                        </Fade>
                        <Fade in>
                            <Zoom bottom >
                                {/* <Card className="py-3 px-2 m-3" style={{ width: '70%', backgroundColor: 'rgb(144, 53, 193)', cursor: 'pointer' }}>
                                    <h3>Doucument Analysis</h3>
                                </Card> */}
                                <NavLink to='/doc'>
                                    <Button className="py-3 px-2 m-2" color="success" style={{ width: '70%', cursor: 'pointer' }} > <h3>Doucument Analysis</h3></Button>
                                </NavLink>
                            </Zoom>
                        </Fade>
                        <Fade in>
                            <Zoom bottom >
                                {/* <Card className="py-3 px-2 m-3" style={{ width: '70%', backgroundColor: 'rgb(144, 53, 193)', cursor: 'pointer' }}>
                                    <h3>Comment Analysis</h3>
                                </Card> */}
                                <NavLink to='/latest'>
                                    <Button className="py-3 px-2 m-2" color="success" style={{ width: '70%', cursor: 'pointer' }} ><h3>Latest Tweet Analysis</h3></Button>
                                </NavLink>
                            </Zoom>
                        </Fade>
                        <Fade in>
                            <Zoom bottom >
                                {/* <Card className="py-3 px-2 m-3" style={{ width: '70%', backgroundColor: 'rgb(144, 53, 193)', cursor: 'pointer' }}>
                                    <h3>Comment Analysis</h3>
                                </Card> */}
                                <NavLink to='/query'>
                                    <Button className="py-3 px-2 m-2" color="success" style={{ width: '70%', cursor: 'pointer' }} ><h3>Query Analysis</h3></Button>
                                </NavLink>
                            </Zoom>
                        </Fade>
                    </Stagger>

                    {/* <Button color="light" className="m-4" style={{ borderRadius: '10px' }} >Start Now</Button> */}
                    <br />
                </center>
            </div>
            <Zoom left>
                <div className="col-12 col-lg-6 p-5">
                    <img src="/images/cyberbully.gif" alt="Cyber Bully" className="img-fluid rounded" />
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
                    <img src="/images/stop.gif" alt="Cyber Bully" className="img-fluid rounded" />
                </div >
            </Zoom>


            <Zoom left>
                <div className="col-12 col-lg-6 p-5">
                    <img src="/images/cry.gif" alt="Cyber Bully" className="img-fluid rounded" />
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
                        <br /><br /><br />
                        <a href="#features"><Button color="light">Start Now</Button></a>
                        <br /><br />
                    </center>
                </div >
            </Fade>

        </div>
    );
}

export default Home;
