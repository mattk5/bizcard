'use strict';

import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MapView from './MapView';
import InformationView from './InformationView';


export default class MainView extends Component {
	render() {
		return (
			<div className="main-container">
				<div className="search-container row justify-content-md-center">
					<div className="col-12 col-md-auto">
						<SearchBar />
					</div>
				</div>
				
				<div className="row">
					<div className="map-container col">
						<MapView />
					</div>
					<div className="information-view col">
						<InformationView/>
					</div>
				</div>
			</div>
		);
	}
}