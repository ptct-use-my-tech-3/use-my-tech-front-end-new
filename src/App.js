import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserHome from "./components/UserHome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProtectedRoute  from './helpers/ProtectedRoute'
import Landing from "./components/Landing";



function App() {
	return (

		<Router>
			<div className="App">
			<Navbar />
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<ProtectedRoute exact path="/home" component={UserHome}/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
