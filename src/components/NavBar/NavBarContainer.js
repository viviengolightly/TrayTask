import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './navBarStyles.css';

const NavBarContainer = ({ page }) => (
    <div 
        className="barWrapper row" 
        data-test="barWrapper"
    >
        <div 
            data-test="colOne" 
            className={page===0? "column colActive" : "column"}
        >
            <p 
                data-test="userParagraph" 
                className="headerText"
            >
                User
            </p> 
        </div>
        <div 
            data-test="colTwo" 
            className={page===1? "column colActive" : "column"}
        >
            <p 
                data-test="privacyParagraph" 
                className="headerText"
            >
                Privacy
            </p>
        </div>
        <div 
            data-test="colThree" 
            className={page===2? "column colActive" : "column"}
        >
            <p 
                data-test="doneParagraph" 
                className="headerText"
            >
                Done
            </p>
        </div>
    </div>
);

NavBarContainer.propTypes = {
    page: PropTypes.number.isRequired,
};

export default NavBarContainer;