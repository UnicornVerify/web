import { useState } from "react";
import toast from "react-hot-toast";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const ContactPage = () => {
    const defaultFormData = {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    };

    const { axios } = useAppContext();

    const [formData, setFormData] = useState(defaultFormData);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post("/api/contact", formData);
            if (data.success) {
                toast.success(data.message);
                setFormData(defaultFormData);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-12 pb-12">
            <h1 className="text-2xl text-gray-500">
                Contact <span className="font-semibold text-primary-green">Us</span>
            </h1>

            <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
                <div className="flex-1 max-w-md">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-3 mt-6 text-sm"
                    >
                        <input
                            className="w-full px-2 py-2.5 border border-gray-500/10 rounded outline-none text-gray-500"
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="w-full px-2 py-2.5 border border-gray-500/10 rounded outline-none text-gray-500"
                            type="email"
                            placeholder="Email address"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="w-full px-2 py-2.5 border border-gray-500/10 rounded outline-none text-gray-500"
                            type="tel"
                            placeholder="Phone number (optional)"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full px-2 py-2.5 border border-gray-500/10 rounded outline-none text-gray-500"
                            type="text"
                            placeholder="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            className="w-full px-2 py-2.5 border border-gray-500/10 rounded outline-none text-gray-500 resize-none"
                            placeholder="Your message..."
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            required
                        ></textarea>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full mt-6 text-white py-3 uppercase transition rounded ${
                                loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-primary-green hover:bg-primary-green-dull cursor-pointer"
                            }`}
                        >
                            {loading ? "Sending..." : "Submit"}
                        </button>
                    </form>
                </div>

                <img
                    className="hidden md:block md:mr-16 mb-16 md:mt-10 max-h-96 object-contain"
                    src={assets.contact}
                    alt="Contact Us"
                />
            </div>
        </div>
    );
};

export default ContactPage;
