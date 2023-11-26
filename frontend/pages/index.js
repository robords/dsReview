import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.background_image_style}>
          <img src="/Homepage.png" alt="Home" />
        </div>
      </main>
    </div>
  );
}
