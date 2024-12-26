import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '../ui/alert';

const ContactForm = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [showThankYou, setShowThankYou] = useState(false);

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(forms),
            });
        
            if (response.ok) {
                setShowThankYou(true);
                setForms({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                });
                
                // Hide the thank you message after 3 seconds
                setTimeout(() => {
                    setShowThankYou(false);
                }, 5000);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An unexpected error occurred.");
        }
    };

    return (
        <div className="relative">
            {/* Thank you message */}
            {showThankYou && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className={`transform transition-all duration-500 ${showThankYou ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                        <Alert className="bg-white/95 border-green-500 shadow-lg max-w-md mx-auto animate-bounce-gentle">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <Check className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <AlertTitle className="text-xl font-semibold text-green-700">Thank You!</AlertTitle>
                                    <AlertDescription className="text-gray-600">
                                        Your message has been sent successfully. I will get back to you soon!
                                    </AlertDescription>
                                </div>
                            </div>
                        </Alert>
                    </div>
                </div>
            )}

            {/* Original form */}
            <form onSubmit={submitHandler} className="contact-validation-active">
                <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onChange={changeHandler}
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="form-field">
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            placeholder="Your Email"
                        />
                    </div>
                </div>
                <div className="form-field">
                    <input
                        value={forms.phone}
                        type="phone"
                        name="phone"
                        onChange={changeHandler}
                        placeholder="Your phone"
                    />
                </div>
                <div className="form-field mb-5">
                    <textarea
                        onChange={changeHandler}
                        value={forms.message}
                        name="message"
                        placeholder="Message"
                    />
                </div>
                <div className="submit-area">
                    <button type="submit" className="theme-btn">Submit Now</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;