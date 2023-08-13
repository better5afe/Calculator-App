import Header from './components/Header';
import Display from './components/Display';
import Keyboard from './components/Keyboard';
import CalcHistory from './components/CalcHistory';
import { CalcContextProvider } from './context/CalcContextProvider';
import { ThemeContextProvider } from './context/ThemeContextProvider';
import { HistoryContextProvider } from './context/HistoryContextProvider';

const App = () => {
	return (
		<div className='calc-box'>
			<HistoryContextProvider>
				<ThemeContextProvider>
					<Header />
				</ThemeContextProvider>
				<CalcContextProvider>
					<CalcHistory />
					<Display />
					<Keyboard />
				</CalcContextProvider>
			</HistoryContextProvider>
		</div>
	);
};

export default App;
