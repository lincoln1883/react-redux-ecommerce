import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavContainer = styled.nav`
	position: absolute;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 100vw;
	height: 80px;
	margin: 0 20px;
	padding: 10px 60px;
	width: 100%;
	z-index: 200;
`;

export const Navigation = styled.div`
	display: flex;
	justify-content: space-between;
	width: 234px;
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	cursor: pointer;
	font-size: 16px;
	text-transform: uppercase;
	font-weight: 600;
	font-style: normal;
	height: 20px;
	font-family: "Raleway", sans-serif;
	line-height: 120%;
	display: flex;
	align-items: center;
	text-align: center;
	color: #1d1f22;
	padding: 28px 0px 32px 0px;
	&.active {
		color: var(--c-primary);
		border-bottom: 2px solid var(--c-primary);
	}
`;

export const NavIcon = styled.img`
	object-fit: contain;
	width: 50px;
`;

export const NavActions = styled.div`
	position: relative;
	width: 114px;
	display: flex;
	align-items: center;
	height: 40px;
	justify-content: space-between;
`;

export const CurrencyButton = styled.div`
	width: 38px;
	height: 29px;
	cursor: pointer;
	span {
		font-size: 1.7rem;
		margin-right: 8px;
	}
`;

export const ArrowIcon = styled.img`
	object-fit: contain;
	width: 0.9rem;
	height: 0.9rem;
	cursor: pointer;
	place-items: center;

	&:active {
		border: 1px solid var(--darkColor);
	}
`;

export const CurrencyDisplay = styled.div`
	position: absolute;
	right: 0;
	width: 137px;
	height: 294px;
	top: 65px;
	background: var(--c-white);
	filter: drop-shadow(0.6rem 0.6rem 1rem rgba(120, 120, 180, 0.3));
`;

export const CurrencyContent = styled.div`
	margin-bottom: 1rem;
	width: 137px;
	padding: 0.5rem 1.5rem;
	cursor: pointer;
	z-index: 500;
	span {
		font-size: 1.6rem;
		margin-right: 8px;
	}

	&:hover {
		background: #cdfcdf;
	}
`;

export const CartButton = styled.div`
	position: relative;
	width: 30px;
`;

export const CartIcon = styled.img`
	object-fit: contain;
	cursor: pointer;
`;

export const CartBadge = styled.span`
	position: absolute;
	top: -10px;
	right: -15px;
	background-color: var(--darkColor);
	color: #fff;
	font-size: 0.8rem;
	padding: 0.25rem 0.5rem;
	border-radius: 50%;
	cursor: pointer;
`;
