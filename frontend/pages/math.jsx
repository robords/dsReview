import styles from '../styles/Home.module.css';
import SVGImage from '../components/SVGImage';
import Footer from '../components/Footer';

export default function Math() {
    //https://dsreview.pages.dev"
    //[href='https://dsreview.pages.dev/math']

    return (
        <div className={styles.container}>
            <main>
                <div className={styles.math_background_image_style}
                     align="center" >
                    <SVGImage src="/MathStatistics.svg"/>
                    <Footer/>
                </div>
            </main>
        </div>
    );
}