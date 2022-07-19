import { useNavigate } from "react-router-dom";
import React from "react";


class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
			"https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {

		const { DataisLoaded, items } = this.state;
		console.log(items)
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div>;

		return (
			<div className="App">
				<h1> Fetch data from an api in react </h1> {
					items.map((item) => (
						<ol key={item.id} >

							id:{item.id}
							User_Name:{item.username}
							Full_Name:{item.name}
							User_Email:{item.email}
							
							

						</ol>
					))
				}
				<Navigate />
			</div>
		);
	}
}

const Navigate = () => {
	
	let history=useNavigate();
	
	console.log(history);
	return (<div>
		<button onClick={()=>history('/Login')}> Go to Login</button>
	</div>)
}

export default App;
