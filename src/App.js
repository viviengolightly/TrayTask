import React from 'react';
import { connect } from 'react-redux';
import './App.css';

//Components
import FinalPage from './components/FinalPage';
import NavBar from './components/NavBar';
import PrivacyPage from './components/PrivacyPage';
import UserForm from './components/UserForm';


class App extends React.Component {
  render(){
    return (
      <div className="App" data-test="appComponent">
        <NavBar 
          page={this.props.page}
        />
        {this.props.page===0 && 
            <UserForm />
        }
        {this.props.page===1 && 
            <PrivacyPage />
        }
        {this.props.page===2 && 
            <FinalPage />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      page: state.page,
  };
};

export default connect(mapStateToProps)(App);