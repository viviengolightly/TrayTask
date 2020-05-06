import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handelPageChange, updatePrivacyInfo } from '../../actions/actions';

// Components
import PrivacyPageContainer from './PrivacyPageContainer';

class PrivacyPageComponent extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            checkboxOne: false,
            checkboxTwo: false,
        };
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    };

    handleCheckboxChange = (event) => {
        this.setState({
            [event.target.name] : !this.state[event.target.name]
        });
    };

    handelSubmit = (event) => {
        event.preventDefault();
        this.props.updatePrivacyInfo(this.state.checkboxOne, this.state.checkboxTwo);
        this.props.handelPageChange();
    };

    render() {
        return(
            <PrivacyPageContainer 
                btnClick={this.handelSubmit}
                checkboxOne={this.state.checkboxOne}
                checkboxTwo={this.state.checkboxTwo}
                onCheckboxChange={this.handleCheckboxChange}
            />
        );
    };
};

PrivacyPageComponent.propTypes = {
    handelPageChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return{
        handelPageChange: () => { dispatch(handelPageChange()) },
        updatePrivacyInfo: (checkboxOne, checkboxTwo) => { dispatch(updatePrivacyInfo(checkboxOne, checkboxTwo)) },
    };
};

export default connect(null, mapDispatchToProps)(PrivacyPageComponent);