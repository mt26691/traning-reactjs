import React, { Component } from 'react';


export default class DisplayList extends Component {

    render() {
        const numbers = [1, 2, 3, 4, 5];
        const doubled = numbers.map((number) => number * 2);
        const listItems = numbers.map((number) => {
            return <li key={number.toString()}>{number}</li>;
        });

        console.log(doubled);
        return (
            <div>
                <h1>List display</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}