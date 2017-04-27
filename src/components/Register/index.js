import React, { PropTypes } from 'react';
import { InputItem } from 'antd-mobile';

class Register extends React.Component {
  state = {
    focused: false,
  }
  render() {
    return (
      <InputItem
        clear
        placeholder="点击下方按钮该输入框会获取光标"
        focused={this.state.focused}
        onFocus={() => {
          this.setState({
            focused: false,
          });
        }}
      >标题</InputItem>
    );
  }
}

Register.propTyps = {
}

export default Register;
