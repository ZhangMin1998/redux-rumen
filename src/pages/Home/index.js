import React from "react"
import store from "../../Store"
import { sendAction } from "../../Action"

class Home extends React.Component{
  handleClick = () => {
    const action = sendAction()
    store.dispatch(action)
  }

  // 当组件加载完毕时 监听
  componentDidMount () {
    store.subscribe(() => {
      console.log('subscribe', store.getState())
      this.setState({})
    })
  }
  render () {
    return (
      <>
        <button onClick={this.handleClick}>点我发送action</button>
        <div>{ store.getState().value }</div>
      </>
    )
  }
}

export default Home