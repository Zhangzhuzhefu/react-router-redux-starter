import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    injectTapEventPlugin();
    this.state = {
      selectedIndex: 0
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      selectedIndex: nextProps.selectedIndex
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div>
          <h1>APP</h1>
        </div>
        {this.props.children}

      </div>
    );
  }
}

App.propTypes = {
  selectedIndex: PropTypes.number
};

function mapStateToProps(state, ownProps) {
  return {
    selectedIndex: state.navigator
  };
}

export default connect(mapStateToProps)(App);
