import React, { Component } from 'react';

export default class Contact extends Component {

    render() {
        return(
            <div className="footer_info" style={{ paddingLeft: '50px' }}>
                <span className="bolder">Kontakt</span>
                <div style={{ paddingTop: '10px' }}>ul. Kopernica 20</div>
                <div style={{ paddingTop: '10px' }}>23 222 000</div>
                <div style={{ paddingTop: '10px' }}>biuro@remax-gold.pl</div>
            </div>
        )
    }
}