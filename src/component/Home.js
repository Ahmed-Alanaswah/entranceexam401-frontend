import axios from "axios";
import React, { Component } from "react";
import { Row } from "react-bootstrap";
import WatchCards from "./WatchCards";
export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			watchApiData: [],
			showWatchData: false,
		};
	}

	componentDidMount = async () => {
		const requet = await axios.get(`http://localhost:8001/watch`);
		this.setState({
			watchApiData: requet.data,
			showWatchData: true,
		});
	};

	addToFavourite = async (obj) => {
		axios.post(`http://localhost:8001/watch/favourite`, obj);
		console.log(obj);
	};

	render() {
		return (
			<Row>
				{this.state.showWatchData && (
					<WatchCards
						watchApiData={this.state.watchApiData}
						addToFavourite={this.addToFavourite}
					/>
				)}
			</Row>
		);
	}
}

export default Home;
