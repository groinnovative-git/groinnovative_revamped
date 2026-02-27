import { useEffect, useState } from 'react'
import './Contact.css'

const services = ['Web Development', 'Mobile App', 'Cloud & DevOps', 'Digital Marketing', 'Logo & Branding', 'IT Consulting', 'Other']

function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll('.reveal')
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
        }, { threshold: 0.1 })
        els.forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])
}

export default function Contact() {
    useReveal()
    useEffect(() => { document.title = 'Contact Us | Gro Innovative' }, [])
    const [sent, setSent] = useState(false)
    const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })

    const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    const submit = e => {
        e.preventDefault()
        setSent(true)
    }

    return (
        <div className="page-enter">
            <section className="page-hero">
                <div className="page-hero-bg" />
                <div className="container">
                    <div className="badge reveal"><span className="badge-dot" />Get In Touch</div>
                    <h1 className="reveal reveal-delay-1">Let's Build Something<br /><span className="gradient-text">Great Together</span></h1>
                    <p className="reveal reveal-delay-2">Tell us about your project. We'll get back to you with a plan — not a sales pitch — within 24 hours.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Info column */}
                        <div className="contact-info reveal">
                            <h3>Contact Information</h3>
                            <p>Reach out directly or fill the form — our team typically responds within 4 business hours.</p>
                            <div className="info-items">
                                {[
                                    { icon: '📧', label: 'Email', val: 'hello@groinnovative.com' },
                                    { icon: '📞', label: 'Phone', val: '+91 98765 43210' },
                                    { icon: '📍', label: 'Address', val: 'Bangalore, Karnataka, India' },
                                    { icon: '🕐', label: 'Hours', val: 'Mon – Sat, 9am – 7pm IST' },
                                ].map(item => (
                                    <div key={item.label} className="info-item">
                                        <div className="info-icon">{item.icon}</div>
                                        <div>
                                            <span className="info-label">{item.label}</span>
                                            <span className="info-val">{item.val}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="contact-badges">
                                <div className="cbadge">🔒 NDA Protected</div>
                                <div className="cbadge">⚡ Free Consultation</div>
                                <div className="cbadge">🌍 Remote Friendly</div>
                            </div>
                        </div>

                        {/* Form column */}
                        <div className="contact-form-wrap reveal reveal-delay-1">
                            {sent ? (
                                <div className="success-state">
                                    <div className="success-icon">✅</div>
                                    <h3>Message Sent!</h3>
                                    <p>Thank you for reaching out. We'll get back to you within 24 hours with a tailored plan.</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={submit}>
                                    <div className="form-row">
                                        <div className="field">
                                            <label>Your Name *</label>
                                            <input name="name" value={form.name} onChange={handle} placeholder="Alex Johnson" required />
                                        </div>
                                        <div className="field">
                                            <label>Work Email *</label>
                                            <input name="email" type="email" value={form.email} onChange={handle} placeholder="alex@company.com" required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="field">
                                            <label>Company</label>
                                            <input name="company" value={form.company} onChange={handle} placeholder="Your Company Inc." />
                                        </div>
                                        <div className="field">
                                            <label>Service Needed</label>
                                            <select name="service" value={form.service} onChange={handle}>
                                                <option value="">Select a service…</option>
                                                {services.map(s => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label>Project Details *</label>
                                        <textarea name="message" value={form.message} onChange={handle} rows={5} placeholder="Tell us about your project, goals, and timeline…" required />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                                        Send Message <span className="arr">→</span>
                                    </button>
                                    <p className="form-note">By submitting, you agree to our Privacy Policy. We'll respond within 24 hours.</p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
