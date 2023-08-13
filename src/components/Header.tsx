import { useContext } from 'react';
import ThemeContext from '../context/theme-context';
import HistoryContext from '../context/history-context';

import './Header.css';

const Header = () => {
	const historyCtx = useContext(HistoryContext);
	const themeCtx = useContext(ThemeContext);
	const currentTheme = themeCtx.theme;
	let translateX = '0';

	if (currentTheme === 2) {
		translateX = '80%';
	} else if (currentTheme === 3) {
		translateX = '170%';
	} else {
		translateX = '0';
	}

	return (
		<div className='header-box'>
			<div className='info-box'>
				<h1>calc</h1>
				<button
					className='open-history'
					onClick={historyCtx.openHistoryHandler}
				>
					<span className='material-symbols-outlined'>history</span>
				</button>
			</div>
			<div className='theme-box'>
				<div className='theme-value'>
					<p>1</p>
					<p>2</p>
					<p>3</p>
				</div>
				<div className='toggler-box'>
					<p>THEME</p>
					<div className='toggler-bg' onClick={themeCtx.onChangeTheme}>
						<span
							style={{ transform: `translateX(${translateX})` }}
							className='toggler'
						></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
