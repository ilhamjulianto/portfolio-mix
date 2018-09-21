import React, { Component } from 'react';
import './App.css';

export default class Counter extends Component {
	

	state = {
		val : 0
	}

	tambah = () =>{
		this.setState({
			val: this.state.val + 1
		})
	}

	kurang = () =>{
		this.setState({
			val: this.state.val - 1
		})
	}

	kuadrat = () =>{
		this.setState({
			val: this.state.val**2
		})
	}

	reset = () =>{
		this.setState({
			val: 0
		})
	}

	render() {
		return(
			<div>
				<div class="container-fluid py-5 bg-dark deg-45 text-center gradient">
                <div class="container mb-5 py-2 rotate">
                    <h1 class="text-light font-wasted shadow-text display-4">Counter App</h1>
                    <p class="rotate" style={{fontFamily: 'Lobster 1.4', fontSize: '1.1rem', lineHeight: '0.5px', marginRight: '5%'}}>Muhammad Ilham Julianto</p>
                </div>
				</div>
				<div class="bg-light text-dark shadow w-50 kotak">
				    <div class="head">
				        
				    </div>
				    <div class="container text-center my-4">
				        <h1 class="display-1 py-3" id="hasil">{this.state.val}</h1>
				        <div class="row pb-5 w-75 m-auto">
				            <div class="col-md-4 col-sm-12 col-xs-12 text-center py-3">
				                <button class="btn btn-outline-success m-auto" onClick={this.tambah}>Tambah</button>
				            </div>
				            <div class="col-md-4 col-sm-12 col-xs-12 text-center py-3">
				                <button class="btn btn-outline-secondary m-auto" onClick={this.reset}>Reset</button>
				            </div>
				            <div class="col-md-4 col-sm-12 col-xs-12 text-center py-3">
				                <button class="btn btn-outline-danger m-auto" onClick={this.kurang}>kurang</button>
				            </div>
				            <div class="col-md-12 col-sm-12 col-xs-12 text-center py-3">
				                <button class="btn btn-outline-dark w-100" onClick={this.kuadrat}>Kuadrat</button>
				            </div>
				        </div>
				    </div>
				</div>
			</div>
		)
	}
}