import { Helmet } from 'react-helmet-async';
import LegalLayout from './LegalLayout.jsx';

export default function DepositPolicy() {
  return (
    <>
      <Helmet>
        <title>Deposit Policy | Whiskey.Investments</title>
        <meta name="description" content="Non-refundable deposit policy for Whiskey.Investments. Understand why the 10% reservation deposit on AB2 Irish Single Malt casks is non-refundable." />
      </Helmet>
      <LegalLayout title="Non-Refundable Deposit Policy" updated="Last updated: 12 June 2026">
      <div className="lg-callout">
        <p><strong>In short:</strong> the 10% reservation deposit is non-refundable in all circumstances except those listed in section 6. You acknowledge this at checkout, before paying. Please do not reserve casks unless you are certain.</p>
      </div>

      <h2>1. What the deposit is</h2>
      <p>When you reserve casks through this website, you pay a deposit equal to 10% of your order value to <strong>GRO AI LLC</strong> (trading as Whiskey.Investments), 33 N Gould St, Sheridan, WY 82801, United States. Deposits are paid by bank transfer through Trustly, our pay-by-bank provider. The deposit secures your cask allocation and pays for our introduction and reservation services. The remaining 90% balance is invoiced and collected directly by Great Northern Distillery Limited ("GND") under its own terms of sale; we never hold it.</p>

      <h2>2. Why it is non-refundable</h2>
      <ul>
        <li>Casks are <strong>made to order</strong>. Production is scheduled against your reservation as soon as it is placed, and costs are incurred from that moment.</li>
        <li>Our services (verifying your identity, reserving your allocation, preparing and transmitting your order pack to GND) are performed in full, immediately. Once your order pack is transmitted to GND, our services are complete.</li>
        <li>The deposit is a genuine pre-estimate of the costs and commitments incurred on your behalf, not a penalty.</li>
      </ul>

      <h2>3. Your acknowledgement</h2>
      <p>Before any payment is taken, the checkout requires you to expressly acknowledge that the deposit is non-refundable and that casks are made to order. By completing checkout, you request that our services begin immediately and acknowledge that, once performed, any statutory right to cancel that may otherwise apply is lost to the extent permitted by law.</p>

      <h2>4. The balance</h2>
      <p>GND invoices and collects the remaining 90% directly from you. Payment terms, fulfilment and everything that follows (production, storage, insurance, certification, resale support) are governed by GND's terms of sale, not ours.</p>

      <h2>5. If you do not pay the balance</h2>
      <p>If GND's invoice for the balance is not paid within its stated payment terms, your reservation lapses and your cask allocation is released. The deposit is retained as payment for the services already performed and the costs already incurred. It is not transferable to a future order unless we agree otherwise in writing.</p>

      <h2>6. The only exceptions</h2>
      <ul>
        <li>If <strong>we cancel</strong> your reservation before your order pack has been transmitted to GND (for example, where verification fails through no fault of your own), we will refund your deposit in full.</li>
        <li>If <strong>GND is unable to accept</strong> your order and no equivalent allocation can be offered, we will refund your deposit in full.</li>
        <li>Where a refund is <strong>required by mandatory law</strong> in your country of residence that cannot be excluded by agreement.</li>
      </ul>
      <p>Refunds, where due, are made to the original payment method within 14 days.</p>

      <h2>7. Payment disputes</h2>
      <p>Initiating a payment dispute, recall or chargeback through your bank or Trustly for a deposit that has been applied in accordance with this policy is a breach of our terms. We retain checkout acknowledgement records (including your express agreement to this policy) and will use them to contest unjustified disputes.</p>

      <h2>8. Questions first</h2>
      <p>If something has gone wrong with your reservation, contact us before taking any other step. Write to GRO AI LLC at the address in section 1, or contact GND directly about invoicing and fulfilment: office@gndireland.com, +353 (0)42 941 9654.</p>

      <h2>9. Your statutory rights</h2>
      <p>Nothing in this policy affects statutory rights that cannot be excluded or limited under the law of your country of residence.</p>
    </LegalLayout>
    </>
  );
}
