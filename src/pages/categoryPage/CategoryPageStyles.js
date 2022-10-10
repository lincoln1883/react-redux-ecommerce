import styled from "styled-components";

export const CategoryTitle = styled.h2`
	text-transform: uppercase;
	width: 299px;
	height: 68px;
	color: var(--c-text);
	font-size: 42px;
	line-height: 160%;
	font-weight: 400;
	font-style: normal;
	display: flex;
`;

export const CategoryList = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: 103px;
	margin-bottom: 50px;
	gap: 20px;
`;

export const Loading = styled.p`
	width: 1440px;
	height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
`;

export const Error = styled.p`
	width: 1440px;
	height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
`;
