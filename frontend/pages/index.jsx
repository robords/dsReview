import styles from '../styles/Home.module.css';
import SVGImage from '../components/SVGImage';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className={styles.container}>
            <main>
                <div className={styles.home_background_image_style}>
                    <SVGImage src="/Homepage.svg" />
                    <Footer/>
                </div>
            </main>
        </div>
    );
}
