import { useContext } from 'react';
import CalcContext from '../context/calc-context';
import HistoryContext from '../context/history-context';

import './Keyboard.css';

const operators = ['+', '-', '*', '/', '.'];

const Keyboard: React.FC = () => {
	const calcCtx = useContext(CalcContext);
	const historyCtx = useContext(HistoryContext);

	const equalsHandler = () => {
		if (operators.includes(calcCtx.calcValue.slice(-1))) {
			historyCtx.addHistoryItemHandler(
				{
					value: calcCtx.calcValue.slice(0, -1),
					id: Math.random().toString(),
				},
				calcCtx.resultValue
			);

			return;
		}

		historyCtx.addHistoryItemHandler(
			{
				value: calcCtx.calcValue,
				id: Math.random().toString(),
			},
			calcCtx.resultValue
		);
		calcCtx.onEquals();
	};

	const expHandler = () => {
		if (+calcCtx.calcValue === Infinity) {
			return;
		}

		if (operators.includes(calcCtx.calcValue.slice(-1))) {
			historyCtx.addHistoryItemHandler(
				{
					value: calcCtx.calcValue.slice(0, -1) + '^2',
					id: Math.random().toString(),
				},
				calcCtx.resultValue
			);

			return;
		}

		historyCtx.addHistoryItemHandler(
			{
				value: calcCtx.calcValue + '^2',
				id: Math.random().toString(),
			},
			calcCtx.resultValue
		);

		calcCtx.onExp();
	};

	const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		const value = event.currentTarget.value;
		calcCtx.onCalc(value);
	};

	return (
		<div className='keyboard-box'>
			<button className='number' value='7' onClick={clickHandler}>
				7
			</button>
			<button className='number' value='8' onClick={clickHandler}>
				8
			</button>
			<button className='number' value='9' onClick={clickHandler}>
				9
			</button>
			<button className='delete' onClick={calcCtx.onDelete}>
				DEL
			</button>
			<button className='number' value='4' onClick={clickHandler}>
				4
			</button>
			<button className='number' value='5' onClick={clickHandler}>
				5
			</button>
			<button className='number' value='6' onClick={clickHandler}>
				6
			</button>
			<button className='operator' value='+' onClick={clickHandler}>
				+
			</button>
			<button className='number' value='1' onClick={clickHandler}>
				1
			</button>
			<button className='number' value='2' onClick={clickHandler}>
				2
			</button>
			<button className='number' value='3' onClick={clickHandler}>
				3
			</button>
			<button className='operator' value='-' onClick={clickHandler}>
				-
			</button>
			<button className='operator' value='.' onClick={clickHandler}>
				.
			</button>
			<button className='number' value='0' onClick={clickHandler}>
				0
			</button>
			<button className='operator' value='/' onClick={clickHandler}>
				/
			</button>
			<button className='operator' value='*' onClick={clickHandler}>
				*
			</button>
			<button className='clear' onClick={calcCtx.onClear}>
				C
			</button>
			<button className='operator' value='^' onClick={expHandler}>
				^2
			</button>
			<button className='equals' value='=' onClick={equalsHandler}>
				=
			</button>
		</div>
	);
};

export default Keyboard;
