// FOLDER:  react-2         FILE:    UsersList.js

import React from 'react';
// Component CSS
import './UsersList.css';
// Referenced HTML Classes applied via *.js files
import { User } from './user/User';
import { ToggleButton } from '../ToggleButton';

export class UsersList extends React.Component {
   
    // to access a static use this
    // static ulRevision = '1.2.20'; // in the render() section use this
                                 // {UsersList.ulRevision}
    // to access a NON static use this 
    counter = parseInt(0);       // in the render section user this
                                 // {this.counter + 1}
    
    constructor() {
        super();

        this.state = {
            users2:  [
                {userName: "Dan Cohen.3", heroName: "Spiderman", powerS: ["Vision","Fly"], favoritColors: ["red","lime","purple"]},
                {userName: "Naama Levi.3", heroName: "Batman", powerS: ["All Black","Touch","Kitten"], favoritColors: ["yellow","darkred"] },
                {userName: "DEMO", heroName: "Batman", powerS: ["All Black","Touch","Kitten"], favoritColors: ["yellow","darkred"] },
                {userName: "Eli M.3", heroName: "Spiderman", powerS: ["Sunny","Beauty"], favoritColors: ["skyblue","purple","white","orange","violet"] },
            ],
            loggedInFlag: false,
            clickCounter: 0,
        }

        this.inputName = React.createRef();
        this.inputHero = React.createRef();
        this.inputPowersAsArray = React.createRef();
     }

    loginChangeState(flagNewValue) {
        //setState() is a function, receives a JS object that tells React to change its state
        this.setState ({
            loggedInFlag: flagNewValue,
        })
    }    
    
    clickCounterPressed(event) {
        event.preventDefault();
        alert ('clickCounterPressed. Value Before =' + this.state.clickCounter);
        // this.state.clickCounter = this.state.clickCounter +1;
        this.setState ( {clickCounter: (this.state.clickCounter +1) } );
    }
    getUsers() {
        // let htmlArray = this.users.map ( userObj => {
        let htmlArray = this.state.users2.map ( userObj => {
            // map with arrow function MUST return a value
            return <User rowCounter={++this.counter} userName={userObj.userName} heroName={userObj.heroName}  powerS={userObj.powerS} favoritColors={userObj.favoritColors}></User>
        });

        return htmlArray;
    }   // END getUsers()

    CreateNewUser(e) {
        e.preventDefault();
        const newName = this.inputName.current.value;
        const newHero = this.inputHero.current.value;
        let newPowers = this.inputPowersAsArray.current.value.split(",");

        if ( ! Array.isArray (newPowers) ) {
            newPowers = ['N/A'];
        }

        alert (`from  CreateNewUser() // \nname: ${newName} \nhero: ${newHero} \n\npowers: ${JSON.stringify(newPowers)} `);
        
        // clean old values 
        this.inputName.current.value = '';
        this.inputHero.current.value = '';
        this.inputPowersAsArray.current.value = '';

        // 1st push the new info to the user Array
        this.state.users2.unshift ( {
            userName: newName,
            heroName: newHero,
            powerS: newPowers,
            favoritColors: ["lime"]
            });

            // now "tell" react to "render" the relevant components containing this array
            this.setState ( {users2: this.state.users2});
        }

    render() {

        if ( !this.state.loggedInFlag ) {
            return  <div>
                    <button onClick={ () => this.loginChangeState(true) }> Login ....</button>
                    <ToggleButton defaultText="Defaults" showText="Show Info" hideText="Return to Main"></ToggleButton>
                    </div>
        } else {

            return ( <div className="usersList"> 
                    
                    
                        {/* this section handles the "list of Users"  */}
                        <div>
                            <button onClick={() =>this.loginChangeState(false) }>Logout</button>
                            <button onClick={ (e) => {this.clickCounterPressed(e)}}> Click Counter {this.state.clickCounter}</button>
                            <h4>Users List</h4>  
                            
                            { this.getUsers() }
                        </div> 

                        <div>
                            {/* this handles the "form area" */}
                            <fieldset title="create a new user"> 
                                <legend>Create User</legend>
                                {/* ref is a reserved word. */}
                                <input ref={this.inputName} placeholder="user name ..........." type="text"></input>
                                <input ref={this.inputHero} placeholder="preferred hero ......" type="text"></input>
                                <input ref={this.inputPowersAsArray} placeholder="powers.... with comma delimeter" type="text"></input>
                                <button onClick= { (e) => this.CreateNewUser(e) }>Create New</button>
                            </fieldset>
                        </div>
                </div>) ;
        } // END render()
    }
}
