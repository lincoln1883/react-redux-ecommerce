import styled from "styled-components";

export const ImageList = styled.div`
	width: 100%;
	display: flex;
	margin: 50px;
`;

export const SmallImgs = styled.div`
	width: 79px;
	height: 80px;
	cursor: pointer;
`;

export const SelectedImg = styled.img`
	width: 610px;
	height: 511px;
	margin-left: 25.42px;
	object-fit: contain;
`;

export const AttributeContainer = styled.div`
	.notification {
		color: #de160b;
		margin-bottom: 10px;
	}
`;

export const Title = styled.div`
	color: var(--c-text);
	margin-bottom: 2.5rem;
`;

export const Brand = styled.div`
	width: 292px;
	height: 27px;
	font-style: normal;
	font-weight: 600;
	font-size: 30px;
	line-height: 27px;
	display: flex;
	align-items: center;
`;

export const Name = styled.div`
	width: 292px;
	height: 27px;
	font-style: normal;
	display: flex;
	align-items: center;
	font-weight: 400;
	font-size: 30px;
	margin-top: 16px;
`;

export const ProductPrice = styled.div`
	height: 56px;
`;

export const Label = styled.div`
	font-size: 18px;
	line-height: 18px;
	font-weight: 700;
	text-transform: uppercase;
	font-family: "Roboto Condensed", sans-serif;
`;

export const Price = styled.div`
	font-weight: 700;
	font-size: 24px;
	line-height: 18px;
	margin-top: 10px;
`;

export const Button = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px 32px;
	width: 292px;
	height: 52px;
	background: #5ece7b;
	color: #fff;
	font-weight: 600;
	font-style: normal;
	text-transform: uppercase;
	border: none;
	cursor: pointer;
	margin: 2rem 0;

	&:disabled {
		filter: opacity(0.6);
	}
	&:active {
		transform: scale(0.98);
	}
`;

export const Description = styled.div`
	width: 292px;
	height: 103px;
	font-weight: 400;
	font-size: 16px;
	line-height: 159.96%;
	color: var(--textColor);
	font-family: "Roboto", sans-serif;

	button {
		border: none;
		cursor: pointer;
		padding: 1rem;
		border-radius: 5px;
		font-size: 17px;
		display: inline-block;
		margin: 10px 0;

		&:hover {
			background: #444;
			color: #fff;
		}
	}
`;

export const ProductAttr = styled.div``;

export const List = styled.div`
	display: flex;
	margin: 1.2rem 0;
`;

export const SpanText = styled.span`
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
`;

export const SpanColor = styled.span`
	background-color: ${({ color }) => `${color}`};
	width: 32px;
	height: 32px;
	border: 1px solid var(--c-dark);
	display: inline-block;
	margin-right: 1rem;
	cursor: pointer;
`;

export const InputLabel = styled.label``;

export const Input = styled.input`
	&:checked + ${InputLabel} ${SpanText} {
		color: #fff;
		background: var(--c-dark);
	}
	&:checked + ${InputLabel} ${SpanColor} {
		border: 2px solid var(--c-primary);
		img {
			opacity: 1;
		}
	}

	display: none;
`;
