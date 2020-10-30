// FILE:    User.js

import React from 'react';
import './User.css';
// import './User.sass';
import { UserPicture } from './UserPicture';

export class User extends React.Component {
    // I can also define usage of local variables
    // static localHeader = '...user.js v2';

    constructor () {
        super();
        this.state = ({
            // Button Default state is false, as we DO NOT SHOW THE DETAILS of the Company
            // btnShowCompanyInfo: false,
            // And the text should be "Company Details". I set it to Company Init for debug.
            isToggelButtonExpanded: false,
            toggleButtonText: 'START',
        });

        console.log (JSON.stringify (this.state));
    }

    
    showInfo(e) {
        e.preventDefault();
        // this is the primitive way
        alert (`User Info for ${this.props.userName} \n\n my hero is ${this.props.heroName}`);
    }


    toggleShowCompanyButton(event) {
        event.preventDefault();
        alert ('toggleShowCompanyButton() - current value: ' + this.state.isToggelButtonExpanded);
        // this.state.isToggelButtonExpanded = !(this.state.isToggelButtonExpanded)
        // alert ('toggleShowCompanyButton() - value after assign before the set: ' + this.state.isToggelButtonExpanded);
        
        if (this.state.isToggelButtonExpanded) {
            // Context is expanded
            this.setState ({
                isToggelButtonExpanded: false,
                toggleButtonText: 'Company Info',
            });

        }   else {
            this.setState ( {
                isToggelButtonExpanded: true,
                toggleButtonText: 'CLOSE',
            });        
        }
    }

    render() {
        const buttonResizeClass = "buttonResize";

        if (this.props.userName === 'DEMO') {
            // we can render a different UI based on the input
            return (
                <div className="userInfo"> 
                    <div className="userDemoException">
                        <strong> {this.props.userName}</strong>
                        {/* <fieldset> */}
                            Demo render different html by props.input
                        {/* </fieldset> */}
                    </div>
                </div>
            )
        }

        return ( <div className="userInfo"> 
                    <div>
                    <   strong>{this.props.rowCounter}.  
                                {this.props.userName}
                         </strong> <br></br>
                        <label> {this.props.heroName} </label>
                        
                        <ol>
                            {/* use map inline to convert the array to HTML li list */}
                            {this.props.powerS.map ( item => <li>{item}</li> )}
                        </ol>
                        {/* I want to set N button, each with the background color of the array input */}
                        {/* <button style={{colorsButton}}>test</button> */}

                        {/* I define this div as Inline so I get all my colors in e 1 line */}
                        <div className="divInline">
                            {this.props.favoritColors.map ( userColor => {
                                let calcWidth = (180 / this.props.favoritColors.length).toString() + 'px';
                                let buttonStyle = {
                                    color: 'white',
                                    width: calcWidth,
                                    backgroundColor: userColor,
                                    height: 25,
                                }
                                // console.log (calcWidth);
                                return <label style={buttonStyle} class={buttonResizeClass} title={userColor+ " - preferred color"}>...</label>    
                            })}
                        </div>

                        {/* raise events from DOM */}
                        <div className="divInline">  
                            {/* <button className="inlineButton" style={{width: c}} onClick={ (e) => this.showInfo(e)}>User Info</button> */}
                            <button className="inlineButton" onClick={ (e) => this.showInfo(e)}>User Info</button>
                            {/* <button className="inlineButton" onClick= { (e) => this.toggleShowCompanyButton(e)}>{this.state.btnIsContentShown}</button> */}
                            <button className="inlineButton" 
                                onClick={( (e) => {this.toggleShowCompanyButton(e) })}
                                >{this.state.toggleButtonText}</button>
                        </div>   
                        <UserPicture isExpanded={false} textWhenExpanded="Close + Return" textWhenClosed="Show Pic"></UserPicture>
                    </div> 
                </div>) ;
    }
}
