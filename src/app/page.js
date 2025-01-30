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
        <p className={styles.address}>2828 N. Milwaukee Ave.</p>
        <a className={styles.phone} href="tel:+17736979793">
          {" "}
          773.697.9793
        </a>
        <section className={styles.section} id={styles.heroSection}>
          <section className={styles.section} id={styles.middleSection}>
            <h2 className={styles.tagLine}>
              {" "}
              Professional Tattooing In Chicago.
            </h2>
            <p className={styles.copy}>
              Legacy Tattoo Chicago was opened in 2019 and aims to provide a
              warm, clean and welcoming atmosphere for all of our clients, from
              the person coming in for their first tattoo to the veteran tattoo
              collector. We hope to provide a meeting place between street shop
              aesthetic and custom shop quality, with a crew of talented artists
              waiting to make your ideas come to life.
            </p>
          </section>
          <iframe
            className={styles.igWidget}
            src="https://snapwidget.com/embed/1087637"
            allowtransparency="true"
            frameBorder="0"
            scrolling="no"
            title="Posts from Instagram"
          ></iframe>
        </section>
        <section className={styles.section} id={styles.contactSection}>
          <div className={styles.hoursHolder}>
            <h3 className={styles.contactUs}>Hours</h3>
            <section className={styles.hoursConatainer}>
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5936.397446157474!2d-87.71116!3d41.931581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcd7413195555%3A0x2fa456f79d93178!2sLegacy%20Tattoo%20Chicago!5e0!3m2!1sen!2sus!4v1738202085970!5m2!1sen!2sus"
              width="600"
              height="450"
              className={styles.map}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={styles.contactContainer}>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
