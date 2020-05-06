import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

// Components
import FinalPage from '../components/FinalPage';
import FinalPageContainer from '../components/FinalPage/FinalPageContainer';

// Reducers
import rootReducer from '../reducers/rootReducer';

// Utils
import { findByTestAttr } from '../../Utils/index';


Enzyme.configure({ adapter: new Adapter() });

const store = createStore(rootReducer);

const setUp = (props={}) => {
    const component = shallow(<FinalPageContainer {...props} />);
    return component;
};

describe("FinalPage container", () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });
    it("Should render wrapper without errors", () => {
        const wrapper = findByTestAttr(component, 'wrapper');
        expect(wrapper.length).toBe(1);
    });
    it("Should render container without errors", () => {
        const wrapper = findByTestAttr(component, 'container');
        expect(wrapper.length).toBe(1);
    });
    it("Should render paragraph without errors", () => {
        const wrapper = findByTestAttr(component, 'paragraph');
        expect(wrapper.length).toBe(1);
    });
});


describe("FinalPage component", () => { 
    it("Should render", () => {
        const comp = shallow(<FinalPage store={store} /> );
        expect(comp.exists()).toBe(true);
    });
    describe("Checking PropTypes", () => {
        it("Should not throw a warning", () => {
            const expectedProps = {
                user :{
                    checkboxOne: false,
                    checkboxTwo: false,
                    email: "Test eamil",
                    name: "Test name",
                    password:"Test123123",
                    role: "Test",
                },
            };

            const propsErr = checkPropTypes(FinalPage.propTypes, expectedProps, 'prop', FinalPage.name);
            expect(propsErr).toBeUndefined();
        });
    });
});