import React from 'react';

import styles from './Button.module.css';

export default function Button(props) {
    return <button className={styles.Button} onClick={props.click}>{props.text}</button>
}