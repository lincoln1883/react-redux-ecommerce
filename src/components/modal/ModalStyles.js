import styled from "styled-components";

export const ModalContainer = styled.div`
	position: fixed;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 20;
	top: 4.5rem;
	cursor: pointer;
`;

export const Modal = styled.div`
	z-index: 50;
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 32px 16px;
	gap: 32px;
	position: absolute;
	width: 325px;
	right: 70px;
`;

export const Text = styled.div`
	width: 165px;
	height: 26px;

	span:nth-of-type(1) {
		font-weight: 700;
		font-size: 16px;
		text-align: right;
		line-height: 25.6px;
		color: var(--textColor);
		font-family: "Raleway", sans-serif;
		margin-right: 5px;
	}
`;

export const PriceText = styled.div`
	width: 165px;
	height: 26px;
	font-weight: 500;
	font-size: 16px;
	line-height: 160%;
`;

export const ModalContent = styled.div`
	width: 293px;
	margin-top: 32px;
`;

export const Content = styled.div`
	width: 299px;
	margin-top: 58px;
	max-height: 20rem;
	overflow-y: scroll;
`;

export const Cart = styled.div`
	display: flex;
	margin-bottom: 1rem;
	width: 100%;
	justify-content: space-between;
`;

export const CartContent = styled.div`
	display: flex;
`;

export const Attributes = styled.div``;

export const Name = styled.div``;

export const QtyButton = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-right: 5px;

	span {
		text-align: center;
		width: 9px;
		height: 26px;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 160%;
		color: var(--textColor);
	}
`;

export const QtyBtn = styled.button`
	cursor: pointer;
	width: 24px;
	height: 24px;
	border: 1px solid var(--textColor);
`;

export const CartImg = styled.button`
	width: 121px;
	height: 190px;
	border: none;
`;

export const CartTotal = styled.div`
	width: 100%;
	display: flex;
	height: 28px;
	align-items: center;
	justify-content: space-between;

	span {
		font-weight: 500;
		font-family: "Roboto";
	}
`;

export const Total = styled.div`
	height: 19px;
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 18px;
`;

export const CartButton = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 43px;
`;

export const Btn = styled.button`
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 16px 32px;
	width: 140px;
	height: 43px;
	background: #ffffff;
	border: 1px solid #1d1f22;

	span {
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 120%;
		width: 89px;
		height: 17px;
		text-transform: uppercase;
	}
`;

export const ModalSpan = styled.span`
	min-width: 42px;
	height: 24px;
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	padding: 0px 5px;
	line-height: 160%;
	text-align: center;
	margin-right: 0.4rem;
	margin-top: 0.3rem;
	margin-bottom: 0.3rem;
	border: 1px solid var(--c-dark);
	font-family: "Source Sans Pro", sans-serif;
	cursor: pointer;
	display: inline-block;

	${({ selected }) => {
		if (selected) {
			return `
    color:#fff;
    background-color:var(--c-dark);
    `;
		}
	}}
`;

export const ModalColorSpan = styled.span`
	min-width: 40px;
	height: 24px;
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	padding: 0px 5px;
	line-height: 160%;
	text-align: center;
	margin-right: 0.4rem;
	margin-left: 0.3rem;
	margin-top: 0.3rem;
	margin-bottom: 0.3rem;
	font-family: "Source Sans Pro", sans-serif;
	cursor: pointer;
	display: inline-block;
	position: relative;

	${({ color }) => {
		if (color) {
			return `
     background-color: ${color};
    `;
		}
	}}

	${({ selected }) => {
		if (selected) {
			return ` 
      &:before{
        content: '';
        border:2px solid #5ECE7B;
        position:absolute;
        background:transparent;
        left:-4px;
        right:-4px;
        top:-4px;
        bottom:-4px;  
      }`;
		}
	}}
`;
