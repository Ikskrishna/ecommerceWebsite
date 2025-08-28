import BackButton from "../components/BackButton";


const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <BackButton/>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Privacy Policy
      </h1>

      <p className="mb-6 text-sm text-gray-500 text-center">
        Last updated: August 27, 2025
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to our eCommerce website. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our platform.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <p className="text-gray-700 leading-relaxed mb-2">
          We may collect personal information such as your name, email address, phone number, shipping address, and payment details when you place an order or create an account.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Additionally, we collect non-personal data such as browser type, device information, IP address, and browsing behavior using cookies and analytics tools.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>To process your orders and deliver products</li>
          <li>To improve our website and customer service</li>
          <li>To send order confirmations and updates</li>
          <li>To notify you about promotions and offers (if opted in)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Data</h2>
        <p className="text-gray-700 leading-relaxed">
          We do not sell or rent your personal information to third parties. We may share your data with trusted service providers (e.g., shipping companies, payment processors) to fulfill your orders or with authorities when required by law.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
        <p className="text-gray-700 leading-relaxed">
          You have the right to access, update, or delete your personal data. You can also opt out of receiving promotional emails at any time by clicking the unsubscribe link or contacting us.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
        <p className="text-gray-700 leading-relaxed">
          We implement industry-standard security measures to protect your personal data. However, no online system is 100% secure, and we cannot guarantee the absolute security of your information.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
        <p className="text-gray-700 leading-relaxed">
          Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          We may update this Privacy Policy from time to time. All changes will be posted on this page, and the date of the last update will be indicated at the top.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions or concerns about our Privacy Policy, please contact us at:
        </p>
        <p className="text-gray-700 mt-2">
          📧 Email: support@yourecommerce.com
        </p>
        <p className="text-gray-700">
          📍 Address: 123 Commerce Street, Business City, Country
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
