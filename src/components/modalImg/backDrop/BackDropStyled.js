import styled from 'styled-components';

export const BackDropWrapper = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 100;
	/*visibility: ${props => props.show ? "visible" : "hidden"};*/
	/* left: ${props => props.show ? "0" : "-1%"}; */
	animation: fadeIn 0.5s ease-out both;
`;
