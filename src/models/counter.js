import { delay } from "dva/saga"

export default {
  namespace: 'number',
  state:{
    count:5,
    name: 'xiaoer'
  },
  reducers: {
    add(state,action){
      return {
        count: state.count + 1
      }
    },  
    sub(state,action){
      return {
        count:state.count - 1
      }
    }
  },
  effects: {
    *asyncAdd(props, { call, put, select }) {  // select 用于获取state中数据有变化的值，如果不变就不取
      // const counter = yield select(state => state.number) //第一种写法
      // console.log(counter)
      // const counter = yield select(({number}) => number)   //第二种写法
      // console.log(counter)
      // const counter = yield select(_ => _.number)    //第san种写法
      // console.log(counter)
      const {number} = yield select(_ => _)
      console.log(number)
      yield call(delay,1000)
      yield put({ type: 'add' });
    },
  },
    // 'add'(state,payload){
    //   console.log('state',state)
    //   console.log('payload',payload)
    //   return {
    //     count: state.count + 1
    //   }
    // }
    // 'login/add'(state,payload){
    //   console.log('state',state)
    //   console.log('payload',payload)
    //   return {
    //     count: state.count + 1
    //   }
    // }
  }

