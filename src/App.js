import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import Landing from "./components/Landing";
import Owner from "./components/Owner";
import Renter from './components/Renter'





function App() {
	return (

		<Router>
			<div className="App">
			<Navbar />
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<PrivateRoute exact path="/owner" component={Owner}/>
					<PrivateRoute exact path="/renter" component={Renter}/>
				</Switch>
			</div>
		</Router>
	);
	
}
	



export default App;
