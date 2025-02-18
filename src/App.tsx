import { useState } from 'react';
import { Todos } from './components/Todos';
import { type FilterValue, type TodoId, type Todo as TodoType } from './types';
import { TODO_FILTERS } from './consts';
import { Footer } from './components/Footer';

const mockTodos = [
	{
		id: '1',
		title: 'todo 1',
		completed: false,
	},
	{
		id: '2',
		title: 'todo 2',
		completed: true,
	},
	{
		id: '3',
		title: 'todo 3',
		completed: false,
	},
];

const App = (): JSX.Element => {
	const [todos, setTodos] = useState(mockTodos);
	const [filterSelected, setFilterSelected] = useState<FilterValue>(
		TODO_FILTERS.ALL
	);
	const handleRemove = ({ id }: TodoId): void => {
		const newTodos = todos.filter(todo => todo.id !== id);
		setTodos(newTodos);
	};
	const handleCompleted = ({
		id,
		completed,
	}: Pick<TodoType, 'id' | 'completed'>): void => {
		const newTodos = todos.map(todo => {
			if (todo.id === id) {
				return {
					...todo,
					completed,
				};
			}
			return todo;
		});
		setTodos(newTodos);
	};
	const handleFilterChange = (filter: FilterValue): void => {
		setFilterSelected(filter);
	};
	const activeCount = todos.filter(todo => !todo.completed).length;
	const completedCount = todos.length - activeCount;
	return (
		<div className='todoapp'>
			<Todos
				onToggleCompletedTodo={handleCompleted}
				onRemoveTodo={handleRemove}
				todos={todos}
			/>
			<Footer
				activeCount={activeCount}
				competedCount={completedCount}
				filterSelected={filterSelected}
				handleFilterChange={handleFilterChange}
				onClearCompleted={() => {}}
			/>
		</div>
	);
};

export default App;
