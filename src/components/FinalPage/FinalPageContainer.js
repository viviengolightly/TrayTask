import React from 'react';

// CSS
import './../styles.css'
import './finalPageStyles.css';

const FinalPageContainer = () => (
	<div 
		className="wrapper finalPageWrapper" 
		data-test="wrapper"
	>
		<div 
			className="container" 
			data-test="container"
		>
			<p data-test="paragraph" >
				Please verify your email address, you should have recieved an email from us already!
			</p>
		</div>
	</div>
);


export default FinalPageContainer;