"use client";
import { useState } from "react";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub,
    FaWhatsapp,
    FaDiscord,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:elvisprizley@gmail.com?subject=${encodeURIComponent(
            formData.subject
        )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
        )}`;
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center py-12 bg-gradient-to-b from-gray-900 to-black px-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-4xl w-full bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
                <h2 className="text-4xl font-bold text-white text-center mb-6">
                    Get in <span className="text-blue-400">Touch</span>
                </h2>
                <p className="text-gray-400 text-center mb-8">
                    If you have any questions or want to collaborate, send a
                    message!
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-6"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-4 rounded-lg bg-gray-700 text-white"
                        onChange={handleChange}
                        required
                        aria-required="true"
                        title="Please fill out this field"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="p-4 rounded-lg bg-gray-700 text-white"
                        onChange={handleChange}
                        required
                        aria-required="true"
                        title="Please enter a valid email address"
                    />
                    <select
                        name="subject"
                        className="p-4 rounded-lg bg-gray-700 text-white"
                        onChange={handleChange}
                        required
                        aria-required="true"
                        title="Please select a service"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Select a Service
                        </option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile Development">
                            Mobile Development
                        </option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Digital Marketing">
                            Digital Marketing
                        </option>
                        <option value="Other">Other</option>
                    </select>
                    <textarea
                        name="message"
                        placeholder="Message"
                        className="p-4 rounded-lg bg-gray-700 text-white h-32"
                        onChange={handleChange}
                        required
                        aria-required="true"
                        title="Please enter a message"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 hover:border-blue-400 transition-all border-2 border-transparent"
                    >
                        Send Message
                    </button>
                </form>
                {submitted && (
                    <p className="text-green-400 text-center mt-4">
                        Message sent successfully!
                    </p>
                )}
                <div className="flex justify-center gap-6 mt-8 text-white text-2xl">
                    <a
                        href="http://www.linkedin.com/in/ab%C3%ADlio-elvis-epalanga-747aa02a5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/abilioepalanga"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://wa.me/244932383476"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition"
                    >
                        <FaWhatsapp />
                    </a>
                    <a
                        href="https://discord.com/users/aee_93"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition"
                    >
                        <FaDiscord />
                    </a>
                </div>
                <div className="text-gray-400 text-center mt-6">
                    <p>
                        <a
                            href="mailto:elvisprizley@gmail.com"
                            className="hover:text-white transition"
                        >
                            <FaEnvelope className="inline mr-2" />{" "}
                            elvisprizley@gmail.com
                        </a>
                    </p>
                    <p>
                        <FaPhone className="inline mr-2" /> +351 932 093 021
                    </p>
                    <p>
                        <FaMapMarkerAlt className="inline mr-2" /> Porto,
                        Portugal
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
