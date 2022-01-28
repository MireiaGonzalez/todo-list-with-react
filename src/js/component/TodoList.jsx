import React from "react";
import PropTypes from "prop-types";

const TodoList = (props) => {
	return (
		<li
			id={props.index}
			className="list-group-item d-flex justify-content-between">
			<div className={props.color}>
				<strong>{props.todo}</strong>
			</div>
			{props.deleteButton}
		</li>
	);
};

TodoList.propTypes = {
	index: PropTypes.number,
	todo: PropTypes.string,
	color: PropTypes.string,
};

export default TodoList;
