import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux';

// Components
import PrivacyPage from '../components/PrivacyPage';
import PrivacyPageContainer from '../components/PrivacyPage/PrivacyPageContainer';

// Reducers
import rootReducer from '../reducers/rootReducer';

// Utils
import { findByTestAttr } from '../../Utils/index';


Enzyme.configure({ adapter: new Adapter() });

const store = createStore(rootReducer);

const setUp = (props={}) => {
    const component = shallow(<PrivacyPageContainer {...props} />);
    return component;
};

describe("PrivacyPage container", () => {

    let component;
    let mockFunc;
    beforeEach(() => {
        mockFunc = jest.fn();
        const testProps = {
            btnClick: mockFunc,
            checkboxOne: false,
            checkboxTwo: false,
            onCheckboxChange: mockFunc,
        };

        component = setUp(testProps);
    });
    it("Should render wrapper without errors", () => {
        const wrapper = findByTestAttr(component, 'privacyWrapper');
        expect(wrapper.length).toBe(1);
    });
    it("Should render form without errors", () => {
        const wrapper = findByTestAttr(component, 'privacyForm');
        expect(wrapper.length).toBe(1);
    });
    it("Should render container without errors", () => {
        const wrapper = findByTestAttr(component, 'privacyContainer');
        expect(wrapper.length).toBe(1);
    });
    it("Should render label without errors", () => {
        const wrapper = findByTestAttr(component, 'checkboxLabel');
        expect(wrapper.length).toBe(2);
    });
    it("Should render input field without errors", () => {
        const wrapper = findByTestAttr(component, 'inputOne');
        expect(wrapper.length).toBe(1);
    });
    it("Should render input field without errors", () => {
        const wrapper = findByTestAttr(component, 'inputTwo');
        expect(wrapper.length).toBe(1);
    });
    it("Should render span without errors", () => {
        const wrapper = findByTestAttr(component, 'checkBoxDescription');
        expect(wrapper.length).toBe(2);
    });
    it("Should render button without errors", () => {
        const wrapper = findByTestAttr(component, 'privacyBtn');
        expect(wrapper.length).toBe(1);
    });
    it("Should emit callback on submit event", () => {
        const btn =  findByTestAttr(component, 'privacyForm');
        btn.simulate('submit');
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1);

    });
    it("Should emit callback on change event on field one", () => {
        const input =  findByTestAttr(component, 'inputOne');
        input.simulate('change');
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1);
    });
    it("Should emit callback on change event on field two", () => {
        const input =  findByTestAttr(component, 'inputTwo');
        input.simulate('change');
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1);
    });
});

describe("FinalPage component", () => {
    test("renders", () => {
        const wrapper = shallow(<PrivacyPage store={store} />);
        expect(wrapper.exists()).toBe(true);
    });
});
