import React from "react";
import PropTypes from "prop-types";

const TodoList = (props) => {
	return (
		<li
			id={props.index}
			className="list-group-item d-flex justify-content-between">
			{props.todo}
			{props.deleteButton}
		</li>
	);
};

TodoList.propTypes = {
	index: PropTypes.number,
	todo: PropTypes.string,
};

export default TodoList;
