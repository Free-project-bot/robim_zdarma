import React, {Component} from 'react';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import Nadpis from "../../Component/Nadpis/Nadpis";
import Button from "../../Component/Button/Button";

import styles from './Dos.module.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

class Dos extends Component {
    render() {
        return <React.Fragment>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={35}
                infinite={true}
                isPlaying={true}
                interval={10000}
                totalSlides={3}>
                <Slider>
                    <Slide index={0} className={[styles.First, styles.Sliderinho].join(" ")}/>
                    <Slide index={1} className={[styles.Second, styles.Sliderinho].join(" ")}/>
                    <Slide index={2} className={[styles.Third, styles.Sliderinho].join(" ")}/>
                </Slider>
            </CarouselProvider>
            <div className={styles.Dos}>
                <h1>Probehla zahradni slavnost</h1>
                <Nadpis text="Aktuality" small />
                <div className={styles.Text}>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit eget erat. Aliquam erat volutpat. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Vivamus luctus egestas leo. Etiam posuere lacus quis dolor. Aenean placerat. Maecenas libero. Curabitur bibendum justo non orci. Integer tempor. Duis condimentum augue id magna semper rutrum. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Quisque tincidunt scelerisque libero. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Etiam egestas wisi a erat. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Nunc tincidunt ante vitae massa. Vivamus porttitor turpis ac leo.</p>
                    <div className={styles.Info}>
                        <small>Autor: Fachac Zadara</small><br/>
                        <small>Kategorie: Vsechno a nic</small><br/>
                        <small>Datum: 19.11.2020</small><br/>
                    </div>
                </div>
                <div className={styles.Buttons}>
                    <Button text="Zobrazit dalsi aktuality" click={() => alert("prvni")}/>
                    <Button text="Zobrazit celou fotogalerii" click={() => alert("druhy")}/>
                </div>
            </div>
        </React.Fragment>
    }
}

export default Dos;