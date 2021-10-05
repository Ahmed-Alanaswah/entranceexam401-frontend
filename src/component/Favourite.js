import React, { Component } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import FavouriteCards from "./FavouriteCards";
import Form from "./Form";
export class Favourite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			watchFavApiData: [],
			showFavWatchData: false,
			slug: "",
			id: "",
			title: "",
			toUSD: "",
			description: "",

			image_url: "",
			showForm: false,
		};
	}
	componentDidMount = async () => {
		const requet = await axios.get(`http://localhost:8001/watch/favourite`);
		this.setState({
			watchFavApiData: requet.data,
			showFavWatchData: true,
		});
	};

	deleteFavourite = async (slug) => {
		const request = await axios.delete(
			`http://localhost:8001/watch/favourite/${slug}`
		);
		this.setState({
			watchFavApiData: request.data,
			showFavWatchData: true,
		});
	};
	showFormUpdate = async (slug, id, title, toUSD, description, image_url) => {
		this.setState({
			slug: slug,
			id: id,
			title: title,
			toUSD: toUSD,
			description: description,
			image_url: image_url,
			showForm: true,
		});
	};

	updateData = async (e) => {
		e.preventDefault();

		const update = {
			id: this.state.id,
			title: this.state.title,
			toUSD: this.state.toUSD,
			description: this.state.description,
			image_url: this.state.image_url,
		};
		console.log(update);
		const request = await axios.put(
			`http://localhost:8001/watch/favourite/${this.state.slug}`,
			update
		);
		this.setState({
			watchFavApiData: request.data,
			showFavWatchData: true,
		});
	};
	updateID = (e) => {
		this.setState({
			id: e.target.value,
		});
	};
	updateTitle = (e) => {
		this.setState({
			title: e.target.value,
		});
	};
	updateDescription = (e) => {
		this.setState({
			description: e.target.value,
		});
	};
	updateUsd = (e) => {
		this.setState({
			toUSD: e.target.value,
		});
	};
	updateImage = (e) => {
		this.setState({
			image_url: e.target.value,
		});
	};
	handleClose = () => {
		this.setState({
			showForm: false,
		});
	};
	render() {
		return (
			<Row>
				{this.state.showForm && (
					<Form
						handleClose={this.handleClose}
						showForm={this.state.showForm}
						id={this.state.id}
						title={this.state.title}
						toUSD={this.state.toUSD}
						description={this.state.description}
						image_url={this.state.image_url}
						updateData={this.updateData}
						updateID={this.updateID}
						updateTitle={this.updateTitle}
						updateDescription={this.updateDescription}
						updateUsd={this.updateUsd}
						updateImage={this.updateImage}
					/>
				)}
				{this.state.showFavWatchData && (
					<FavouriteCards
						watchFavApiData={this.state.watchFavApiData}
						deleteFavourite={this.deleteFavourite}
						showFormUpdate={this.showFormUpdate}
					/>
				)}
			</Row>
		);
	}
}

export default Favourite;
