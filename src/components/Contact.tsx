import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Add your preferred contact links here: email, LinkedIn, GitHub, or
        other platforms you use.
      </p>
      {/* Example placeholders you can replace with real links */}
      <ul className="space-y-2 text-blue-600 dark:text-blue-400">
        <li>Email: <span className="font-mono">you@example.com</span></li>
        <li>LinkedIn: <span className="font-mono">linkedin.com/in/your-handle</span></li>
        <li>GitHub: <span className="font-mono">github.com/your-handle</span></li>
      </ul>
    </section>
  );
};

export default Contact;
