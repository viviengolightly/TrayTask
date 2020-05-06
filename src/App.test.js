import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux';

// Components 
import App from './App';

// Reducers
import rootReducer from './reducers/rootReducer';

// Utils
import { findByTestAttr } from './../Utils/index';

Enzyme.configure({ adapter: new Adapter() });

const store = createStore(rootReducer);

const setUp = (initialState={}) => {
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;
};

describe("App Component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });
});