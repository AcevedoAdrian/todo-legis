import {type Todo as TodoType} from '../../types';

interface Props extends TodoType {
	onToggleCompletedTodo: ({
		id,
		completed,
	}: Pick<TodoType, 'id' | 'completed'>) => void;
	onRemoveTodo: () => void;
}

export const Todo: React.FC<Props> = ({
	id,
	title,
	completed,
	onRemoveTodo,
	onToggleCompletedTodo,
}) => {
	return (
		<div className="view">
			<input
				className="toggle"
				type="checkbox"
				checked={completed}
				id={id}
				onChange={(event): void => {
					onToggleCompletedTodo({
						id,
						completed: event.target.checked,
					});
				}}
			/>
			<label htmlFor={id}>{title}</label>
			<button
				className="destroy"
				onClick={onRemoveTodo}
			/>
		</div>
	);
};
