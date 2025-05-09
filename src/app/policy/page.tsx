import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - PakIndiaWar.com',
  description: 'Very easy Privacy Policy of PakIndiaWar.com. Learn how we protect your info and keep you safe.',
  keywords: ['PakIndiaWar', 'Privacy Policy', 'simple words', 'cookies', 'safety'],
  alternates: {
    canonical: 'https://www.pakindiawar.com/policy',
  },
};

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mt-[100px] mx-auto p-6 text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">Privacy Policy</h1>

      <p>
        We care about your privacy on <strong>PakIndiaWar.com</strong>. We do not ask for your personal info like your name or email, unless you send it to us yourself.
      </p>

      <p>
        We never sell or share your info. We try our best to keep your data safe.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Cookies</h2>
      <p>
        Sometimes our site uses cookies. Cookies are small files that help us understand how you use the site. You can turn off cookies in your browser if you don’t want them, but some parts of the site might not work right.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Other Tools We Use</h2>
      <p>
        We use tools like Google Analytics. These tools tell us how many people visit and what they do on the site. These tools do not collect your name or email.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Other Websites</h2>
      <p>
        Our site may have links to other websites. We are not in control of those websites. Please read their privacy rules before sharing anything there.
      </p>

      <h2 className="text-2xl font-semibold mt-6">You Agree</h2>
      <p>
        When you use <strong>PakIndiaWar.com</strong>, you agree to follow this privacy policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
      <p>
        If you have any questions, please email us at <strong>contact@pakindiawar.com</strong>. We are happy to help.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
