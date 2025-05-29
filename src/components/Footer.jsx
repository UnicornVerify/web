
import { assets } from "../assets/assets";
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
};


const Footer = () => {

    const { setShowUserLogin, user, navigate } = useAppContext();

    return (
        <div>
            {/* Call to Action Section */}
            <div className="bg-primary-green text-white py-16 text-center px-6">
                <motion.h2
                    className="text-3xl font-bold mb-4"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    Ready to manage your documents with ease?
                </motion.h2>
                <motion.p
                    className="mb-6"
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    variants={fadeInUp}
                >
                    Start uploading and sharing your files in seconds.
                </motion.p>
                <motion.div initial="hidden" animate="visible" custom={3} variants={fadeInUp}>
                    <button onClick={() => { navigate('/'), scrollTo(0, 0) }}
                        className="bg-white text-gray-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 tran "
                    >
                        Upload Now
                    </button>
                </motion.div>
            </div>
            <div className="px-6 md:px-16 lg:px-24 xl:px-32 border-t border-gray-100 ">

                <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                    <div>
                        <img className="w-34 md:w-32" src={assets.logo} alt="dummyLogoColored" />
                        <p className="max-w-[410px] mt-6">Your go-to platform for simple, secure, and smart document management.</p>
                    </div>
                    <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                        <div>
                            <h4 className="font-bold text-gray-600 mb-2">Quick Links</h4>
                            <ul className="space-y-1">
                                <li onClick={() => { navigate('/'); scrollTo(0, 0) }} className="hover:underline cursor-pointer">Home</li>
                                <li onClick={() => { navigate('/about-us'); scrollTo(0, 0) }} className="hover:underline cursor-pointer">About</li>
                                <li onClick={() => { navigate('/my-documents'); scrollTo(0, 0) }} className="hover:underline cursor-pointer">My Documents</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-600 mb-2">Social Media</h4>
                            <ul className="space-y-1">
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/synoize"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/synoize"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://x.com/@synoize"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://instagram.com/synoize"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://youtube.com/@synoize"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        YouTube
                                    </a>
                                </li>
                            </ul>

                        </div>
                        <div>
                            <h4 className="font-bold text-gray-600 mb-2">Contact</h4>
                            <p>Email: support@unicornverify.in</p>
                            <p>Phone: +91 **********</p>
                        </div>
                    </div>
                </div>
                <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                    Copyright {new Date().getFullYear()} © UnicornVerify.in All Right Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
