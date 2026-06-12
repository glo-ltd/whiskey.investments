import LegalLayout from './LegalLayout.jsx';

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="Last updated: 12 June 2026">
      <h2>1. Who we are</h2>
      <p>Whiskey.Investments is a trading name of <strong>GRO AI LLC</strong> ("we", "us", "our"). We operate this website as an introducer for whiskey cask sales fulfilled by Great Northern Distillery Limited ("GND").</p>
      <div className="lg-address">GRO AI LLC<br />33 N Gould St<br />Sheridan, WY 82801<br />United States</div>
      <p>For the purposes of applicable data protection law, GRO AI LLC is the controller of the personal data described in this policy. Once your order pack is transmitted to GND, GND is an independent controller of the personal data it receives and processes it under its own privacy practices:</p>
      <div className="lg-address">Great Northern Distillery Limited<br />162 Clontarf Rd, Clontarf East, Dublin, D03 F6Y0, Ireland<br />Email: office@gndireland.com · Phone: +353 (0)42 941 9654 · Web: gndireland.com</div>

      <h2>2. What we collect</h2>
      <ul>
        <li><strong>Contact details</strong>: name, email address, phone number, country of residence.</li>
        <li><strong>Identity verification (KYC) data</strong>: passport details and date of birth, collected at checkout before payment.</li>
        <li><strong>Order details</strong>: the casks and crates you reserve, order references, pricing and deposit records.</li>
        <li><strong>Payment data</strong>: payments are processed by Trustly, a regulated pay-by-bank provider. Your payment is authorised directly with your bank; we do not receive or store your bank login credentials.</li>
        <li><strong>Technical data</strong>: device, browser and usage information, plus any preferences (such as language) stored in your browser.</li>
        <li><strong>Enquiries</strong>: anything you send through forms, the chat assistant or by email.</li>
      </ul>

      <h2>3. How we use your data</h2>
      <ul>
        <li>To process and manage your reservation, including identity verification.</li>
        <li>To transmit your order pack (including KYC data) to GND so it can invoice you, fulfil your order and certify your casks.</li>
        <li>To send you the investment guide or other materials you request.</li>
        <li>To respond to enquiries and provide support.</li>
        <li>To comply with legal obligations, including anti-money-laundering and record-keeping requirements.</li>
        <li>To send marketing communications where you have agreed to receive them. You can opt out at any time.</li>
      </ul>

      <h2>4. Legal bases</h2>
      <p>Where the UK or EU GDPR applies, we rely on: performance of a contract (processing your reservation), legal obligation (KYC and record-keeping), legitimate interests (operating and securing the website, responding to enquiries) and consent (marketing).</p>

      <h2>5. Who we share data with</h2>
      <ul>
        <li><strong>Great Northern Distillery Limited</strong>, to fulfil your order, as described above.</li>
        <li><strong>Trustly</strong>, for payment processing (pay-by-bank).</li>
        <li><strong>Service providers</strong> that host and support this website, under appropriate contractual safeguards.</li>
        <li><strong>Professional advisers and authorities</strong>, where required by law or to protect our legal rights.</li>
      </ul>
      <p>We do not sell your personal data.</p>

      <h2>6. International transfers</h2>
      <p>We are a United States company, and your data may be processed in the United States, Ireland and other jurisdictions. Where required, we use appropriate safeguards (such as standard contractual clauses) for transfers of UK and EU personal data.</p>

      <h2>7. Retention</h2>
      <p>We keep personal data only as long as necessary for the purposes above. KYC and transaction records are retained for the period required by applicable anti-money-laundering and tax law, after which they are deleted or anonymised.</p>

      <h2>8. Your rights</h2>
      <p>Depending on where you live, you may have rights to access, correct, delete, restrict or port your personal data, to object to processing, and to withdraw consent. To exercise any of these rights, write to us at the address in section 1. You also have the right to complain to your data protection authority (for example, the ICO in the UK or the Data Protection Commission in Ireland).</p>

      <h2>9. Security</h2>
      <p>We use reasonable technical and organisational measures to protect your data, including encrypted connections (SSL) and payment processing through Trustly. No method of transmission or storage is completely secure, and to the fullest extent permitted by law we are not liable for unauthorised access caused by events beyond our reasonable control.</p>

      <h2>10. Cookies and local storage</h2>
      <p>This website uses essential cookies and local storage to make the site work and to remember preferences such as your language and calculator settings. We do not use them to track you across other websites.</p>

      <h2>11. Children</h2>
      <p>This website and our services are not directed at anyone under 18, and we do not knowingly collect data from minors.</p>

      <h2>12. Changes to this policy</h2>
      <p>We may update this policy from time to time. The latest version will always be available on this page, with the date above showing when it was last revised.</p>

      <h2>13. Contact</h2>
      <p>Questions about this policy or your data can be sent to GRO AI LLC at the address in section 1.</p>
    </LegalLayout>
  );
}
