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
        <>
            <section className="contact" id="contact">
                <div className="section-header reveal">
                    <h2 className="section-title">Let's build something together</h2>
                    <p>Have a project in mind or just want to say hi? My inbox is always open.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-12)', alignItems: 'start' }}>
                    <div className="reveal">
                        <h3 style={{ marginBottom: 'var(--space-8)' }}>Get in Touch</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                            <div className="card contact-info-card" style={{ padding: 'var(--space-8)' }}>
                                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 'var(--space-1)', fontWeight: '700', letterSpacing: '0.05em' }}>Email</p>
                                <p style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '1.1rem' }}>ashmit.akul07@gmail.com</p>
                            </div>
                            <div className="card contact-info-card" style={{ padding: 'var(--space-8)' }}>
                                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 'var(--space-1)', fontWeight: '700', letterSpacing: '0.05em' }}>Location</p>
                                <p style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '1.1rem' }}>Howrah, West Bengal, India</p>
                            </div>
                            <div className="card contact-info-card" style={{ padding: 'var(--space-8)' }}>
                                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 'var(--space-1)', fontWeight: '700', letterSpacing: '0.05em' }}>Socials</p>
                                <div style={{ display: 'flex', gap: 'var(--space-6)', marginTop: 'var(--space-2)' }}>
                                    <a href="https://github.com/AshmitAnand07" target="_blank" rel="noreferrer" className="text-gradient hover:brightness-125 transition-all" style={{ fontWeight: '700' }}>GitHub</a>
                                    <a href="https://linkedin.com/in/ashmitanand" target="_blank" rel="noreferrer" className="text-gradient hover:brightness-125 transition-all" style={{ fontWeight: '700' }}>LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card reveal" style={{ padding: 'var(--space-10)' }}>
                        <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                                <label htmlFor="from_name" style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-secondary)' }}>Name</label>
                                <input 
                                    type="text" id="from_name" name="from_name" required 
                                    style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-lg)', padding: '16px', color: 'white', transition: 'var(--transition-base)' }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-glass)'}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                                <label htmlFor="from_email" style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-secondary)' }}>Email</label>
                                <input 
                                    type="email" id="from_email" name="from_email" required 
                                    style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-lg)', padding: '16px', color: 'white', transition: 'var(--transition-base)' }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-glass)'}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                                <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-secondary)' }}>Message</label>
                                <textarea 
                                    id="message" name="message" rows="5" required 
                                    style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-lg)', padding: '16px', color: 'white', resize: 'vertical', transition: 'var(--transition-base)' }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-glass)'}
                                ></textarea>
                            </div>
                            <Button type="submit" className="btn-primary" style={{ justifyContent: 'center', width: '100%', padding: '18px' }}>
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{ __html: `
                @media (max-width: 768px) {
                    .contact {
                        padding: 40px 16px !important;
                    }
                    .section-header {
                        margin-bottom: 32px !important;
                    }
                    .contact > div {
                        gap: 24px !important;
                    }
                    .contact-info-card {
                        padding: 24px !important;
                    }
                    .card.reveal {
                        padding: 24px !important;
                    }
                }
            ` }} />
        </>
    );
};

export default Contact;
