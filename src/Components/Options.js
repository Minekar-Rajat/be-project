import React from "react";
import { Button, Card } from "reactstrap";
import { Zoom } from "react-reveal";
import { Fade, Stagger } from 'react-animation-components';
import { NavLink } from 'react-router-dom';


const Options = () => {

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
        </div>
    );
}

export default Options;