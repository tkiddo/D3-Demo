import React from "react";

import LineChart from "../../components/chart/lineChart";

const Home = (props) => {
	return (
		<div>
			<LineChart />
		</div>
	);
};

export default React.memo(Home);
