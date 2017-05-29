import React from 'react';
import { connect } from 'react-redux';
import { changeValue } from 'store/sample'

import styles from './styles.css';

export default connect(
  state => ({ value: state.sample.value }),
  { changeValue }
)
(props => (
  <div className={styles['sample']} onClick={props.changeValue}>
    <span>{props.value}</span>
  </div>
));
