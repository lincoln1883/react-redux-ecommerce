import styled from "styled-components";

export const CartElement = styled.div`
	display: flex;
	justify-content: space-between;
	width: calc(100vw - 224px);
`;

export const Span = styled.span`
	min-width: 63px;
	padding: 0px 5px;
	height: 45px;
	cursor: pointer;
	display: inline-block;
	text-align: center;
	line-height: 45px;
	margin-right: 1rem;
	border: 1px solid var(--c-dark);
	font-family: "Source Sans Pro", sans-serif;

	${({ selected }) => {
		if (selected) {
			return `
    color:#fff;
    background-color:var(--c-dark);
    `;
		}
	}}
`;

export const SpanColor = styled.span`
	min-width: 63px;
	padding: 0px 5px;
	height: 45px;
	cursor: pointer;
	display: inline-block;
	text-align: center;
	line-height: 45px;
	margin-right: 1rem;
	font-family: "Source Sans Pro", sans-serif;
	position: relative;

	${({ color }) => {
		if (color) {
			return `
      background-color:${color};
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
      }
    `;
		}
	}}
`;

export const CartButton = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	span {
		text-align: center;
	}
`;

export const CartBtn = styled.button`
	width: 30px;
	height: 30px;
	border: 1px solid #1d1f22;
	background: transparent;
	cursor: pointer;
`;

export const Tax = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 28px;
	height: 28px;
	color: var(--textColor) span {
		font-weight: 700;
	}
`;

export const Quantity = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 28px;
	height: 28px;
	color: var(--textColor);
	margin-top: 8px;
	span {
		font-weight: 700;
	}
`;

export const CartImage = styled.div`
	width: 200px;
	height: 288px;
	position: relative;
	background-image: ${({ url }) => `url(${url})`};
	background-repeat: no-repeat;
	background-position: center;
	object-fit: center;
	background-size: contain;
`;

export const CartTotal = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 16px;
	width: 250px;
	height: 159px;
	margin: 2rem 0;
`;

export const CartTitle = styled.span`
	width: 84px;
	height: 40px;
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	line-height: 40px;
	text-transform: uppercase;
	color: #1d1f22;
	align-item: center;
`;

export const OrderButton = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 16px 32px;
	width: 279px;
	height: 43px;
	background: var(--c-primary);
	border: none;
	cursor: pointer;

	&:active {
		transform: scale(0.98);
	}

	span {
		width: 48px;
		height: 17px;
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 120%;
		display: flex;
		align-items: center;
		text-align: center;
		text-transform: uppercase;
		color: var(--c-white);
	}
`;

export const LeftArrow = styled.img`
	object-fit: contain;
	height: 11.24px;
	width: 10.63px;
	transform: translateX(130%);
	margin: 7px -6px;
`;

export const RightArrow = styled.img`
	object-fit: contain;
	height: 11.24px;
	width: 10.63px;
	transform: translateX(130%);
	margin: 7px -6px;
`;

export const Left = styled.div`
	background: rgba(0, 0, 0, 0.73);
	border: 1.5px solid #ffffff;
	transform: matrix(1, 0, 0, -1, 0, 0);
	height: 30px;
	width: 30px;
	cursor: pointer;
	position: absolute;
	top: 248px;
	left: 128px;
	bottom: 16px;
`;

export const Right = styled.div`
	background: rgba(0, 0, 0, 0.73);
	border: 1.5px solid #ffffff;
	transform: matrix(1, 0, 0, -1, 0, 0);
	height: 30px;
	width: 30px;
	cursor: pointer;
	position: absolute;
	top: 248px;
	left: 160px;
	bottom: 16px;
`;
