import { useContext } from 'react';
import HistoryContext from '../context/history-context';
import './CalcHistory.css';

const CalcHistory = () => {
	const historyCtx = useContext(HistoryContext);

	const listItems = historyCtx.list
		.map((item) => (
			<li id={item.id} key={item.id} className='history-entry'>
				{item.value}
			</li>
		))
		.reverse();

	const paragraph = 'The history is empty';

	const historyBoxClasses = historyCtx.isOpen
		? 'history-box show-history-box'
		: 'history-box';

	return (
		<div className={historyBoxClasses}>
			<button
				className='close-history'
				onClick={historyCtx.closeHistoryHandler}
			>
				<span className='material-symbols-outlined close'>close</span>
			</button>
			<button
				className='clear-history'
				onClick={historyCtx.clearHistoryHandler}
			>
				Clear history
			</button>
			<ul className='history-list'>
				{listItems.length >= 1 ? listItems : paragraph}
			</ul>
		</div>
	);
};

export default CalcHistory;
