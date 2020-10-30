// FOLDER:  \React_1\react-2
// FILE:    UserPicture.js

import React from 'react';
import './UserPicture.css'

export class UserPicture extends React.Component {
    constructor() {
        super();
        this.state = { isSectionExpanded: false};
        
    }

    builderRender() {
        console.log ('this.props.isExpanded - ' + this.props.isExpanded);
        if (this.props.isExpanded) {
            return (
                    <button>{this.props.textWhenExpanded}</button>
             )       
        } else {
            return (
                <button>{this.props.textWhenClosed}</button>
            )          
        }
    }
    render() {
        return (
            <div className="userPicture">
                <div>
                    {this.builderRender()}
                 </div>
            </div>
        );  
    }   // END render()
}