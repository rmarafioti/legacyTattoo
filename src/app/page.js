import Image from "next/image";
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
          blurDataURL="data:..."
          placeholder="blur"
          className={styles.logo}
        />
        <h1 className={styles.headLine}>Legacy Tattoo</h1>
        <p className={styles.address}>2828 N. Wilwaukee Ave.</p>
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
          <form className={styles.contactForm}>
            <label className={styles.label}>
              Name:{" "}
              {/*{validationError.user_name && (
          <p className={styles.error}>*Please enter your name*</p>
        )}*/}
            </label>
            <input
              className={styles.form}
              type="text"
              name="user_name"
              aria-label="user_name"
              required
            />
            <label className={styles.label}>Email: </label>
            <input
              className={styles.form}
              type="email"
              name="user_email"
              aria-label="user_email"
            />
            <label className={styles.label}>Phone: </label>
            <input
              className={styles.form}
              type="text"
              name="user_phone"
              aria-label="user_phone_number"
              required
            />
            <label className={styles.label}>Additional information:</label>
            <textarea
              className={styles.messageForm}
              name="message"
              aria-label="users_additional_information"
            />
            <input
              className={styles.formSubmit}
              type="submit"
              aria-label="form_submit_button"
            />
            {/*} {validationError.user_name && (
        <p className={styles.errorBottom}>*Please enter your name*</p>
      )}
      {validationError.user_email && (
        <p className={styles.errorBottom}>
          *Please enter a valid email address*
        </p>
      )}
      {validationError.user_phone && (
        <p className={styles.errorBottom}>
          *Please enter a valid phone number*
        </p>
      )}
      {messageStatus === "error" && (
        <p className={styles.errorMessage}>
          **Message failed to send. Please try again**
        </p>
      )}*/}
          </form>
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
