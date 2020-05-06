const initState = {
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

const rootReducer = (state=initState, action) => {
    if(action.type === 'ADD_ERROR'){
        return{
            ...state,
            errors: [
                ...state.errors,
                action.error,
            ],
        };
    }
    else if(action.type === 'CLEAR_ERRORS'){
        return{
            ...state,
            errors: [],
        };
    }
    else if(action.type === 'CHANGE_PAGE'){
        return{
            ...state,
            page: state.page + 1,
        };
    }
    else if(action.type === 'UPDATE_USER_DETAILS'){
        return{
            ...state,
            user:{
                ...state.user,
                email: action.email,
                name: action.name,
                password: action.password,
                role: action.role,
            },
        };
    }
    else if(action.type === 'UPDATE_PRIVACY_INFO'){
        return{
            ...state,
            user:{
                ...state.user,
                checkboxOne: action.checkboxOne,
                checkboxTwo: action.checkboxTwo,
            },
        };
    };
    return state;
};

export default rootReducer;