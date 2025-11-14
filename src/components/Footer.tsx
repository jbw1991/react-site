import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 mt-8">
      <p>&copy; {new Date().getFullYear()} Josh &mdash; Software Engineer at Cloudflare</p>
    </footer>
  );
};

export default Footer;
