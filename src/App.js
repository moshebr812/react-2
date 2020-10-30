// FILE:    App.js
import React from 'react';
import './App.css';
import { UsersList } from './users-list/UsersList';


export class App extends React.Component {
  static versionList = "2.0.12";

  render () {
    return <div>
              <label className="uVersion">Ver: {App.versionList}</label>
              <div> 
                ...
                <UsersList></UsersList>
              </div>

           </div>
  } // END render
}