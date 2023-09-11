// action的构建函数

const sendAction = () => {
  // 返回一个action对象
  return {
    type: 'send_type',
    value: 666
  }
}

module.exports = {
  sendAction
}