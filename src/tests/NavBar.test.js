import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import { findByTestAttr } from '../../Utils/index';


// Reducers
import rootReducer from '../reducers/rootReducer';

// Components
import NavBar from '../components/NavBar';
import NavBarContainer from '../components/NavBar/NavBarContainer';

Enzyme.configure({ adapter: new Adapter() });

const store = createStore(rootReducer);

const setUp = (page) => {
    const component = shallow(<NavBarContainer page={page} />);
    return component;
};

describe("NavBar component", () => {
    it("renders", () => {
        const wrapper = shallow(<NavBar store={store} />);
        expect(wrapper.exists()).toBe(true);
    });
    describe("Checking PropTypes", () => {
        it("Should not throw a warning", () => {
            const expectedProps =  {
                page: 1,
            };
            const propsErr = checkPropTypes(NavBar.propTypes, expectedProps, 'prop', NavBar.name);
            expect(propsErr).toBeUndefined();
        });
    });
});

describe("FinalPage container", () => {
    it("Should render bar wrapper without errors", () => {
        const wrapper = findByTestAttr(setUp(0), 'barWrapper');
        expect(wrapper.length).toBe(1);
    });
    it("Should render first column without errors", () => {
        const wrapper = findByTestAttr(setUp(0), 'colOne');
        expect(wrapper.length).toBe(1);
    });
    it("Should render first paragraph without errors", () => {
        const wrapper = findByTestAttr(setUp(0), 'userParagraph');
        expect(wrapper.length).toBe(1);
    });
    it("Should render second column without errors", () => {
        const wrapper = findByTestAttr(setUp(1), 'colTwo');
        expect(wrapper.length).toBe(1);
    });
    it("Should render second paragraph without errors", () => {
        const wrapper = findByTestAttr(setUp(1), 'privacyParagraph');
        expect(wrapper.length).toBe(1);
    });
    it("Should render third column without errors", () => {
        const wrapper = findByTestAttr(setUp(1), 'colThree');
        expect(wrapper.length).toBe(1);
    });
    it("Should render third paragraph without errors", () => {
        const wrapper = findByTestAttr(setUp(1), 'doneParagraph');
        expect(wrapper.length).toBe(1);
    });
});

