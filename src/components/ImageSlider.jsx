import React, { Component } from "react";
import leftArrow from "../assets/images/leftArrow.png";
import rightArrow from "../assets/images/rightArrow.png";
import {
	CartImage,
	Left,
	LeftArrow,
	Right,
	RightArrow,
} from "../pages/cartPage/CartPageStyles";

class ImageSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
		};
	}

	sliderHandler = (number) => {
		if (number < 0) {
			return this.props.gallery.length - 1;
		}
		if (number > this.props.gallery.length - 1) {
			return 0;
		}

		return number;
	};

	buttonRightHandler = () => {
		let rightSlider = this.state.index + 1;
		this.setState({ index: this.sliderHandler(rightSlider) });
	};

	buttonLeftHandler = () => {
		let leftSlider = this.state.index - 1;
		this.setState({ index: this.sliderHandler(leftSlider) });
	};

	render() {
		const { gallery } = this.props;
		let controlIcon = gallery.length === 1 && "controlIcon";

		return (
			<CartImage url={gallery[this.state.index]}>
				<Right onClick={this.buttonRightHandler} className={controlIcon}>
					<RightArrow src={rightArrow} alt="right arrow" />
				</Right>
				<Left onClick={this.buttonLeftHandler} className={controlIcon}>
					<LeftArrow src={leftArrow} alt="left arrow" />
				</Left>
			</CartImage>
		);
	}
}

export default ImageSlider;
