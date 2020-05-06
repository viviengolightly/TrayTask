import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addError, clearErrors, handelPageChange, updateUserInfo } from '../../actions/actions';

// Components
import UserFormContainer from './UserFormContainer';

class UserFormComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            role: '',
        };
        this.handelChange = this.handelChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validateName = this.validateName.bind(this);
        this.validatePassword= this.validatePassword.bind(this);
    };

    handelChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handelSubmit = (event) => {
        event.preventDefault();
        this.props.clearErrors();
        if(this.validateEmail() && this.validateName() && this.validatePassword()){
            this.props.updateUserInfo(this.state.email, this.state.name, this.state.password, this.state.role);
            this.props.handelPageChange();
        } else {
            if(!this.validateEmail()){
                this.props.addError("Invalid email address");
                console.log("email")
            }
            if(!this.validateName()){
                this.props.addError("Invalid name");
                console.log("name")
            }
            if(!this.validatePassword()){
                console.log("password")
                this.props.addError("Invalid password. It must contains at least one number, one uppercase, and one lowercase letters.");
            }
        }
    };


    validateEmail = () => {
        var mailformat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        if(this.state.email.match(mailformat)){
            return true;
        }
        return false;
    };

    validateName = () => {
        var letters = /^[A-Za-z]+$/;
        if(this.state.name.match(letters)){
            return true;
        }
        return false;
    };

    validatePassword = () => {
        var letters=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,}$/;
        if(this.state.password.match(letters)) {
            return true;
        }
        return false;
    };

    render() {
        return(
            <UserFormContainer 
                btnClick={this.handelSubmit}
                email={this.state.email}
                fieldOnChange={this.handelChange}
                name={this.state.name}
                password={this.state.password}
                role={this.state.role}
            />
        );
    };
};

UserFormComponent.propTypes ={
    addError: PropTypes.func.isRequired,
    handelPageChange: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => {
    return{
        addError: (error) => { dispatch(addError(error)) },
        clearErrors: () => { dispatch(clearErrors()) },
        handelPageChange: () => { dispatch(handelPageChange()) }, 
        updateUserInfo: (email, name, password, role) => { dispatch(updateUserInfo(email, name, password, role)) },
    };
};

export default connect(null, mapDispatchToProps)(UserFormComponent);

