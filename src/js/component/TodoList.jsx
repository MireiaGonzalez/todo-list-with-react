import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton.jsx";

const TodoList = (props) => {
	return (
		<li id={props.index} className={props.classAndColor}>
			<button
				type="button"
				className="btn btn-success"
				value={props.index}
				onClick={props.doneTask}>
				✓
			</button>
			<div className={props.color}>{props.todo}</div>

			{props.deleteButton}
		</li>
	);
};

TodoList.propTypes = {
	index: PropTypes.number,
	todo: PropTypes.string,
	color: PropTypes.string,
	classAndColor: PropTypes.string,
	onClickCheckbox: PropTypes.func,
	doneTask: PropTypes.func,
};

export default TodoList;
