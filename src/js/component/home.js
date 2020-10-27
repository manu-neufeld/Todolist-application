import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [task, setTask] = useState([]);
	const [initialValue, setInitialValue] = useState(null);
	let newTask = event => {
		let newTask = event.target.value;

		if (event.keyCode == 13) {
			event.preventDefault();
			console.log(newTask);

			if (newTask) {
				setTask(task => [...task, newTask]);
				setInitialValue("");
				console.log(task);
			}
		}
	};

	return (
		<div>
			<h1>Todo List</h1>
			<form>
				<input
					id="name"
					type="text"
					placeholder="Add Task"
					value={initialValue}
					onKeyPress={() => {
						newTask(event);
					}}
				/>
			</form>
			<ul>
				{task.map((item, index) => {
					return <li key={index}>{item}</li>;
					{
						console.log(item);
					}
				})}
			</ul>
		</div>
	);
}
