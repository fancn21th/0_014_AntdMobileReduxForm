import 'babel-polyfill';
import React from 'react';
import { Button } from 'antd-mobile';
import { render } from 'react-dom';

render(
  <div><Button>Hello World!</Button></div>,
  document.getElementById('example')
);
