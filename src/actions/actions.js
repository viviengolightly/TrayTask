export const addError = (error) => {
    return {
        type: 'ADD_ERROR', 
        error: error,
    };
};

export const clearErrors = () => {
    return{
        type: 'CLEAR_ERRORS',
    };
};

export const handelPageChange = () => {
    return{
        type: 'CHANGE_PAGE', 
    };
};

export const updatePrivacyInfo = (checkboxOne, checkboxTwo) => {
    return{
        type: 'UPDATE_PRIVACY_INFO', 
        checkboxOne: checkboxOne, 
        checkboxTwo:checkboxTwo,
    };
};

export const updateUserInfo = (email, name, password, role) => {
    return{
        type: 'UPDATE_USER_DETAILS', 
        email:email, 
        name: name, 
        password: password, 
        role:role 
    };
};