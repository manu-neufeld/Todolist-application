import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	let myInput = document.querySelector("#name");
	const [task, setTask] = useState([]);
	const [initialValue, setInitialValue] = useState(null);
	const [myList, setMyList] = useState(null);
	let newTask = event => {
		let newTask = event.target.value;
		if (event.keyCode == 13) {
			event.preventDefault();
			console.log(newTask);

			if (newTask) {
				setTask(task => [...task, newTask]);
				myInput.value = "";
				console.log(task);
			}
		}
	};
	let deleteTask = indexItem => {
		task.splice(indexItem, 1);
	};
	useEffect(() => {
		setMyList(
			task.map((item, index) => {
				return (
					<li key={index}>
						{item}
						<button
							className="button"
							onClick={() => deleteTask(index)}>
							X
						</button>
					</li>
				);
			})
		);
	});

	return (
		<div className="container">
			<h1 className="title">To Do List</h1>
			<form>
				<input
					id="name"
					type="text"
					placeholder="Add Task"
					onKeyPress={() => {
						newTask(event);
					}}
				/>
			</form>
			<ul className="list">{myList}</ul>
			<p className="counter">{task.length} tareas añadidas</p>
		</div>
	);
}
