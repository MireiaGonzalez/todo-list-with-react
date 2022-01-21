import React from "react";
import TodosCard from "./todosCard.jsx";

const Home = () => {
	return (
		<div className="container d-flex flex-column justify-content-center align-items-center">
			<h1 id="header">Todo List</h1>
			<div className="container-fluid">
				<TodosCard />
			</div>
		</div>
	);
};

export default Home;
