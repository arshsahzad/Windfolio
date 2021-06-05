import React from "react";
import { Switch, Route } from "react-router-dom";
import BlueScreen_404 from "../containers/blueScreen404.container";
import Windows from "../containers/windows.container";

function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Windows} />
			<Route path="/home" exact component={Windows} />
			<Route path="/windows" exact component={Windows} />
			<Route component={BlueScreen_404} />
		</Switch>
	);
}

export default Routes;
