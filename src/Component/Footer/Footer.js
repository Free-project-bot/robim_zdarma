import React from 'react';

import styles from './Footer.module.css';
import Nadpis from "../Nadpis/Nadpis";

import {Facebook, Instagram} from "@material-ui/icons";

const Footer = () => {
    return <div className={styles.Footer}>
        <Nadpis right text="Kontakty" />
        <div className={styles.Kontakty}>
            <div className={styles.KontaktyMini}>
                <h4>Gymnazium Nad Stolou</h4>
                <p>Telefon</p>
                <p>+420 666 111 666</p>
                <div className={styles.Divider}/>
                <p>Email</p>
                <p>robim@zdarma.com</p>
                <div className={styles.Divider}/>
                <p>Adresa</p>
                <p>Ostrava je lepsi</p>
                <div className={styles.Divider}/>
                <div className={styles.Icons}>
                    <Facebook />
                    <Instagram />
                </div>
            </div>
        </div>
    </div>
}

export default Footer;