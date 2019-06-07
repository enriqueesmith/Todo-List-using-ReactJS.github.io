import React from "react";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			list: ["Do the laundry", "Walk the dog", "Go to the birthday party"]
		};
	}

	addListItem = e => {
		let key = e.which || e.keyCode || 0;
		if (key === 13) {
			this.setState({ input: e.target.value });
			let newList = this.state.list;
			newList.push(e.target.value);
			this.setState({
				list: newList
			});
			e.target.value = "";
		}
	};

	deleteListItem = index => {
		let newList = this.state.list;
		newList.splice(index, 1);
		this.setState({
			list: newList
		});
	};

	render() {
		return (
			<div className="container text-center mt-3">
				<h1>todos</h1>
				<div className="todoList">
					<input
						type="text"
						placeholder="What needs to be done?"
						onKeyPress={this.addListItem}
					/>
					<ul>
						{this.state.list.map((elem, index) => {
							return (
								<li key={index}>
									{elem}
									<p
										onClick={() =>
											this.deleteListItem(index)
										}>
										x
									</p>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}
