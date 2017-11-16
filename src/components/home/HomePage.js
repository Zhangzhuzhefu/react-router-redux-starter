import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';



class HomePage extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.state = {};

  }


  render() {
    return (
      <h1>HOME</h1>
    );
  }

}

HomePage.propTypes = {
};


function mapStateToProps(state, ownProps) {
  return {
    //messages: state.messages
  };
}


function mapDispatchToProps(dispatch) {
  return {
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
