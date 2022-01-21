import React, { useState } from "react";
import PropTypes from "prop-types";
import propTypes from "prop-types";

const TodosCard = (props) => {
	return (
		<div id="card" className="card">
			<div
				id="card-header"
				className="card-header container-fluid d-flex flex-row justify-content-center align-items-center">
				<input id="input-todo" type="text" className="form-control " />
				<select
					id="select-type"
					class="form-select"
					aria-label="Default select example">
					<option
						id="selected-option"
						value=""
						disabled
						selected
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
		</div>
	);
};

TodosCard.PropTypes = {
	todo: propTypes.string,
	visibility: propTypes.string,
};

export default TodosCard;
