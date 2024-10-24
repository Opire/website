import styles from "./styles.module.css";
import { Header } from "../_shared/_components/Header/Header";
import { Footer } from "../_shared/_components/Footer/Footer";
import { LogoMask } from "../home/_sections/Hero/_components/LogoMask/LogoMask";
import { Container } from "../_shared/_components/Container/Container";

export default function CookiePolicyPage() {
  return (
    <div className={styles.page}>
      <Header />
      <LogoMask />
      <main className={styles.main}>
        <Container>
          <h1>Cookie Policy</h1>
          <p>
            Effective Date: August 17, 2024
          </p>
          <p>
            We use cookies to help improve your experience of our website at https://opire.dev. This cookie policy is part of Opire LLC's privacy policy. It covers the use of cookies between your device and our site.
          </p>
          <p>
            We also provide basic information on third-party services we may use, who may also use cookies as part of their service. This policy does not cover their cookies.
          </p>
          <p>
            If you don’t wish to accept cookies from us, you should instruct your browser to refuse cookies from https://opire.dev. In such a case, we may be unable to provide you with some of your desired content and services.
          </p>
          <h2>What is a cookie?</h2>
          <p>
            A cookie is a small piece of data that a website stores on your device when you visit. It typically contains information about the website itself, a unique identifier that allows the site to recognise your web browser when you return, additional data that serves the cookie’s purpose, and the lifespan of the cookie itself.
          </p>
          <p>
            Cookies are used to enable certain features (e.g. logging in), track site usage (e.g. analytics), store your user settings (e.g. time zone, notification preferences), and to personalize your content (e.g. advertising, language).
          </p>
          <p>
            Cookies set by the website you are visiting are usually referred to as first-party cookies. They typically only track your activity on that particular site.
          </p>
          <p>
            Cookies set by other sites and companies (i.e. third parties) are called third-party cookies. They can be used to track you on other websites that use the same third-party service.
          </p>
          <h2>Types of cookies and how we use them</h2>
          <h3>Essential cookies</h3>
          <p>
            Essential cookies are crucial to your experience of a website, enabling core features like user logins, account management, shopping carts, and payment processing.
          </p>
          <p>
            We use essential cookies to enable certain functions on our website.
          </p>
          <h3>Performance cookies</h3>
          <p>
            Performance cookies track how you use a website during your visit. Typically, this information is anonymous and aggregated, with information tracked across all site users. They help companies understand visitor usage patterns, identify and diagnose problems or errors their users may encounter, and make better strategic decisions in improving their audience’s overall website experience. These cookies may be set by the website you’re visiting (first-party) or by third-party services. They do not collect personal information about you.
          </p>
          <p>
            We do not use this type of cookie on our site.
          </p>
          <h3>Functionality cookies</h3>
          <p>
            Functionality cookies are used to collect information about your device and any settings you may configure on the website you’re visiting (like language and time zone settings). With this information, websites can provide you with customized, enhanced, or optimized content and services. These cookies may be set by the website you’re visiting (first-party) or by third-party services.
          </p>
          <p>
            We do not use this type of cookie on our site.
          </p>
          <h3>Targeting/advertising cookies</h3>
          <p>
            Targeting/advertising cookies help determine what promotional content is most relevant and appropriate to you and your interests. Websites may use them to deliver targeted advertising or limit the number of times you see an advertisement. This helps companies improve the effectiveness of their campaigns and the quality of content presented to you. These cookies may be set by the website you’re visiting (first-party) or by third-party services. Targeting/advertising cookies set by third-parties may be used to track you on other websites that use the same third-party service.
          </p>
          <p>
            We do not use this type of cookie on our site.
          </p>
          <h2>How Can You Control Our Website's Use of Cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies on our website. Please note that Essential cookies cannot be rejected as they are strictly necessary to provide you with the services on our website.
          </p>
          <p>
            You may be able to set or amend your cookie preferences by managing your web browser settings. As each web browser is different, please consult the instructions provided by your web browser (typically in the "help" section). If you choose to refuse or disable cookies you may still use the website, though some of the functionality of the website may not be available to you.
          </p>
          <h2>How Often Will We Update This Cookie Policy?</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect any changes to the cookies and related technologies we use, or for other operational, legal or regulatory reasons.
          </p>
          <p>
            Each time you use our Website, the current version of the Cookie Policy will apply. When you use our Website, you should check the date of this Cookie Policy (which appears at the top of this document) and review any changes since the last version.
          </p>
          <h2>Where Can You Obtain Further Information?</h2>
          <p>
            For any questions or concerns regarding our Cookie Policy, you may contact us using the following details:
          </p>
          <p>
            Opire
          </p>
          <a href="mailto:opiredev@gmail.com" target="_blank">opiredev@gmail.com</a>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
