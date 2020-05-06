## Getting started:

## Starting the app:

1. Clone the repository 
#### `git clone https://github.com/viviengolightly/TrayTask.git`

2. Form the Terminal naviagte to the 'form' working directory.
3. Run
#### `npm install`

4.In order to start app run below command:
#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Running test

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## FORM APP

## COMPONENTS 

Each component is divided into two elements: component(react classt, that contains methods and renders the container) and container (functional stateless component, that contains HTML implementation).  
  
 ### 1. FinalPage - form's last page.  
  `<FinalPageComponent /> ` 
  
  Implements following methods:  
  printUser();  
  
  `<FinalPageContainer />  `
  
 ### 2. NavBar - display list of pages and marks current page.  
    
  `<NavBarComponent page={this.ptops.page} />`  
    
 ##### Props:  
  page: PropTypes.number.isRequired,  
    
  `<NavBarContainer page={this.props.page} /> ` 
    
 ##### Props:
  page: PropTypes.number.isRequired,  
    
 ### 3. PrivacyPage - privacy form.  
    
  `<PrivacyPageComponent handlePageChange={ () => {} } />`  
    
 ##### Methods:  
  handleCheckboxChange(event); - handles checkbox change.  
  handelSubmit(event); - handels form onSubmit button click.  
    
 ##### Props:  
  handelPageChange: PropTypes.func.isRequired,  
    
 ##### State:  
  checkboxOne: boolean,  
  checkboxTwo: boolean,   
    
  `<PrivacyPageContainer    
    btnClick={this.handelSubmit}   
    checkboxOne={this.state.checkboxOne}    
    checkboxTwo={this.state.checkboxTwo}    
    onCheckboxChange={this.handleCheckboxChange}    
  /> ` 
  
 ##### Props:  
  btnClick: PropTypes.func.isRequired,  
	checkboxOne: PropTypes.bool.isRequired,  
	checkboxTwo: PropTypes.bool.isRequired,  
	onCheckboxChange: PropTypes.func.isRequired,  
  
 ### 4. UserForm - first page, collects user information.  
    
 ` <UserFormComponent    
    addError={ () => {} }  
    handelPageChange={ () => {} }  
  />  `
    
 ##### Methods:  
  handelChange(event); - handles input field change.  
  handelSubmit(event); - handles onSubmit button click.  
  validateEmail(); - email validation, returns true if email is valid, false if not.  
  validateName(); - name validation, returns true if name is valid, false if not.  
  validatePassword(); - password validation, returns true if password is valid, false if not.  
    
 ##### Props:  
  addError: PropTypes.func.isRequired,  
  handelPageChange: PropTypes.func.isRequired,  
    
 ##### States:  
  email: String,  
  name: String,  
  password: String,  
  role: String,  
    
  `<UserFormContainer  
   	btnClick={this.handelSubmit}  
   	email={this.state.email}  
   	errors={[]} fieldOnChange={this.handelChange}  
   	name={this.state.name}  
   	password={this.state.password}  
   	role={this.state.role}  
  />`
    
 ##### Props:  
 btnClick: PropTypes.func.isRequired,  
 email: PropTypes.string.isRequired,  
 errors: PropTypes.array.isRequired,  
 fieldOnChange: PropTypes.func.isRequired,  
 name: PropTypes.string.isRequired,  
 password: PropTypes.string.isRequired,  
 role: PropTypes.string.isRequired,  
  
  ## ACTIONS
  
  ADD_ERROR: addError(error); - adds error to errors state array in a store.
  
  CLEAR_ERRORS: clearErrors(); - returns empty errors array, and udate the store state.
  
  CHANGE_PAGE: handelPageChange(); - returns updated page, and updates store's page state.
  
  UPDATE_PRIVACY_INFO: updatePrivacyInfo(checkboxOne, checkboxTwo); - returns updated checkboxes, and updates store's 
  checkboxOne and checkboxTwo states.
  
  UPDATE_USER_DETAILS: updateUserInfo(email, name, password, role); - returns new user data, and updates states in the store respectively.  
 
