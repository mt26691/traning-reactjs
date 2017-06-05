import React, { Component } from 'react';


export default class ConditionRenderin extends Component {

    displayGuest = false;
    render() {
        return (
            <div>
                <h1>Condition rendering</h1>
                {
                    this.displayGuest ? (<h1>Guest</h1>) : (<h1>Not Guest</h1>)
                }
            </div>
        );
    }
}