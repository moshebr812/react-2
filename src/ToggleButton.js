// FILE:    ToggleButton.js
import React from 'react';
import './ToggleButton.css'


export class ToggleButton extends React.Component {
    constructor() {
        super();

        this.state = {
            contentHidden: true, // by default we hide everything
        }

    }

    createButtonByDisplayStatus() {
        let a = '';
        if (this.state.contentHidden) {
            // show only a button
            a = <button onClick={()=>this.setState( {contentHidden: false} )}>
                    {this.props.showText}
                </button>
        } else {
            // show button + all relevant children
            a = <fieldset>
                <legen>Content </legen>
                <button>{this.props.hideText}</button>
            </fieldset>
        }
        return a;
    }

    render () {
        return <div>
            <button>  {this.props.defaultText}  </button>
            {this.createButtonByDisplayStatus()}
        </div>
    }
}


