
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
};

const OnboardingScreen = () => {

    const { setShowUserLogin } = useAppContext()
    return (
        <div className="min-h-screen text-gray-800">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto sm:px-6 py-20 text-center">
                <motion.h1
                    className="text-4xl sm:text-5xl font-bold mb-4"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    Simplify Your Document Management
                </motion.h1>
                <motion.p
                    className="text-lg text-gray-600 mb-8"
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    variants={fadeInUp}
                >
                    Upload, preview, download, and organize your documents securely and easily.
                </motion.p>

                <motion.div
                    className="flex justify-center space-x-4"
                    initial="hidden"
                    animate="visible"
                    custom={3}
                    variants={fadeInUp}
                >
                    <button onClick={() => setShowUserLogin(true)}
                        className="px-6 py-3 text-nowrap bg-primary-green text-white rounded-xl hover:bg-primary-green-dull transition cursor-pointer"
                    >
                        Get Started
                    </button>
                    <Link
                        to="/about-us"
                        className="px-6 py-3 text-nowrap border border-gray-400 rounded-xl hover:bg-gray-100 transition"
                    >
                        Learn More
                    </Link>
                </motion.div>
            </div>

            {/* Features Section */}
            <div className="bg-white py-16 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-3xl font-bold text-center mb-12"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        Features You'll Love
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Upload Documents',
                                desc: 'Upload PDFs and images easily from any device.',
                                icon: '⬆️',
                            },
                            {
                                title: 'Instant Preview',
                                desc: 'View your uploaded documents without downloading.',
                                icon: '👀',
                            },
                            {
                                title: 'Secure Downloads',
                                desc: 'Download files instantly with one click.',
                                icon: '📥',
                            },
                            {
                                title: 'Smart Organization',
                                desc: 'Manage files in a clean and organized interface.',
                                icon: '🗂️',
                            },
                            {
                                title: 'Cross-Device Access',
                                desc: 'Access your documents from any device, anytime.',
                                icon: '📱💻',
                            },
                            {
                                title: 'Delete with Confirmation',
                                desc: 'Easily remove outdated documents with confidence.',
                                icon: '🗑️',
                            },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition"
                                initial="hidden"
                                animate="visible"
                                custom={i + 1}
                                variants={fadeInUp}
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>


            {/* How It Works Section */}
            <div className="sm:bg-gray-50 py-16 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-3xl font-bold text-center mb-12"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        How It Works
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {[
                            {
                                step: '1',
                                title: 'Create an Account',
                                desc: 'Sign up using your email and start managing your files securely.',
                            },
                            {
                                step: '2',
                                title: 'Upload Documents',
                                desc: 'Upload PDFs or images to view, store, or share instantly.',
                            },
                            {
                                step: '3',
                                title: 'Download or Delete',
                                desc: 'Access, download, or manage your files anytime, anywhere.',
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
                                initial="hidden"
                                animate="visible"
                                custom={i + 1}
                                variants={fadeInUp}
                            >
                                <div className="text-primary-green text-4xl font-bold mb-2">{item.step}</div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-white py-16 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        className="text-3xl font-bold text-center mb-12"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        What Our Users Say
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                name: 'Anjali R.',
                                text: 'This app made my college project submissions super easy. I just upload and share the link!',
                            },
                            {
                                name: 'Rahul S.',
                                text: 'Loved the instant PDF previews. It saves so much time and feels very modern.',
                            },
                        ].map((user, i) => (
                            <motion.div
                                key={i}
                                className="bg-gray-100 p-6 rounded-lg shadow"
                                initial="hidden"
                                animate="visible"
                                custom={i + 1}
                                variants={fadeInUp}
                            >
                                <p className="italic mb-4">"{user.text}"</p>
                                <div className="text-right font-semibold">— {user.name}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OnboardingScreen
