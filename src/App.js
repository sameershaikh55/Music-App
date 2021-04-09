import Album from "./pages/Album";
import Music from "./pages/Music";
import "./sass/style.scss";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Album} />
				<Route exact path="/music" component={Music} />
			</Switch>
		</>
	);
}

export default App;
