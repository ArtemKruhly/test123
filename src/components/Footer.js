import React, { Component } from 'react';
import RemaxAbout from "./RemaxAbout";
import Contact from "./Contact";
import InfoTrader from "./InfoTrader";
import InfoCustomer from "./InfoCustomer";
import Privacy from "./Privacy";
import PaginationPage from "./PaginationPage";

export default class Footer extends Component {

    render() {
        return(
            <div className="row">
                <div className="pagin" >
                    <PaginationPage />
                </div>

                <div className="col-lg-12 col-sm-12 col-12 carousel_block color_text">
                    <div>
                        <img src={"/images/Capture.PNG"} alt="logo"/>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <RemaxAbout />
                        <Contact />
                        <InfoTrader />
                        <InfoCustomer />
                    </div>
                    <Privacy />
                </div>
            </div>
        )
    }
}