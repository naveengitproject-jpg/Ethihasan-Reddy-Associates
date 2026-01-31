import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-secondary-500 font-semibold tracking-wide uppercase text-sm mb-2">Get in Touch</h2>
                        <h3 className="text-4xl font-bold text-gray-900 mb-6 font-display">
                            Ready to work with us?
                        </h3>
                        <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                            Reach out to us for expert financial advice and professional services. We are here to assist you with all your accounting and taxation needs.
                        </p>

                        <div className="space-y-8">
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-start group"
                            >
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                        <MapPin size={24} />
                                    </div>
                                </div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors">Visit Us</h4>
                                    <p className="mt-1 text-gray-600 leading-relaxed">
                                        Ethihasan Reddy & Associates<br />
                                        F-142, R.T.P.P, V.V Reddy Nagar,<br />
                                        Kadapa district, Pin- 560076
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-start group"
                            >
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                        <Phone size={24} />
                                    </div>
                                </div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors">Call Us</h4>
                                    <p className="mt-1 text-gray-600 font-medium">
                                        <a href="tel:+917382451357" className="hover:text-primary-600 transition-colors">+91 73824 51357</a>
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-start group"
                            >
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                        <Mail size={24} />
                                    </div>
                                </div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors">Email Us</h4>
                                    <p className="mt-1 text-gray-600">
                                        <a href="mailto:ethihasanreddyandassociates@gmail.com" className="hover:text-primary-600 transition-colors">
                                            ethihasanreddyandassociates@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-primary-900/5 rounded-3xl transform translate-x-4 translate-y-4"></div>
                        <div className="bg-white p-2 rounded-3xl shadow-2xl relative z-10 h-[500px] border border-gray-100">
                            <iframe
                                className="w-full h-full rounded-2xl"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15410.518784384975!2d78.43851532435555!3d14.502802773121556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb371bd90226487%3A0xe5f5439564177d0e!2sV%20V%20Reddy%20Nagar%2C%20Andhra%20Pradesh%20516312!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
