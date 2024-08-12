import { FilterValue } from '../types';
import { Filters } from './Fiters';
interface Props {
	activeCount: number;
	competedCount: number;
	filterSelected: FilterValue;
	handleFilterChange: (filter: FilterValue) => void;
	onClearCompleted: () => void;
}
export const Footer: React.FC<Props> = ({
	activeCount = 0,
	completedCount = 0,
	filterSelected,
	handleFilterChange,
	onClearCompleted,
}) => {
	return (
		<footer className='footer'>
			<span className='todo-count'>
				<strong>{activeCount}</strong> Tareas Pendientes
			</span>
			<Filters
				filterSelected={filterSelected}
				onFilterChange={() => handleFilterChange}
			/>
		</footer>
	);
};
