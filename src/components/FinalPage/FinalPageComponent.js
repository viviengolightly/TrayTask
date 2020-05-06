import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import FinalPageContainer from './FinalPageContainer';

class FinalPageComponent extends React.Component {

    constructor(props){
        super(props);
        this.printUser = this.printUser.bind(this);
        this.printUser();
    }


    printUser = () => {
        console.log("User info:",this.props.user);
    };

    render() {
        return(
            <FinalPageContainer />
        );
    };
};

const mapStateToProps = (state) => {
    return(
        {
            user: state.user,
        }
    );
};


FinalPageComponent.propTypes = {
    user: PropTypes.shape(
        {
            checkboxOne: PropTypes.bool.isRequired,
            checkboxTwo: PropTypes.bool.isRequired,
            email: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            password: PropTypes.string.isRequired,
            role: PropTypes.string.isRequired,
        }
    ).isRequired,
};

export default connect(mapStateToProps)(FinalPageComponent);