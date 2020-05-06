import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//CSS
import './UserFormStyles.css';
import './../styles.css';

const UserFormContainer = ({ btnClick, email, errors, fieldOnChange, name, password, role }) => (
	<div 
		className="wrapper userWrapper" 
		data-test="userWrapper"
	>
		<form 
			className="formWrapper" 
			data-test="userForm" 
			id="userDetailsForm" 
			onSubmit={btnClick} 
		>
			<label 
				className="required lbl" 
				data-test="label" 
			>
				name:
			</label>
			<input 
				className="input"
				data-test="inputOne" 
				id="name" 
				name="name" 
				onChange={fieldOnChange} 
				placeholder="name" type="text" 
				value={name} 
			/>
			<label 
				className="lbl" 
				data-test="label" 
			>
				role:
			</label>
			<input 
				className="input"
				data-test="inputTwo" 
				id="role" 
				name="role" 
				onChange={fieldOnChange} 
				placeholder="role" 
				type="text"  
				value={role} 
			/>
			<label 
				className="required lbl" 
				data-test="label" 
			>
				email:
			</label>
			<input 
				className="input"
				data-test="inputThree" 
				id="email" 
				name="email" 
				onChange={fieldOnChange} 
				placeholder="email" 
				type="email" 
				value={email}  
			/>
			<label 
				className="required lbl" 
				data-test="label" 
			>
				password:
			</label>
			<input 
				className="input"
				data-test="inputFour" 
				id="password" 
				name="password" 
				onChange={fieldOnChange} 
				placeholder="password" 
				type="password" 
				value={password} 
			/>
			<input 
				className="btn"
				data-test="inputFive" 
				id="detailsBtn" 
				name="button" 
				type="submit" 
				value="Submit" 
			/>	
		</form>
		<div>
			{errors.map((error, index) => (
				<div 
					className="error"
					data-test="error"
					key={index} 
				>
					{error}
				</div>
			))}
		</div>
	</div>
);

UserFormContainer.propTypes = {
	btnClick: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
	errors: PropTypes.array.isRequired,
	fieldOnChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
    return(
        {
        	errors: state.errors,
        }
    );
};

export default connect(mapStateToProps)(UserFormContainer);