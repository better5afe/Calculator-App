import { useState } from 'react';
import HistoryContext from './history-context';

interface HistoryContextPorps {
	children: React.ReactNode;
}

interface HistoryItem {
	value: string;
	id: string;
}

export const HistoryContextProvider: React.FC<HistoryContextPorps> = ({
	children,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [historyList, setHistoryList] = useState<HistoryItem[]>([]);

	const openHandler = () => {
		if (isOpen) {
			setIsOpen(false);
			return;
		}

		setIsOpen(true);
	};

	const closeHandler = () => {
		setIsOpen(false);
	};

	const clearHandler = () => {
		setHistoryList([]);
	};

	const addHandler = (item: HistoryItem, result: string) => {
		if (historyList.length > 10) {
			const updatedItems = historyList.slice(1);

			setHistoryList([...updatedItems, item]);
			return;
		}

		setHistoryList((previousState) => {
			return [...previousState, item];
		});
	};

	return (
		<HistoryContext.Provider
			value={{
				list: historyList,
				isOpen: isOpen,
				openHistoryHandler: openHandler,
				closeHistoryHandler: closeHandler,
				clearHistoryHandler: clearHandler,
				addHistoryItemHandler: addHandler,
			}}
		>
			{children}
		</HistoryContext.Provider>
	);
};
