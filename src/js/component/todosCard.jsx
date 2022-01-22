import React from "react";
import PropTypes from "prop-types";
import propTypes from "prop-types";

const TodosCard = (props) => {
	return (
		<div id="card" className="card">
			<div
				id="card-header"
				className="card-header container-fluid d-flex flex-row justify-content-center align-items-center">
				<input
					id="input-todo"
					type="text"
					className="form-control"
					onChange={props.change}
					onKeyPress={props.keypress}
					value={props.inputValue}
				/>
				<select
					defaultValue={"default"}
					id="select-type"
					className="form-select"
					aria-label="Default select example">
					<option
						id="selected-option"
						value="default"
						disabled
						hidden>
						Select Type
					</option>
					<option id="urgent-select" value="1">
						Urgent
					</option>
					<option id="important-select" value="2">
						Important
					</option>
					<option id="standard-select" value="3">
						Standard
					</option>
				</select>
			</div>
			<div className="card-body d-flex justify-content-center align-items-center">
				<span id="empty-card" className={props.visibility}>
					EMPTY! ADD SOME TODOS
				</span>
			</div>
			<div id="todos-print">
				<ul class="list-group list-group-flush">{props.todos}</ul>
			</div>
		</div>
	);
};

TodosCard.propTypes = {
	todo: propTypes.string,
	visibility: propTypes.string,
	change: propTypes.func,
	todos: propTypes.string,
	keypress: propTypes.func,
	inputValue: propTypes.string,
};

export default TodosCard;
