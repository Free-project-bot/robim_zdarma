import React from 'react';

import Button from "../Button/Button";

import styles from './TablePart.module.css';

export default function TablePart(props) {
    return <div className={styles.TablePart}>
        <div>{props.popis}</div>
        <div>{props.datum}</div>
        <div><Button text="Download" click={props.click}/></div>
    </div>
}