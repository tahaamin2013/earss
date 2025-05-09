import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer - PakIndiaWar.com | Pak VS India war 2025',
  description: 'Easy-to-read disclaimer for PakIndiaWar.com. Know what we share, what we don’t promise, and how to contact us.',
  keywords: ['PakIndiaWar', 'Disclaimer', 'easy terms', 'simple words', 'safe reading'],
  alternates: {
    canonical: 'https://www.pakindiawar.com/disclaimer',
  },
};

const Disclaimer = () => {
  return (
    <div className="max-w-4xl mt-[100px] mx-auto p-6 text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-yellow-600">Disclaimer</h1>

      <p>
        The stories on <strong>PakIndiaWar.com</strong> are only for learning and reading. We try our best to make them true, but sometimes small mistakes can happen.
      </p>

      <p>
        If you use this website and something goes wrong, we are not responsible. Please check other places too if you are making big decisions.
      </p>

      <p>
        The writers on this site share their own thoughts and feelings. We do not speak for any country or leader. We try to show both sides of the story.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Other Websites</h2>
      <p>
        Sometimes we give links to other websites. These are just to help you. We do not control those websites, so please be careful when you visit them.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Using This Site</h2>
      <p>
        If you use this website, you agree that <strong>PakIndiaWar.com</strong> is not to blame for small mistakes. Please be kind and do not write bad or hurtful things in comments.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
      <p>
        If you have questions, send us an email at <strong>contact@pakindiawar.com</strong>. We are happy to hear from you!
      </p>
    </div>
  );
};

export default Disclaimer;
