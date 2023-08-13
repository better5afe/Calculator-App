import { useContext } from 'react';
import CalcContext from '../context/calc-context';

import './Display.css';

const Display = () => {
	const ctx = useContext(CalcContext);

	const calcValue = ctx.calcValue;
	const errorValue = ctx.errorValue;

	let fontSize = '3rem';

	if (errorValue) {
		fontSize = '2.5rem';
	}

	if (calcValue.length > 15) {
		fontSize = '2rem';
	}

	if (calcValue.length > 24) {
		fontSize = '1.5rem';
	}

	return (
		<div className='display-box'>
			<p style={{ fontSize: fontSize }} className='calc-display'>
				{calcValue && !errorValue && calcValue}
				{errorValue && errorValue}
			</p>
		</div>
	);
};

export default Display;
