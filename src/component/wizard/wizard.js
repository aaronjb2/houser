import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
        this.updateUserInputName = this.updateUserInputName.bind(this);
    }

    updateUserInputName(val){
        this.setState({
            name:val
        })
    }

    updateUserInputAddress(val){
        this.setState({
            address:val
        })
    }

    updateUserInputCity(val){
        this.setState({
            city:val
        })
    }

    updateUserInputState(val){
        this.setState({
            state:val
        })
    }

    updateUserInputZipcode(val){
        this.setState({
            zipcode:val
        })
    }

    resetValues(){
        this.setState({
            name:'',
            address:'',
            city:'',
            state:'',
            zipcode:''
        })
    }

    addHouse(){
        axios.post('/api/houses',{name:this.state.name,address:this.state.address,city:this.state.city,state:this.state.state,zipcode:this.state.zipcode});
    }

    render(){
        return (
            <div>
            <div>You're a Wizard Harry</div>
            <input value = {this.state.name} onChange = {e=>this.updateUserInputName(e.target.value)}/>
            <input value = {this.state.address} onChange = {e=>this.updateUserInputAddress(e.target.value)}/>
            <input value = {this.state.city} onChange = {e=>this.updateUserInputCity(e.target.value)}/>
            <input value = {this.state.state} onChange = {e=>this.updateUserInputState(e.target.value)}/>
            <input value = {this.state.zipcode} onChange = {e=>this.updateUserInputZipcode(e.target.value)}/>
            <div><button onClick = {e=>this.resetValues()}>Cancel</button><button onClick = {e=>this.addHouse()}>Add</button></div>
            <Link to='/' className='links'>Tired of Hogwartz?</Link>
            </div>
        )
    }

}

export default Wizard;