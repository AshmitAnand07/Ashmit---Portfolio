import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        emailjs
            .sendForm(
                "service_tpo8fi2",
                "template_zhkc0gr",
                form.current,
                "0pBdPPBe7nzhPz6fd"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setStatus("success");
                    alert("Message sent successfully!");
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                    setStatus("error");
                    alert("Failed to send message. Please try again.");
                }
            );
    };

    return (
        <section className="contact" id="contact">
            <SectionTitle title="Contact" />
            <div className="contact-content reveal">
                <p className="contact-invite">
                    Feel free to reach out for collaborations or just a friendly chat.
                </p>

                <div className="contact-methods">
                    <div className="contact-method">
                        <strong>Email:</strong> ashmit.akul07@gmail.com
                    </div>
                    <div className="contact-method">
                        <strong>Location:</strong> Howrah, West Bengal
                    </div>
                    <div className="contact-method">
                        <strong>Mobile:</strong> +91 7439450248
                    </div>
                </div>

                <form ref={form} className="contact-form" onSubmit={sendEmail}>
                    <div className="form-group">
                        <label htmlFor="from_name">Name</label>
                        <input type="text" id="from_name" name="from_name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="from_email">Email</label>
                        <input type="email" id="from_email" name="from_email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <div className="form-action" style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button type="submit">
                            {status === "sending" ? "Sending..." : "Submit"}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
