import styles from '../styles/Home.module.css';
import SVGImage from '../components/SVGImage';
import Footer from '../components/Footer';
import mathsvg from '../public/Math and Statistics.svg';


export default function Math() {
    //style={{ backgroundImage: `url(${mathsvg})` }}
    return (
        <div className={styles.container}>
            <main>
                <div className={styles.math_background_image_style}
                     align="center" >
                    <SVGImage src="/Math and Statistics.svg" />
                    <Footer/>
                </div>
            </main>
        </div>
    );
}