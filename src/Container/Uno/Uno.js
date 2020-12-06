import React, {Component} from 'react';

import Nadpis from "../../Component/Nadpis/Nadpis";

import styles from './Uno.module.css';
import TablePart from "../../Component/TablePart/TablePart";

class Uno extends Component {
    state = {
        items: [
            {popis: "Dokument cislo 1", datum: "15.11.2020", click: () => alert("downloading file1")},
            {popis: "Dokument cislo 2", datum: "16.11.2020", click: () => alert("downloading file2")},
            {popis: "Dokument cislo 3", datum: "17.11.2020", click: () => alert("downloading file3")},
            {popis: "Dokument cislo 4", datum: "18.11.2020", click: () => alert("downloading file4")},
            {popis: "Dokument cislo 5", datum: "19.11.2020", click: () => alert("downloading file5")},
            {popis: "Dokument cislo 6", datum: "20.11.2020", click: () => alert("downloading file6")},
            {popis: "Dokument cislo 7", datum: "21.11.2020", click: () => alert("downloading file7")},
            {popis: "Dokument cislo 8", datum: "22.11.2020", click: () => alert("downloading file8")},
        ],
        datumF: "",
        popisF: ""
    }

    render() {
        const files = this.state.items
            .filter(d => d.popis.includes(this.state.popisF))
            .filter(d => d.datum.includes(this.state.datumF));

        return <div className={styles.Uno}>
            <h1>Dokumenty ke stazeni</h1>
            <div className={styles.Filters}>
                <div className={styles.Row}>
                    <div className={styles.RowHalf}>
                        <h3>Kategorie</h3>
                        <select name="kategorie" id="kategorie">
                            <option value="netusim">netusim</option>
                            <option value="co">co</option>
                            <option value="tady">tady</option>
                            <option value="dat">dat</option>
                        </select>
                    </div>
                    <div className={styles.RowHalfSecond}>
                        <h3>Datum nahrani</h3>
                        <select name="datumy" id="datumy" onChange={(event) => this.setState({datumF: event.target.value})}>
                            <option value=""/>
                            {this.state.items.map(a => <option key={a.datum} value={a.datum}>{a.datum}</option>)}
                        </select>
                    </div>
                </div>
                <div className={styles.Row}>
                    <h3>Klicova slova</h3>
                    <input value={this.state.popisF} onChange={(event) => this.setState({popisF: event.target.value})} placeholder="zadejte neco co ma nazev dokumentu obsahovat"/>
                </div>
            </div>
            <Nadpis text="Nejhledanejsi dokumenty"/>
            <div className={styles.Files}>
                {files.length === 0 ? <p>No files here</p> : files.map(d => <TablePart key={d.popis} click={d.click} datum={d.datum} popis={d.popis}/>)}
            </div>
        </div>
    }
}

export default Uno;