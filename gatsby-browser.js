import React from 'react';
import Layout from './src/components/layout';
import './src/styles/style.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@popperjs/core/dist/umd/popper.min.js';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
