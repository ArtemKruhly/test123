import React, { Component } from 'react';

export default class InfoTrader extends Component {

    render() {
        return(
            <div className="footer_info">
                <span className="bolder">ABC Trader</span>
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