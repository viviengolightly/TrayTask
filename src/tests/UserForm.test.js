import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux';

// Components
import UserForm from '../components/UserForm';
import UserFormContainer from '../components/UserForm/UserFormContainer';

// Reducers
import rootReducer from '../reducers/rootReducer';

// Utils
import { findByTestAttr } from '../../Utils/index';

Enzyme.configure({ adapter: new Adapter() });

const store = createStore(rootReducer);

const setUp = (props={}) => {
    const component = shallow(
            <UserFormContainer {...props} store={store} />
    ).childAt(0).dive();
    // console.log(component.debug())
    return component;
};

describe("UserForm container", () => {

    let component;
    let mockFunc;
    beforeEach(() => {
        mockFunc = jest.fn();
        const testProps = {
            btnClick: mockFunc,
            email: "test@test.com",
            fieldOnChange: mockFunc,
            name: "test",
            password:"test123TEST",
            role: "test",
        };

        component = setUp(testProps);
    });
    it("Should render wrapper without errors", () => {
        const wrapper = findByTestAttr(component, 'userWrapper');
        expect(wrapper.length).toBe(1);
    });
    it("Should render form without errors", () => {
        const wrapper = findByTestAttr(component, 'userForm');
        expect(wrapper.length).toBe(1);
    });
    it("Should render labels without errors", () => {
        const wrapper = findByTestAttr(component, 'label');
        expect(wrapper.length).toBe(4);
    });
    it("Should render inputs without errors", () => {
        const wrapper = findByTestAttr(component, 'inputOne');
        expect(wrapper.length).toBe(1);
    });
    it("Should render inputs without errors", () => {
        const wrapper = findByTestAttr(component, 'inputTwo');
        expect(wrapper.length).toBe(1);
    });
    it("Should render inputs without errors", () => {
        const wrapper = findByTestAttr(component, 'inputThree');
        expect(wrapper.length).toBe(1);
    });
    it("Should render inputs without errors", () => {
        const wrapper = findByTestAttr(component, 'inputFour');
        expect(wrapper.length).toBe(1);
    });
    it("Should render inputs without errors", () => {
        const wrapper = findByTestAttr(component, 'inputFive');
        expect(wrapper.length).toBe(1);
    });
    it("Should render error field without errors", () => {
        const wrapper = findByTestAttr(component, 'error');
        expect(wrapper.length).toBe(0);
    });
    it("Should emit callback on submit event", () => {
        const btn =  findByTestAttr(component, 'userForm');
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
    it("Should emit callback on change event on field Two", () => {
        const input =  findByTestAttr(component, 'inputTwo');
        input.simulate('change');
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1);
    });
    it("Should emit callback on change event on field three", () => {
        const input =  findByTestAttr(component, 'inputThree');
        input.simulate('change');
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1);
    });
    it("Should emit callback on change event on field four", () => {
        const input =  findByTestAttr(component, 'inputFour');
        input.simulate('change');
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1);
    });
});

describe("FinalPage component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<UserForm store={store} />);
    });

    it("renders", () => {
        expect(wrapper.exists()).toBe(true);
    });
    it("Should validate email and return value as expected", () => {
        const classInstance = wrapper.dive().instance();
        const newValue = classInstance.validateEmail();
        expect(newValue).toBe(false);
    });
    it("Should validate name and return value as expected", () => {
        const classInstance = wrapper.dive().instance();
        const newValue = classInstance.validateName();
        expect(newValue).toBe(false);
    });
    it("Should validate password and return value as expected", () => {
        const classInstance = wrapper.dive().instance();
        const newValue = classInstance.validatePassword();
        expect(newValue).toBe(false);
    });
});

