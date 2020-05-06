import Reducer from '../reducers/rootReducer';

describe("Reducers", () => {
    it("Should return default state", () => {
        
        const newState = Reducer(undefined, {});
        expect(newState).toEqual({
            errors:[],
            page: 0,
            user :{
                checkboxOne: false,
                checkboxTwo: false,
                email: "",
                name: "",
                password:"",
                role: "",
            },
        });
    });
    it("Should add error to an array", () => {
        const error = 'test error';
        const newState = Reducer(undefined, {
            type: 'ADD_ERROR',
            error: error,
        });
        expect(newState).toEqual({
            errors:['test error'],
            page: 0,
            user :{
                checkboxOne: false,
                checkboxTwo: false,
                email: "",
                name: "",
                password:"",
                role: "",
            },
        });
    });
    it("Should clear errors", () => {
        const oldState = {
            errors:[],
            page: 0,
            user :{
                checkboxOne: false,
                checkboxTwo: false,
                email: "",
                name: "",
                password:"",
                role: "",
            },
        };

        const newState = Reducer(oldState, {
            type: 'CLEAR_ERRORS',
        });
        expect(newState).toEqual({
            errors:[],
            page: 0,
            user :{
                checkboxOne: false,
                checkboxTwo: false,
                email: "",
                name: "",
                password:"",
                role: "",
            },
        });

    });
    it("Should change page", () => {
        const newState = Reducer(undefined, {
            type: 'CHANGE_PAGE',
            page: 1,
        });
        expect(newState).toEqual({
            errors:[],
            page: 1,
            user :{
                checkboxOne: false,
                checkboxTwo: false,
                email: "",
                name: "",
                password:"",
                role: "",
            },
        });
    });
    it("Should update user details", () => {
        const newState = Reducer(undefined, {
            type: 'UPDATE_USER_DETAILS',
            email: "test@test.uk",
            name: "test name",
            password: "Test123123",
            role: "Test role",
        });
        expect(newState).toEqual({
            errors:[],
            page: 0,
            user :{
                checkboxOne: false,
                checkboxTwo: false,
                email: "test@test.uk",
                name: "test name",
                password:"Test123123",
                role: "Test role",
            },
        });
    });
    it("Should update privacy info", () => {
        const newState = Reducer(undefined, {
            type: 'UPDATE_PRIVACY_INFO',
            checkboxOne: true,
            checkboxTwo: true,
        });
        expect(newState).toEqual({
            errors:[],
            page: 0,
            user :{
                checkboxOne: true,
                checkboxTwo: true,
                email: "",
                name: "",
                password:"",
                role: "",
            },
        });
    });
});