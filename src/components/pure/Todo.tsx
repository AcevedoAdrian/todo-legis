import {type Todo as TodoType} from '../../types';

interface Props extends TodoType {
	onRemoveTodo: (id: string) => void;
}

export const Todo: React.FC<Props> = ({id, title, completed, onRemoveTodo}) => {
	return (
		<div className="view">
			<input
				className="toggle"
				type="checkbox"
				checked={completed}
				id={id}
				onChange={(): void => {}}
			/>
			<label htmlFor={id}>{title}</label>
			<button
				className="destroy"
				onChange={(): void => {
					onRemoveTodo(id);
				}}
			/>
		</div>
	);
};
