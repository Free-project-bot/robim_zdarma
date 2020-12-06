import React from 'react';

import styles from './Nadpis.module.css';

export default function Nadpis(props) {
    const styled = [styles.Nadpis];
    if (props.small) {
        styled.push(styles.NadpisSmall);
    }
    if (props.right) {
        styled.push(styles.NadpisRight);
    }
    return <h2 className={styled.join(" ")}>{props.text}</h2>
}