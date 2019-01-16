import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from '../redux/Counter';
class App extends Component {
  
  handleAsyncAction = () => {
    const { CounterActions } = this.props;

    CounterActions.incrementAsyncAction();
  }

  render() {
    const { CounterActions, number } = this.props;

    return (
        <div>
          <h1>{number}</h1>
          <button onClick={this.handleAsyncAction}>Delay+</button>
          <button onClick={CounterActions.incrementAction}>+</button>
          <button onClick={CounterActions.decrementAction}>-</button>
          
            <h1>Hi 👋</h1>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  number: state.Counter.number
});

const dispatchToProps = (dispatch) => ({ 
  CounterActions: bindActionCreators(counterActions, dispatch) 
});

export default connect(
  mapStateToProps, dispatchToProps
)(App);