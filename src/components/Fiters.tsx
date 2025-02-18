import { FILTERS_BUTTONS } from '../consts';
import { FilterValue } from '../types';

interface Props {
	filterSelected: FilterValue;
	onFilterChange: (filter: FilterValue) => void;
}
export const Filters: React.FC<Props> = ({
	filterSelected,
	onFilterChange,
}) => {
	return (
		<ul className='filters'>
			{Object.entries(FILTERS_BUTTONS).map(([filter, { literal, href }]) => {
				const isSelected = filter === filterSelected;
				const className = isSelected ? 'selected' : '';
				return (
					<li key={filter}>
						<a
							href={href}
							className={className}
							onClick={event => {
								event.preventDefault();
								onFilterChange(filter as FilterValue);
							}}>
							{literal}
						</a>
					</li>
				);
			})}
		</ul>
	);
};
