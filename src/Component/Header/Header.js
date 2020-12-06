import React from 'react';

import logo from '../../static/logo.svg';
import styles from './Header.module.css';
import {Menu, Search} from "@material-ui/icons";

const Header = () => {
    return <div className={styles.Header}>
        <div className={styles.Main}>
            <img src={logo} alt={logo} />
            <h2>Gymnazium Nad Stolou</h2>
            <div className={styles.Icons}>
                <Menu onClick={() => alert("MENU!")} />
                <Search onClick={() => alert("SEARCH!")} />
            </div>
        </div>
    </div>
}

export default Header;