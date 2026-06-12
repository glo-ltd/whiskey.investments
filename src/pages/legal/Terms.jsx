import { Link } from 'react-router-dom';
import LegalLayout from './LegalLayout.jsx';

export default function Terms() {
  return (
    <LegalLayout title="Terms &amp; Conditions" updated="Last updated: 12 June 2026">
      <div className="lg-callout">
        <p><strong>In short:</strong> we are an introducer, not the seller. Your cask purchase contract is with Great Northern Distillery Limited. We provide information, not advice. Whiskey cask investment is unregulated and your capital is at risk. Our liability is limited to the deposit we actually received from you.</p>
      </div>

      <h2>1. Who we are</h2>
      <p>Whiskey.Investments is a trading name of <strong>GRO AI LLC</strong> ("we", "us", "our"), a limited liability company registered in Wyoming, United States.</p>
      <div className="lg-address">GRO AI LLC<br />33 N Gould St<br />Sheridan, WY 82801<br />United States</div>
      <p>By using this website or placing a reservation, you agree to these terms. If you do not agree, do not use the website.</p>

      <h2>2. Our role: introducer only</h2>
      <p>We operate a reservation storefront and act solely as an <strong>introducer</strong> for whiskey cask sales fulfilled by:</p>
      <div className="lg-address">Great Northern Distillery Limited ("GND")<br />162 Clontarf Rd, Clontarf East, Dublin, D03 F6Y0, Ireland<br />Email: office@gndireland.com · Phone: +353 (0)42 941 9654 · Web: gndireland.com</div>
      <p>The contract for the sale, production, storage, insurance, certification and any resale of casks is between <strong>you and GND</strong>. We are not a party to that contract. We collect a 10% reservation deposit and transmit your order pack to GND; GND invoices and collects the remaining balance directly from you. We never hold the balance, we do not own or hold casks, and we make no promises on GND's behalf. GND's own terms of sale apply to your purchase from GND.</p>

      <h2>3. No advice, no regulated services</h2>
      <ul>
        <li>Everything on this website is general information, not financial, investment, legal or tax advice, and not a personal recommendation.</li>
        <li>We are not authorised or regulated by the UK Financial Conduct Authority, the US Securities and Exchange Commission, the Central Bank of Ireland or any other financial regulator, and we do not provide regulated services.</li>
        <li>Whiskey cask investment is not a regulated investment in the UK. No FSCS protection or Financial Ombudsman Service recourse applies, and no equivalent scheme applies elsewhere.</li>
        <li>You should take independent financial, legal and tax advice before reserving casks.</li>
      </ul>

      <h2>4. Risk</h2>
      <p>The value of whiskey casks can go down as well as up. Past performance, including any third-party figures quoted on this website (such as the Knight Frank Wealth Report), is illustrative only and is not a guide to or guarantee of future returns. There is no guaranteed exit price, buyer or timescale. You should never invest more than you can afford to lose.</p>

      <h2>5. Eligibility</h2>
      <p>You must be at least 18 years old and have full legal capacity to place a reservation. You are responsible for ensuring that purchasing whiskey casks is lawful where you live, and for any taxes or duties that apply to you.</p>

      <h2>6. Reservations, deposits and verification</h2>
      <ul>
        <li>Reservations are placed through this website and secured with a 10% deposit, which is <strong>non-refundable</strong> as set out in our <Link to="/legal/deposit-policy">Non-refundable deposit policy</Link>, which forms part of these terms.</li>
        <li>Identity verification (KYC) is required at checkout before payment. We may decline or cancel any reservation that fails verification or that we reasonably suspect involves fraud or unlawful activity.</li>
        <li>All prices, discounts and projections shown on this website are indicative until confirmed in GND's invoice.</li>
      </ul>

      <h2>7. Information on this website</h2>
      <p>Information on this website, including cask availability, pricing, projections and distillery information, is provided "as is" and in part derives from GND and other third-party sources. While we try to keep it accurate, we do not warrant its accuracy, completeness or timeliness, and we may change it at any time without notice. Calculator outputs are illustrations, not offers or forecasts.</p>

      <h2>8. Limitation of liability</h2>
      <ul>
        <li>To the fullest extent permitted by law, we exclude all warranties, conditions and representations not expressly set out in these terms.</li>
        <li>We are not liable for any indirect, incidental, special or consequential loss, loss of profit, loss of opportunity, or loss of data, however arising.</li>
        <li>We are not liable for the acts, omissions, solvency or performance of GND or any other third party, including production, storage, insurance, certification, valuations, resale outcomes or payment processing (including our payment provider, Trustly).</li>
        <li>Our total aggregate liability to you arising out of or in connection with this website and our services shall not exceed the amount of the deposit we actually received from you, or USD 100 if you have not paid a deposit.</li>
        <li>Nothing in these terms excludes or limits liability that cannot be excluded or limited by applicable law, including liability for fraud. If you are a consumer, your mandatory statutory rights are unaffected.</li>
      </ul>

      <h2>9. Indemnity</h2>
      <p>You agree to indemnify us against claims, losses and costs arising from your breach of these terms, your misuse of the website, or your breach of any law.</p>

      <h2>10. Intellectual property</h2>
      <p>The content, design and branding of this website belong to us or our licensors. You may not copy, reproduce or use them commercially without our written consent.</p>

      <h2>11. Force majeure</h2>
      <p>We are not liable for any failure or delay caused by events beyond our reasonable control, including acts of government, natural events, strikes, utility or network failures, or failures of third-party services.</p>

      <h2>12. Changes</h2>
      <p>We may update these terms from time to time. The version published on this page at the time you place a reservation applies to that reservation.</p>

      <h2>13. General</h2>
      <p>If any provision of these terms is found unenforceable, the remainder stays in force. A failure to enforce a right is not a waiver of it. You may not assign your rights under these terms without our consent. These terms, together with the Privacy Policy and the Non-refundable deposit policy, are the entire agreement between you and us regarding the website.</p>

      <h2>14. Governing law and jurisdiction</h2>
      <p>These terms are governed by the laws of the State of Wyoming, United States, and the state and federal courts located in Wyoming have exclusive jurisdiction, except where mandatory consumer protection law in your country of residence provides otherwise. For the avoidance of doubt, your purchase contract with GND may be governed by different terms and law as set out by GND.</p>

      <h2>15. Contact</h2>
      <p>Questions about these terms can be sent to GRO AI LLC at the address in section 1. Questions about your cask purchase, invoice, storage or certificates should go to GND using the contact details in section 2.</p>
    </LegalLayout>
  );
}
