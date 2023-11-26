import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SVGImage from '../components/SVGImage';
import Image from 'next/image'
export default function Home() {
    return (
            <main>
                <div className={styles.background_image_style}>
                    <SVGImage src="/Homepage.svg" />
                </div>
            </main>
    );
}
