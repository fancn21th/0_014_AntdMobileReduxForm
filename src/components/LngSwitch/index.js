import React from 'react';
import i18n from '../../i18n';
import { WingBlank, Button, WhiteSpace } from 'antd-mobile';

const LngSwitch = () => {
  const toggle = lng => i18n.changeLanguage(lng);

  return (
    <WingBlank >
      <Button
        className="btn"
        onClick={() => toggle('en')}
      >
        {'en'}
      </Button>
      <Button
        className="btn"
        onClick={() => toggle('zh')}
      >
        {'zh'}
      </Button>
      <WhiteSpace size="md" />
    </WingBlank>
  );
}

export default LngSwitch;
