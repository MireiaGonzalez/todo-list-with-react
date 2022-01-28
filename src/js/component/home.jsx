import React, { useState } from "react";
import TodoList from "./TodoList.jsx";
import DeleteButton from "./DeleteButton.jsx";
import EmptyTodoList from "./EmptyTodoList.jsx";

const Home = () => {
	const [urgentTodos, setUrgentTodos] = useState([]);
	const [importantTodos, setImportantTodos] = useState([]);
	const [standardTodos, setStandardTodos] = useState([]);
	const [finishedTodos, setFinishedTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");
	const [noInput, setNoInput] = useState("");
	const [selectedValue, setSelectedValue] = useState("");

	const handleClick = () => {
		if (newTodo === "") {
			setNoInput("not-selected");
		} else if (newTodo !== "") {
			setNoInput("");
			if (selectedValue === "") {
				setSelectedValue("not-selected");
			} else {
				if (selectedValue === "urgent") {
					const newUrgentTodos = [...urgentTodos, newTodo];
					setUrgentTodos(newUrgentTodos);
					setNewTodo("");
				} else if (selectedValue === "important") {
					const newImportantTodos = [...importantTodos, newTodo];
					setImportantTodos(newImportantTodos);
					setNewTodo("");
				} else if (selectedValue === "standard") {
					const newStandardTodos = [...standardTodos, newTodo];
					setStandardTodos(newStandardTodos);
					setNewTodo("");
				}
			}
		}
	};

	const deleteTodoUrgent = (e) => {
		const newUrgentTodos = [...urgentTodos];
		newUrgentTodos.splice(e.target.id, 1);
		setUrgentTodos(newUrgentTodos);
	};
	const deleteTodoImportant = (e) => {
		const newImportantTodos = [...importantTodos];
		newImportantTodos.splice(e.target.id, 1);
		setImportantTodos(newImportantTodos);
	};
	const deleteTodoStandard = (e) => {
		const newStandardTodos = [...standardTodos];
		newStandardTodos.splice(e.target.id, 1);
		setStandardTodos(newStandardTodos);
	};

	const handleDoneTasksStandard = (e) => {
		const newStandardTodos = [...standardTodos];
		const doneTask = [...finishedTodos, standardTodos[e.target.value]];
		newStandardTodos.splice(e.target.value, 1);
		setFinishedTodos(doneTask);
		setStandardTodos(newStandardTodos);
	};
	const handleDoneTasksImportant = (e) => {
		const newImportantTodos = [...importantTodos];
		const doneTask = [...finishedTodos, importantTodos[e.target.value]];
		newImportantTodos.splice(e.target.value, 1);
		setFinishedTodos(doneTask);
		setImportantTodos(newImportantTodos);
	};
	const handleDoneTasksUrgent = (e) => {
		const newUrgentTodos = [...urgentTodos];
		const doneTask = [...finishedTodos, urgentTodos[e.target.value]];
		newUrgentTodos.splice(e.target.value, 1);
		setFinishedTodos(doneTask);
		setUrgentTodos(newUrgentTodos);
	};

	return (
		<div className="container d-flex flex-column justify-content-center align-items-center">
			<h1 id="header">To Do List</h1>
			<div className="container-fluid">
				<div id="card" className="card">
					<div
						id="card-header"
						className="card-header container-fluid d-flex flex-row justify-content-center align-items-center">
						<input
							id="input-todo"
							type="text"
							className={"form-control " + noInput}
							onChange={(e) => setNewTodo(e.target.value)}
							value={newTodo}
						/>
						<select
							defaultValue="not-selected"
							id="select-type"
							className={"form-select " + selectedValue}
							aria-label="Default select example"
							onChange={(e) => setSelectedValue(e.target.value)}>
							<option
								id="selected-option"
								value="not-selected"
								disabled>
								Select Type
							</option>
							<option id="urgent-select" value="urgent">
								Urgent
							</option>
							<option id="important-select" value="important">
								Important
							</option>
							<option id="standard-select" value="standard">
								Standard
							</option>
						</select>
						<button
							id="add-todo-button"
							type="button"
							className="btn btn-primary"
							onClick={handleClick}>
							Add
						</button>
					</div>

					{urgentTodos.length > 0 ||
					importantTodos.length > 0 ||
					standardTodos.length > 0 ||
					finishedTodos.length > 0 ? (
						<ul className="list-group list-group-flush">
							{urgentTodos.map((todo, index) => (
								<TodoList
									todo={todo}
									index={index}
									key={index}
									classAndColor="list-group-item d-flex justify-content-between align-items-center urgent"
									doneTask={handleDoneTasksUrgent}
									deleteButton={
										<DeleteButton
											idDeleteNum={index}
											removeTodo={deleteTodoUrgent}
										/>
									}
								/>
							))}
							{importantTodos.map((todo, index) => (
								<TodoList
									todo={todo}
									index={index}
									key={index}
									classAndColor="list-group-item d-flex justify-content-between align-items-center important"
									doneTask={handleDoneTasksImportant}
									deleteButton={
										<DeleteButton
											idDeleteNum={index}
											removeTodo={deleteTodoImportant}
										/>
									}
								/>
							))}
							{standardTodos.map((todo, index) => (
								<TodoList
									todo={todo}
									index={index}
									key={index}
									classAndColor="list-group-item d-flex justify-content-between align-items-center"
									doneTask={handleDoneTasksStandard}
									deleteButton={
										<DeleteButton
											idDeleteNum={index}
											removeTodo={deleteTodoStandard}
										/>
									}
								/>
							))}
							<div className="card-footer">
								<li className="d-flex justify-content-between text-muted">
									FINISHED TASKS
								</li>
								<li
									id="line-card-footer"
									className="d-flex justify-content-center text-muted">
									_____________________
								</li>
								{finishedTodos.length === 0 ? (
									<li className="d-flex justify-content-between text-muted">
										When you finish tasks they will appear
										here!
									</li>
								) : null}
								{finishedTodos.map((todo, index) => (
									<li
										className="d-flex justify-content-between text-muted finished-tasks"
										key={index}>
										{todo}
									</li>
								))}
							</div>
						</ul>
					) : (
						<EmptyTodoList />
					)}
				</div>
				<small className="d-flex justify-content-center">
					Urgent: {Number(urgentTodos.length)} | Important:{" "}
					{Number(importantTodos.length)} | Finished Tasks{" "}
					{Number(finishedTodos.length)}
				</small>
			</div>
		</div>
	);
};

export default Home;
