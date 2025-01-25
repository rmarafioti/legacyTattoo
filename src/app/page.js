import Image from "next/image";
import ContactForm from "./components/ContactForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="https://res.cloudinary.com/dzpne110u/image/upload/v1737672344/legacy_tattoo/image2_eoz1lg.jpg"
          alt="Legacy Tattoo Logo"
          width={1981}
          height={1886}
          priority
          className={styles.logo}
        />
        <h1 className={styles.headLine}>Legacy Tattoo</h1>
        <p className={styles.address}>2828 N. Milwaukee Ave.</p>
        <a className={styles.phone} href="tel:+17736979793">
          {" "}
          773.697.9793
        </a>
        <h2 className={styles.tagLine}> Professional tattooing in Chicago</h2>
        <p className={styles.copy}>
          Legacy Tattoo Chicago was opened in 2019 and aims to provide a warm,
          clean and welcoming atmosphere for all of our clients, from the person
          coming in for their first tattoo to the veteran tattoo collector. We
          hope to provide a meeting place between street shop aesthetic and
          custom shop quality, with a crew of talented artists waiting to make
          your ideas come to life.
        </p>
        <section className={styles.section}>
          <div className={styles.hoursSection}>
            <p className={styles.hours}>Tuesday-Saturday:</p>
            <p className={styles.hours}>1 pm - 9 pm</p>
          </div>
          <div className={styles.hoursSection}>
            <p className={styles.hours}>Sunday:</p>
            <p className={styles.hours}>12 pm - 6 pm</p>
          </div>
          <div className={styles.hoursSection}>
            <p className={styles.hours}>Monday:</p>
            <p className={styles.hours}>By appointment</p>
          </div>
        </section>
        <section>
          <ContactForm />
        </section>

        <div className={styles.ctas}>
          <a
            href="https://www.instagram.com/legacytattoochicago/"
            target="_blank"
            className={styles.primary}
          >
            Visit Our Instagram
          </a>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
