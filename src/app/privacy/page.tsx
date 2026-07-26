import React from 'react';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Decorative background element */}
      <div className="fixed top-0 right-0 -z-10 w-1/2 h-1/2 bg-[#ff7b7b] opacity-5 blur-[120px] rounded-full" />
      <div className="fixed bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-[#ff7b7b] opacity-5 blur-[120px] rounded-full" />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32 relative">
        <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-16 tracking-tight">
          Privacy <span className="text-[#ff7b7b]">Policy</span>
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-12 leading-relaxed font-medium">
          <section className="space-y-4">
            <p className="text-xl md:text-2xl text-black font-semibold leading-snug">
              At Slam Out Loud (&ldquo;Slam Out Loud&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;SOL&rdquo; or &ldquo;us&rdquo;), we are committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, disclose, store and protect your personal information when you visit our website, make a donation, subscribe to our communications, participate in our programmes, or otherwise interact with us through our website.
            </p>
            <p>
              By accessing or using our website, you acknowledge that you have read and understood this Privacy Policy.
            </p>
            <p>
              The policy (&ldquo;Privacy Policy&rdquo;) will elaborate on the personal data or information that the Foundation collects and the usage and sharing of such data when you visit the Website or use the services of the Foundation. This Privacy Policy will also elaborate on the measures that we take to protect the security of the data collected.
            </p>
            <p className="pt-4 border-t border-gray-100 italic">
              Reach out to us at <a href="mailto:contact@slamoutloud.com" className="text-[#ff7b7b] font-bold hover:underline transition-all">contact@slamoutloud.com</a> for purposes of updating your contact information, removing your name from our mailing lists, or for general enquiries related to our privacy practices.
            </p>
          </section>

          <section className="space-y-6 bg-gray-50/50 p-8 md:p-12 rounded-3xl border border-gray-100">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ff7b7b] rounded-full"></span>
              Information We Collect and How We Use It
            </h2>
            <p>
              Depending on how you interact with our website, we may collect information including:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
              {[
                "Name",
                "Email address",
                "Phone number",
                "Postal address",
                "Donation details",
                "Organisation or institution details (where applicable)",
                "Information submitted through forms",
                "IP address",
                "Browser and device information",
                "Website usage information collected through cookies and analytics tools",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-[#ff7b7b] font-bold text-xl">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              We will not use or disclose (share, sell or divulge) any of your personal information to third parties unless we have been authorised by you, or are required or authorised to do so by law. We may use your personal information:
            </p>
            <ul className="grid md:grid-cols-1 gap-4 list-none pl-0">
              {[
                "for purposes related to our research, planning, program development and management;",
                "for purposes connected with the operation, administration, development or enhancement of the our services and the Website; and",
                "where we suspect that fraud or unlawful activity has been, is being or may be engaged in."
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-[#ff7b7b] font-bold text-xl">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ff7b7b] rounded-full"></span>
              Donations
            </h2>
            <p>
              When you make a donation through our Website, we may ask you to submit certain personal information that is necessary for us to process the transaction (&ldquo;Donor Data&rdquo;). We process donation payments through trusted third-party payment service providers. Slam Out Loud does not store your complete debit card, credit card or banking credentials on its systems. We will not make any other use of Donor Data other than as prescribed hereinbelow. Donor Data may be used for the following purposes:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Distributing receipts and thanking donors for donations",
                "Informing donors about upcoming fundraising and other activities of our organization",
                "Internal analysis, such as research and analytics",
                "Record keeping",
                "Reporting to applicable governmental agencies as required by law",
                "Surveys, metrics, and other analytical purposes",
                "Other purposes related to the fundraising operations"
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-center bg-white p-4 rounded-2xl border border-gray-50 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#ff7b7b]" />
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6 p-8 md:p-12 rounded-3xl bg-black text-white">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ff7b7b] rounded-full"></span>
              Cookies
            </h2>
            <p className="text-gray-300">
              We use cookies and similar technologies to improve your browsing experience, understand website usage, remember your preferences, and enhance the functionality of our website.
            </p>
            <p className="text-gray-300">
              You may disable cookies through your browser settings. However, doing so may affect certain features and functionality of the website.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ff7b7b] rounded-full"></span>
              Information We Share
            </h2>
            <p>
              Slam Out Loud does not sell, rent, trade or otherwise disclose personal information about our Website visitors (nor our offline donors), except as described herein. We share information provided by our Website visitors with service providers that we have retained to perform services on our behalf ― for example, to process donations, send direct mails, emailers, greeting cards, making phone calls, and others. We may share your information like phone numbers, email address, etc. with these agencies so that they can perform these activities efficiently. These service providers are not authorized by us to use or disclose the information except as necessary to perform services on our behalf or to comply with legal requirements.
            </p>
            <p>
              We may engage trusted third-party service providers to support its operations and services. Although we exercise reasonable care in selecting such service providers, it does not own, operate, or control them and shall not be responsible for their independent privacy practices, policies, or actions. Any personal information shared with such third parties shall also be subject to their respective privacy policies.
            </p>
            <p>
              We reserve the right to transfer any information we have about you in the event we sell or transfer all or a portion of our ownership or assets. Should such a sale or transfer occur, we will use reasonable efforts to try to direct the transferee to use personal information you have provided through this Website in a manner that is consistent with this Privacy Policy. In addition, we may disclose information about you
            </p>
            <ul className="grid md:grid-cols-1 gap-4 list-none pl-0">
              {[
                "if we are required to do so by law;",
                "in response to a request from law enforcement authorities or other government officials;",
                "when we believe disclosure is necessary or appropriate to prevent physical harm or financial loss or in connection with an investigation of suspected or actual illegal activity;",
                "as needed to protect our rights, interests, privacy, safety, property, donors, or users; or",
                "to our affiliates or subsidiaries.",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-[#ff7b7b] font-bold text-xl">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ff7b7b] rounded-full"></span>
              Security and Privacy
            </h2>
            <p>
              We maintain reasonable administrative, technical and physical safeguards designed to protect your personal information against unauthorised access, disclosure, alteration or destruction. While we strive to protect your information, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>
            <p>
              The Foundation has the necessary security mechanisms in place and only designated employees have access to your personal information. We maintain administrative, technical and physical safeguards to protect against unauthorized disclosure, use, alteration or destruction of the personal information in our possession.
            </p>
            <div className="flex items-center gap-4 bg-green-50 p-6 rounded-2xl border border-green-100 text-green-900">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 shrink-0"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <p className="text-sm font-bold">
                All online transactions are done on a secure server. You&rsquo;ll know that you&rsquo;re in a secure area of our Website when a &ldquo;lock&rdquo; icon appears on your screen and the &ldquo;http&rdquo; portion of our URL address changes to &ldquo;https.&rdquo; The &ldquo;s&rdquo; stands for &ldquo;secure.&rdquo;
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ff7b7b] rounded-full"></span>
              Choice/Opt-out
            </h2>
            <p>
              If you subscribe to receive our e-newsletters or other communications, or otherwise provide your email address through our website or engagement forms, you consent to receiving such communications from Slam Out Loud. Where applicable, we may also send newsletters to individuals whose contact details have been shared with us through prior interactions or existing professional relationships, in accordance with applicable law.
            </p>
            <p>
              You may opt out of receiving our newsletters or other promotional communications at any time by clicking the &ldquo;unsubscribe&rdquo; link included in our emails or by contacting us at <a href="mailto:contact@slamoutloud.org" className="text-[#ff7b7b] font-bold hover:underline transition-all">contact@slamoutloud.org</a>. Upon receiving your request, we will take reasonable steps to remove you from our mailing list within a reasonable period.
            </p>
            <p>
              Where your personal information is collected or processed by a third-party service provider through our website, we will endeavour to notify you so that you can make an informed decision before proceeding with the relevant service.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ff7b7b] rounded-full"></span>
              Third Party Agreement
            </h2>
            <p>
              Our website may use third-party tools such as analytics providers, payment gateways and embedded content. These third parties may collect information in accordance with their own privacy policies. We encourage you to review those privacy policies before using such services.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ff7b7b] rounded-full"></span>
              Data Retention
            </h2>
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes described in this Privacy Policy, comply with legal obligations, resolve disputes, and maintain appropriate records.
            </p>
          </section>

          <section className="space-y-6 bg-gray-50/50 p-8 md:p-12 rounded-3xl border border-gray-100">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ff7b7b] rounded-full"></span>
              Your Privacy Rights
            </h2>
            <p>
              You may contact us to:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
              {[
                "access or update your personal information;",
                "request correction of inaccurate information;",
                "unsubscribe from our communications; or",
                "raise any questions regarding our privacy practices.",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-[#ff7b7b] font-bold text-xl">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Please contact us at <a href="mailto:contact@slamoutloud.org" className="text-[#ff7b7b] font-bold hover:underline transition-all">contact@slamoutloud.org</a>.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ff7b7b] rounded-full"></span>
              Changes to this Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page together with the revised &ldquo;Last Updated&rdquo; date. Your continued use of the website after any changes become effective constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ff7b7b] rounded-full"></span>
              Notification of Changes
            </h2>
            <p>
              If we change our privacy policy, we will post these changes to ensure that our users are always aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it.
            </p>
            <p>
              If at any point we decide to use personally identifiable information in a manner different from that stated at the time it was collected, we will notify users by way of an email at the last address provided and/or by prominently posting notice of the changes on our website. Users will have a choice as to whether or not we use their information in this different manner. We will use information in accordance with the privacy policy under which information was collected. Any such changes may affect our use and sharing of personal information that you provided to us before our notification to you of the changes. If you do not wish to permit changes in our collection, use, or sharing of personal information that you have provided to us before the effective date of such changes, you must notify us before that effective date. Please be advised, however, that regardless of whether you provide such notice to us, the changes to this privacy policy will apply to any personal information that you provide to us on or after the effective date of such changes.
            </p>
          </section>

          <p className="pt-4 border-t border-gray-100 text-sm text-gray-500 not-italic">
            Last update: 21st July 2026
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
