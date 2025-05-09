import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer - PakIndiaWar.com',
  description: 'Read the Disclaimer of PakIndiaWar.com to understand the terms of use, limitations, and external links provided on the site.',
  keywords: ['PakIndiaWar', 'Disclaimer', 'terms of use', 'information accuracy', 'external links'],
  alternates: {
    canonical: 'https://www.pakindiawar.com/disclaimer',
  },


};

const Disclaimer = () => {
  return (
    <div className="max-w-4xl mt-[100px] mx-auto p-6 text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-yellow-600">Disclaimer</h1>
      <p>
        The information on <strong>PakIndiaWar.com</strong> is provided for general informational purposes only. While we make every effort to ensure the accuracy of the content we share, we cannot guarantee that all the information presented on this website is 100% correct. We encourage our readers to cross-check facts and consult other sources when making important decisions.
      </p>
      <p>
        <strong>PakIndiaWar.com</strong> is not responsible for any loss or damage resulting from the use of this website or reliance on its content. All information provided is at the users own risk.
      </p>
      <p>
        The views expressed in our articles are solely those of the authors and do not reflect the views or opinions of any political organization or government. We do not endorse any particular viewpoint or position. Our goal is to offer balanced perspectives based on historical facts, real-life experiences, and personal stories.
      </p>
      <h2 className="text-2xl font-semibold mt-6">External Links</h2>
      <p>
        <strong>PakIndiaWar.com</strong> may contain links to other websites. These external links are provided for convenience and informational purposes only. We have no control over the content or availability of these sites, and we do not take responsibility for any information or services provided by these third-party websites.
      </p>
      <h2 className="text-2xl font-semibold mt-6">User Agreement</h2>
      <p>
        By using this website, you agree to hold <strong>PakIndiaWar.com</strong> and its contributors harmless for any inaccuracies or errors in the content. We encourage respectful discourse and encourage our readers to avoid posting offensive or harmful material.
      </p>
      <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
      <p>
        If you have any questions, comments, or concerns about this disclaimer, please feel free to reach out to us via email at contact@pakindiawar.com.
      </p>
    </div>
  );
};

export default Disclaimer;
