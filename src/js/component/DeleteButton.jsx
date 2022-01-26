import React from "react";
import PropTypes from "prop-types";

const DeleteButton = (props) => {
	return (
		<div className="ms-auto">
			<img
				src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303151.png?token=exp=1643061283~hmac=44f867b5eafa916d0ce750a778ca3938"
				alt="delete"
				className="trash"
				onClick={props.deleteTodo}
			/>
		</div>
	);
};

DeleteButton.propTypes = {
	deleteTodo: PropTypes.func,
};

export default DeleteButton;
