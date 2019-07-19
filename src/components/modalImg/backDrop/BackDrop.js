import React from 'react';
import { BackDropWrapper } from './BackDropStyled';

const BackDrop = ({ closeModal }) => {
	return ( 
		<BackDropWrapper  onClick={closeModal}/>
	);
}

export default BackDrop;