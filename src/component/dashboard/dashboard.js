import React, { Component } from 'react';
import House from '../house/house.js';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
constructor(){
    super();
    this.state = {
        listOfHouses: []
    }
}

displayHouses(){
    return this.state.listOfHouses.map((element,index,arr)=>{
        console.log(element)
        return (
            <House myValue = {element} deleteFunction = {this.deleteHouse}/>
        )
    })
}

getHouses() {
    let promise = axios.get('/api/houses');
    promise.then(res=> {
        console.log('res.data is',res.data);
        this.setState({
            listOfHouses: res.data
        })
    })
}

deleteHouse(name) {
    axios.delete(`/api/houses/${name}`);
}



    render(){
        return (
            <div>
            <div>You're a Dashboard Harry</div>
            <Link to='/wizard' className='links'>Wanna Learn Magic?</Link>
            <div><button onClick = {e=>this.getHouses()}>refresh houses</button></div>
            {this.displayHouses()}
            </div>
        )
    }

}

export default Dashboard;