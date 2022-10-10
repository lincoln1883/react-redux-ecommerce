import React, { Component } from "react";
import { ImageList, SelectedImg, SmallImgs } from "./ProductDetailStyle";

class ProductImg extends Component {
	render() {
		const { productImgs, updateSelectedImgs, selectedImg } = this.props;

		return (
			<ImageList>
				<SmallImgs>
					{productImgs &&
						productImgs.map((img, index) => (
							<div key={index} onClick={updateSelectedImgs}>
								<img src={img} alt={img} />
							</div>
						))}
				</SmallImgs>

				{productImgs && !selectedImg ? (
					<SelectedImg src={productImgs[0]} alt={productImgs[0]} />
				) : (
					<SelectedImg src={selectedImg} alt={selectedImg} />
				)}
			</ImageList>
		);
	}
}

export default ProductImg;
