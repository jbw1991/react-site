import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-4">About</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        I&apos;m Josh, a software engineer at Cloudflare focused on building
        reliable, performant services at the edge. I enjoy working with modern
        web technologies, distributed systems, and developer tools.
      </p>
    </section>
  );
};

export default About;
