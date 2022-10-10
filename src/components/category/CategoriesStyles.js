import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductCard = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	width: 386px;
	height: 444px;
	border-radius: 15px;
	position: relative;
	&:hover img {
		visibility: visible;
	}
	&:active,
	:hover {
		box-shadow: -1px 8px 17px -5px rgba(0, 0, 0, 0.75);
		-webkit-box-shadow: -1px 8px 17px -5px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: -1px 8px 17px -5px rgba(0, 0, 0, 0.75);
	}
`;

export const ProductElement = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 16px;
	width: 386px;
	height: 444px;

	:hover {
		box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
	}
`;

export const ProductImg = styled.div`
	background-image: ${({ url }) => `url(${url})`};
	filter: ${({ Stock }) => (Stock ? "none" : "opacity(0.4)")};
	width: 354px;
	height: 330px;
	background-repeat: no-repeat;
	background-position: center;
	object-fit: center;
	background-size: contain;
`;

export const NotInStock = styled.div`
	position: absolute;
	top: 60%;
	left: 50%;
	transform: translate(-50%, -50%);
	h4 {
		color: #6c6e78;
		font-size: 24px;
		line-height: 160%;
		width: 300px;
		text-align: center;
	}
`;

export const ProductContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	width: 354px;
	height: 58px;
	margin-top: 24px;
	color: ${({ Stock }) => (Stock ? "var(--textColor)" : "#8d8f9a")};
`;

export const ProductTitle = styled.div`
	width: 354px;
	height: 29px;
	dispaly: flex;
	align-items: center;
	position: relative;

	span {
		font-weight: 300;
		font-style: normal;
		line-height: 160%;
		font-size: 18px;

		margin-right: 10px;
		text-transform: capitalize;
		text-decoration: none;
		position: absolute;
		left: 11px;
	}
`;

export const ProductPrice = styled.div`
	display: flex;
	flex-direction: column;
	width: 200px;
	height: 29px;
	position: relative;

	span {
		font-weight: 500;
		font-size: 18px;
		line-height: 28.8px;
		width: 200px;
		position: absolute;
		left: 11px;
	}
`;

export const CartBtn = styled.img`
	position: absolute;
	width: 40px;
	right: 40px;
	bottom: 80px;
	cursor: pointer;
	visibility: hidden;
	display: ${({ Stock }) => (Stock ? "block" : "none")};
	&:hover,
	:active {
		color: green;
	}
`;
