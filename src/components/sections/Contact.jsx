import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../common/Button";

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs
            .sendForm(
                "service_tpo8fi2",
                "template_zhkc0gr",
                form.current,
                "0pBdPPBe7nzhPz6fd"
            )
            .then(
                (result) => {
                    setStatus("success");
                    alert("Message sent successfully!");
                    e.target.reset();
                },
                (error) => {
                    setStatus("error");
                    alert("Failed to send message. Please try again.");
                }
            );
    };

    return (
        <section className="contact" id="contact" style={{ paddingBottom: 'var(--space-24)' }}>
            <div className="section-header reveal">
                <h2 className="section-title">Let's build something together</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Have a project in mind or just want to say hi? My inbox is always open.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-12)', alignItems: 'start' }}>
                <div className="reveal">
                    <h3 style={{ marginBottom: 'var(--space-6)' }}>Get in Touch</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                        <div className="card" style={{ padding: 'var(--space-6)' }}>
                            <p style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '4px' }}>Email</p>
                            <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>ashmit.akul07@gmail.com</p>
                        </div>
                        <div className="card" style={{ padding: 'var(--space-6)' }}>
                            <p style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '4px' }}>Location</p>
                            <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Howrah, West Bengal, India</p>
                        </div>
                        <div className="card" style={{ padding: 'var(--space-6)' }}>
                            <p style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '4px' }}>Socials</p>
                            <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-2)' }}>
                                <a href="https://github.com/AshmitAnand07" target="_blank" rel="noreferrer" className="text-accent hover:text-white transition-colors">GitHub</a>
                                <a href="https://linkedin.com/in/ashmitanand" target="_blank" rel="noreferrer" className="text-accent hover:text-white transition-colors">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card reveal">
                    <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                            <label htmlFor="from_name" style={{ fontSize: '0.875rem', fontWeight: '600' }}>Name</label>
                            <input 
                                type="text" id="from_name" name="from_name" required 
                                style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-md)', padding: '12px', color: 'white' }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                            <label htmlFor="from_email" style={{ fontSize: '0.875rem', fontWeight: '600' }}>Email</label>
                            <input 
                                type="email" id="from_email" name="from_email" required 
                                style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-md)', padding: '12px', color: 'white' }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                            <label htmlFor="message" style={{ fontSize: '0.875rem', fontWeight: '600' }}>Message</label>
                            <textarea 
                                id="message" name="message" rows="5" required 
                                style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-md)', padding: '12px', color: 'white', resize: 'vertical' }}
                            ></textarea>
                        </div>
                        <Button type="submit" className="btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                            {status === "sending" ? "Sending..." : "Send Message"}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
