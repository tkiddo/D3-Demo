import React,{Suspense} from 'react';



const SuspeneseComponent = (Component) => {
	return props => (
		<Suspense fallback={<div>loading...</div>}>
			<Component {...props} />
		</Suspense>
	);
};

export default SuspeneseComponent;