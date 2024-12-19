import styles from "./styles.module.css";
import { Header } from "../_shared/_components/Header/Header";
import { Footer } from "../_shared/_components/Footer/Footer";
import { LogoMask } from "../home/_sections/Hero/_components/LogoMask/LogoMask";
import { Container } from "../_shared/_components/Container/Container";

export default function TermsOfServicePage() {
  return (
    <div className={styles.page}>
      <Header />
      <LogoMask />
      <main className={styles.main}>
        <Container>
          <h1>Terms of Service</h1>
          <p>
            These Terms of Service govern your use of the website located at https://opire.dev and any related services provided by Opire LLC.
          </p>
          <p>
            By accessing https://opire.dev, you agree to abide by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree with these Terms of Service, you are prohibited from using or accessing this website or using any other services provided by Opire LLC.
          </p>
          <p>
            We, Opire LLC, reserve the right to review and amend any of these Terms of Service at our sole discretion. Upon doing so, we will update this page. Any changes to these Terms of Service will take effect immediately from the date of publication.
          </p>
          <p>
            These Terms of Service were last updated on August 24, 2024.
          </p>
          <h2>Limitations of Use</h2>
          <p>
            By using this website, you warrant on behalf of yourself, your users, and other parties you represent that you will not:
          </p>
          <ul>
            <li>modify, copy, prepare derivative works of, decompile, or reverse engineer any materials and software contained on this website;</li>
            <li>remove any copyright or other proprietary notations from any materials and software on this website;</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server;</li>
            <li>knowingly or negligently use this website or any of its associated services in a way that abuses or disrupts our networks or any other service Opire LLC provides;</li>
            <li>use this website or its associated services to transmit or publish any harassing, indecent, obscene, fraudulent, or unlawful material;</li>
            <li>use this website or its associated services in violation of any applicable laws or regulations;</li>
            <li>use this website in conjunction with sending unauthorized advertising or spam;</li>
            <li>harvest, collect, or gather user data without the user’s consent; or</li>
            <li>use this website or its associated services in such a way that may infringe the privacy, intellectual property rights, or other rights of third parties.</li>
          </ul>
          <h2>Registration and Payments</h2>
          <p>
            To access and utilize the services provided by Opire LLC, users are required to register and create an account. During registration, it is imperative that all information provided be accurate, current, and complete. Users must promptly update their account information to reflect any changes. Users are solely responsible for maintaining the security of their account credentials and for all activities that occur under their account. In the event of unauthorized access to your account, you must notify Opire LLC immediately. We are not liable for any loss or damage resulting from your failure to protect your account information.
          </p>
          <p>
            Upon account creation, and when making payments, users must provide financial information relevant to the chosen payment method, which may include credit card details. Stripe processes all payments on our platform. Opire LLC does not process or retain any financial information directly; instead, Stripe manages all financial data in accordance with their own Terms of Service, which you must agree to and comply with.
          </p>
          <p>
            Opire offers various subscription plans that provide benefits, including discounted service fees and access to exclusive features, such as webhooks. These subscriptions are available with monthly or annual billing options. Subscription tiers cannot be changed until the next renewal period. However, subscriptions can be paused or cancelled at any time. No refunds will be provided for any portions of the subscription fee already paid, but users will retain access to subscribed services until the end of the current billing cycle. For example, if a user cancels a monthly subscription, access to the services continues until a month has elapsed since the start of the subscription; for an annual subscription, access continues until the end of the year.
          </p>
          <h2>Creation and Fulfillment of Bounties</h2>
          <p>
            Users may create financial incentives known as "Bounties" to prompt the resolution of specific issues in software projects. These Bounties are intended to attract developers who can address and resolve these issues. When a developer successfully resolves an issue associated with a Bounty, they are entitled to receive 100% of the Bounty amount. The user who posts the Bounty is responsible for covering all associated costs, including a service fee of 4% to Opire and transaction fees charged by our payment processing partner, Stripe. The total amount paid by the Customer includes the Bounty, Opire's fee, and applicable Stripe transaction fees. Upon successful payment confirmation through Stripe Checkout, the funds are transferred directly to the developer’s Stripe account.
          </p>
          <p>
            It is important to note that while Opire LLC facilitates the posting and resolution of these Bounties, the contractual relationship is directly between the customer and the developer. Opire LLC is not responsible for the failure of any Customer to pay a Bounty, and the obligation to pay for the service provided rests solely with the Customer. This structure ensures that Developers receive the agreed-upon amount for their services, while Opire serves solely as the platform provider and not as a party to the transactions.
          </p>
          <h2>Dispute Resolution and Platform Intervention</h2>
          <p>
            While Opire is not obligated to intervene in disputes between Customers and Developers, we may, at our discretion, contact a Customer in response to complaints received from Developers regarding non-payment. This contact is not mandatory and is intended as a facilitation service rather than an enforcement measure. Users are encouraged to resolve their disputes independently, using Opire as a platform for communication and resolution where possible.
          </p>
          <h2>Intellectual Property and User Responsibilities</h2>
          <p>
            When you use our website or its associated services to post, upload, share, or otherwise transmit content covered by intellectual property rights, such as code, documentation, or other materials, you retain ownership over your content. You grant Opire LLC a non-exclusive, royalty-free, transferable, sub-licensable, worldwide license to use, distribute, modify, run, copy, publicly display, translate, or create derivative works from your content. This licensing is consistent with your privacy preferences and governed by our Privacy Policy. You may terminate this license at any time by removing your content or deleting your account, but the license will persist for any commercial or sponsored content that remains active. We are also permitted to use your username and other identifying information in accordance with our Privacy Policy.
          </p>
          <p>
            By engaging with the Opire platform, whether by creating Bounties or participating in development tasks, you agree to abide by these terms and the operational procedures outlined by Opire LLC. You acknowledge that while Opire facilitates the transactions and postings of Bounties, it does not bear responsibility for the actions of individual users or the outcomes of engagements initiated through the platform.
          </p>
          <h2>Ethical Use Policy</h2>
          <p>
            Opire has implemented algorithms and automatic detection systems designed to identify and mitigate unethical behavior on our platform. This includes, but is not limited to, actions such as Customers systematically failing to pay Bounties even after a Developer has successfully completed the stipulated tasks. Should such behavior be detected, Opire will take action to prevent these users from creating new Bounties. The affected user's ability to create Bounties will be disabled until such time as they have rectified their outstanding obligations and demonstrated compliance with our ethical use standards.
          </p>
          <h2>Disclaimer and Limitations of Liability</h2>
          <p>
            Opire LLC provides the website and all associated services on an "as is" and "as available" basis. This means that we do not represent or warrant to the accuracy, completeness, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. We disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p>
            In no event will Opire LLC, or its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the website; (ii) any conduct or content of any third party on the website; (iii) any content obtained from the website; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
          </p>
          <p>
            Because some jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such jurisdictions, our liability shall be limited to the maximum extent permitted by law.
          </p>
          <h2>Accuracy of Materials</h2>
          <p>
            The materials appearing on Opire LLC's website are provided for general information purposes only and are not intended as legal, financial, or other professional advice. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
          </p>
          <p>
            We reserve the right to make changes to the content on our site at any time and without notice. This may include, but is not limited to, updates, maintenance, and modifications to features or functionality. Users are encouraged to confirm the accuracy of the information provided by consulting directly with the service providers or by gathering information from other reliable sources. Opire LLC is not responsible for any discrepancies or shortcomings of the information provided or the consequences of using this information.
          </p>
          <h2>Additional Tools</h2>
          <p>
            Please note that our website may include third-party tools which are outside of our control. The access to said tools is provided on an 'as is' basis with no warranties, expressed or implied, and without any endorsement. We are not liable for the use of the third-party tools provided on our website. You are solely responsible for any risks associated with using said tools, we recommend reading the relevant third-party provider’s Terms of Service. Opire LLC has the right to offer new third-party tools in the future.
          </p>
          <h2>Links</h2>
          <p>
            Opire LLC has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement, approval or control by Opire LLC of the site. Use of any such linked site is at your own risk and we strongly advise you make your own investigations with respect to the suitability of those sites.
          </p>
          <h2>Inaccuracies and Mistakes</h2>
          <p>
            Please note that any content available on our website may contain typographical errors, inaccuracies, or mistakes related to the service’s description, pricing, promotion, and availability. We have the right to cancel or update any existing services should any information provided by us be proven inaccurate. Said information can be amended at any time without prior notice. Please note that we are not obligated to clarify any of the information related to our website and service, including pricing information, except as required by law.
          </p>
          <h2>Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the website; (3) breach of these Terms of Service; (4) any breach of your representations and warranties set forth in these Terms of Service; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the website with whom you connected via the website.
          </p>
          <p>
            Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
          </p>
          <h2>Right to Terminate</h2>
          <p>
            We may suspend or terminate your right to use our website and terminate these Terms of Service immediately upon written notice to you for any breach of these Terms of Service.
          </p>
          <h2>Severance</h2>
          <p>
            Any term of these Terms of Service which is wholly or partially void or unenforceable is severed to the extent that it is void or unenforceable. The validity of the remainder of these Terms of Service is not affected.
          </p>
          <h2>Entire Agreement</h2>
          <p>
            These Terms of Service and any policies or operating rules posted by us on the website or with respect to the website constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Service shall not operate as a waiver of such right or provision. These Terms of Service operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control.
          </p>
          <p>
            If any provision or part of a provision of these Terms of Service is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Service and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment, or agency relationship created between you and us as a result of these Terms of Service or use of the website. You agree that these Terms of Service will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Service and the lack of signing by the parties hereto to execute these Terms of Service.
          </p>
          <h2>Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of Delaware. You irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
