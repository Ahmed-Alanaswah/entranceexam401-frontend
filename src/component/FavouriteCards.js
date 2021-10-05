import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
export class FavouriteCards extends Component {
	render() {
		return this.props.watchFavApiData.map((obj) => {
			return (
				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src={obj.image_url} />
						<Card.Body>
							<Card.Title>{obj.title}</Card.Title>
							<Card.Text>{obj.description}</Card.Text>
							<Card.Text>{obj.toUSD}</Card.Text>
							<Card.Text>id:{obj.id}</Card.Text>
							<Button
								variant="danger"
								onClick={(e) => {
									this.props.deleteFavourite(obj.slug);
								}}
							>
								delete
							</Button>
							<Button
								variant="danger"
								onClick={(e) => {
									this.props.showFormUpdate(
										obj.slug,
										obj.id,
										obj.title,
										obj.toUSD,
										obj.description,
										obj.image_url
									);
								}}
							>
								update
							</Button>
						</Card.Body>
					</Card>
				</Col>
			);
		});
	}
}

export default FavouriteCards;
