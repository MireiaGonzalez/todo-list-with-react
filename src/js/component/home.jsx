import React, { useState } from "react";
import DeleteButton from "./DeleteButton.jsx";
import TodoList from "./TodoList.jsx";
import EmptyTodoList from "./EmptyTodoList.jsx";

const Home = () => {
	const [allTodos, setAllTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	console.log({ newTodo });

	const handleClick = (e) => {
		if (e.code === "Enter") {
			console.log("Enter pressed");
			const newAllTodos = [...allTodos, newTodo];
			setAllTodos(newAllTodos);
			setNewTodo("");
		}
	};

	console.log(allTodos);

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
							className="form-control"
							onChange={(e) => setNewTodo(e.target.value)}
							onKeyPress={handleClick}
							value={newTodo}
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
							<option id="urgent-select" value="urgent">
								Urgent
							</option>
							<option id="important-select" value="important">
								Important
							</option>
							<option
								id="standard-select"
								value="standard-select">
								Standard
							</option>
						</select>
						<button
							id="add-todo-button"
							type="button"
							class="btn btn-primary">
							Add
						</button>
					</div>

					{allTodos.length > 0 ? (
						<ul className="list-group list-group-flush">
							{allTodos.map((todo, index) => (
								<div>
									<TodoList
										todo={todo}
										index={index}
										key={index}
										deleteButton={<DeleteButton />}
									/>
								</div>
							))}
						</ul>
					) : (
						<EmptyTodoList />
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
