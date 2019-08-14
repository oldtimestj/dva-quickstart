import React from 'react';
import Counter from '../components/Counter'
import {connect} from 'dva'
import PropTypes from 'prop-types'


const CounterPage = ({number,dispatch}) => {

  return (
    <div>
      <p>Counter</p>
      <Counter number = {number} dispatch={dispatch}></Counter>
    </div>
  )
}

CounterPage.propTypes = {
  number:PropTypes.object
}

const mapStateToProps = (state) => {
  return{
    number:state.number
  }
}

export default connect(mapStateToProps)(CounterPage)
