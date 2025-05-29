import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto sm:px-6 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        About Our Platform
      </motion.h1>

      <motion.section className="mb-10" initial="hidden" animate="visible" custom={1} variants={fadeInUp}>
        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
        <p className="text-gray-700 leading-relaxed">
          Our web application simplifies document management for everyone — students, teachers, freelancers, and professionals. Upload, preview, download, and manage documents securely, all in one platform.
        </p>
      </motion.section>

      <motion.section className="mb-10" initial="hidden" animate="visible" custom={2} variants={fadeInUp}>
        <h2 className="text-2xl font-semibold mb-4">Core Features</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>📄 Upload and preview Documents</li>
          <li>🔒 Secure file handling with cloud storage</li>
          <li>📥 One-click downloads</li>
          <li>🗑️ Easy deletion with confirmation</li>
          <li>⚡ Responsive design for all devices</li>
        </ul>
      </motion.section>

      <motion.section className="mb-10" initial="hidden" animate="visible" custom={3} variants={fadeInUp}>
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          We aim to provide a smooth and secure way to manage your digital documents — accessible anytime, anywhere, with maximum ease.
        </p>
      </motion.section>

      <motion.section className="mb-10" initial="hidden" animate="visible" custom={4} variants={fadeInUp}>
        <h2 className="text-2xl font-semibold mb-4">Who Can Use This?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>📚 Students uploading assignments or notes</li>
          <li>👩‍🏫 Teachers managing learning materials</li>
          <li>🧑‍💼 Freelancers sharing client files</li>
          <li>👥 Teams collaborating on shared documents</li>
        </ul>
      </motion.section>

      <motion.section initial="hidden" animate="visible" custom={5} variants={fadeInUp}>
        <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
        <p className="text-gray-700 leading-relaxed">
          <a href="https://cloudinary.com/trust" target="_blank" rel="noopener noreferrer" className='hover:underline text-blue-700'>Cloudinary</a> are committed to protecting your data and giving you the best user experience. Your feedback matters — help us make document management better for everyone.
        </p>
      </motion.section>
    </div>
  );
};

export default AboutUs;
