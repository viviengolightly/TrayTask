import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import NavBarContainer from './NavBarContainer';

class NavBarComponent extends React.Component {
    render(){
        return(
            <NavBarContainer 
                page={this.props.page}
            />
        );
    };
};

NavBarComponent.protoTypes = {
    page: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
    return(
        {
            page: state.page,
        }
    );
};

export default connect(mapStateToProps)(NavBarComponent);