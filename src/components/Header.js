import React, { Component } from 'react';


export default class Header extends Component {

    render() {
        return(
         <div className="content">
               <div className="main cpntainer">
                   <div className="row">
                       <div className="col-lg-12 col-sm-12 col-12 head_block">
                           <div className="head">
                               <div className="text_head">
                                   Infolinia: 801 011 055
                                   <span style={{ paddingLeft: '20px' }}>biouro@remax-gold.pl</span>
                               </div>
                               <div className="text_head">
                                   Zostan nazsym agentem
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
         </div>
        )
    }
}