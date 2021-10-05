import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
export class WatchCards extends Component {
	render() {
		return this.props.watchApiData.map((obj) => {
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
								variant="primary"
								onClick={(e) => {
									this.props.addToFavourite(obj);
								}}
							>
								add to favourite
							</Button>
						</Card.Body>
					</Card>
				</Col>
			);
		});
	}
}

export default WatchCards;
