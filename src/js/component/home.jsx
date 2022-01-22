import React, { useState } from "react";
import TodosCard from "./todosCard.jsx";

const Home = () => {
	const [allTodos, setAllTodos] = useState([]);
	const [newTodo, setNewTodo] = useState("");
	const [visibility, setVisibility] = useState("");
	console.log({ newTodo });

	const handleClick = (e) => {
		if (e.code === "Enter") {
			console.log("Enter pressed");
			const newAllTodos = [...allTodos, newTodo];
			setAllTodos(newAllTodos);
			setNewTodo("");
			setVisibility("hidden");
		}
	};

	console.log(allTodos);

	return (
		<div className="container d-flex flex-column justify-content-center align-items-center">
			<h1 id="header">Todo List</h1>
			<div className="container-fluid">
				<TodosCard
					change={(e) => setNewTodo(e.target.value)}
					keypress={handleClick}
					inputValue={newTodo}
					visibility={visibility}
				/>
			</div>
		</div>
	);
};

export default Home;
