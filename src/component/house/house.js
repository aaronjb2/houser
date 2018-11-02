import React, { Component } from 'react';

function House(props) {
    return(
        <div>
        <div>Name: {props.myValue.name} Address: {props.myValue.address} City : {props.myValue.city} State: {props.myValue.state} Zipcode: {props.myValue.zipcode} <button onClick = {()=>props.deleteFunction(props.myValue.name)}>Delete</button></div>
        </div>
    )
}

export default House;