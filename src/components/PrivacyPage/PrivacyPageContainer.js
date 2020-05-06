import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './../styles.css';
import './privacyPageStyles.css';

const PrivacyPageContainer = ({ btnClick, checkboxOne, checkboxTwo, onCheckboxChange }) => (
	<div 
		className="wrapper privacyWrapper" 
		data-test="privacyWrapper"
	>
		<form 
			className="formWrapper" 
			data-test="privacyForm" 
			id="privacyForm" 
			onSubmit={btnClick}
		>
			<div 
				className="container" 
				data-test="privacyContainer"
			>
				<div>
					<label 
						className="lbl" 
						data-test="checkboxLabel"
					>
						<input 
							checked={checkboxOne}
							className="input" 
							data-test="inputOne"
							id="checkboxOne" 
							name="checkboxOne"
							onChange={onCheckboxChange} 
							type="checkbox"  
						/>
						<span 
							className="text" 
							data-test="checkBoxDescription"
						>
							Receive updates about Tray.io product by email.
						</span>
					</label>
				</div>
				<div>
					<label 
						className="lbl" 
						data-test="checkboxLabel"
					>
						<input 
							checked={checkboxTwo}
							className="input" 
							data-test="inputTwo"
							id="checkboxTwo" 
							name="checkboxTwo"
							onChange={onCheckboxChange} 
							type="checkbox"  
						/>
						<span 
							className="text" 
							data-test="checkBoxDescription"
						>
							Receive communication by email for other products created by Tray.io team.
						</span>
					</label>
				</div>
			</div>
			<input 
				className="btn" 
				data-test="privacyBtn" 
				id="privacyBtn" 
				name="button" 
				value="Submit" 
				type="submit"  
			/>
		</form>
	</div>
);

PrivacyPageContainer.propTypes = {
	btnClick: PropTypes.func.isRequired,
	checkboxOne: PropTypes.bool.isRequired,
	checkboxTwo: PropTypes.bool.isRequired,
	onCheckboxChange: PropTypes.func.isRequired,
};

export default PrivacyPageContainer;