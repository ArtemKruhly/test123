import React, { Component } from 'react';

export default class InfoCustomer extends Component {

    render() {
        return(
            <div className="footer_info">
                <span className="bolder">ABC Customer</span>
                <ul>
                    <li>Jak wycenic neruhomosc?
                        <img src={"/images/next.svg"} alt="arrow" className="svg_arrow"/>
                    </li>
                    <li>Jak wycenic neruhomosc?
                        <img src={"/images/next.svg"} alt="arrow" className="svg_arrow"/>
                    </li>
                    <li>Jak wycenic neruhomosc?
                        <img src={"/images/next.svg"} alt="arrow" className="svg_arrow"/>
                    </li>
                    <li>Jak wycenic neruhomosc?
                        <img src={"/images/next.svg"} alt="arrow" className="svg_arrow"/>
                    </li>
                    <li>Jak wycenic neruhomosc?
                        <img src={"/images/next.svg"} alt="arrow" className="svg_arrow"/>
                    </li>
                </ul>
            </div>
        )
    }
}