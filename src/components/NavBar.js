import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {

    render() {
        return(
            <div className="content">
                <div className="main cpntainer">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-12 nav_block">
                           <div>
                               <img src={"/images/Capture.PNG"} alt="logo"/>
                           </div>
                           <div className="nav_links">
                               <Link className="link" to="">Nasi agenci</Link>
                               <Link className="link" to="">Kup/Wynajmij</Link>
                               <Link className="link" to="">Sprzedaj</Link>
                               <Link className="link" to="">Ogloszenia</Link>
                               <Link className="link" to="">Rezydencje</Link>
                               <Link className="link" to="">Drzwi otwarte</Link>
                               <Link className="link" to="">Blog</Link>
                               <Link className="link" to="">O nas</Link>
                               <Link className="link" to="">Kontakt</Link>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}