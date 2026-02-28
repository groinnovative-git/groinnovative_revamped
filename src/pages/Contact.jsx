import { useEffect, useState } from 'react'
import ParticleCanvas from '../components/ParticleCanvas'
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
            <section className="page-hero" style={{ padding: 0 }}>
                <ParticleCanvas />
                <div className="page-hero-bg" />
                <div className="container" style={{ paddingTop: 'calc(var(--nav-h) + 64px)', paddingBottom: '64px' }}>
                    <div className="hero-grid-wrapper CenteredLayout" style={{ minHeight: 'auto' }}>
                        <div className="hero-content centered" style={{ maxWidth: 840 }}>
                            <div
                                className="badge reveal"
                                style={{ boxShadow: '0 0 20px rgba(16,185,129,0.15)' }}
                            >
                                <span className="badge-dot" />GET IN TOUCH
                            </div>
                            <h1 className="hero-headline reveal reveal-delay-1">
                                Let's Build Something{' '}
                                <span className="gradient-text">Great Together</span>
                            </h1>
                            <p className="hero-sub reveal reveal-delay-2" style={{ maxWidth: 580 }}>
                                Tell us about your project. We'll get back to you with a plan — not a sales pitch — within 24 hours.
                            </p>
                        </div>
                    </div>
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
                                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>, label: 'Email', val: 'hello@groinnovative.com' },
                                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>, label: 'Phone', val: '+91 98765 43210' },
                                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>, label: 'Address', val: 'Bangalore, Karnataka, India' },
                                    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>, label: 'Hours', val: 'Mon – Sat, 9am – 7pm IST' },
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
                                <div className="cbadge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 6 }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>NDA Protected</div>
                                <div className="cbadge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 6 }}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>Free Consultation</div>
                                <div className="cbadge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 6 }}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>Remote Friendly</div>
                            </div>
                        </div>

                        {/* Form column */}
                        <div className="contact-form-wrap reveal reveal-delay-1">
                            {sent ? (
                                <div className="success-state">
                                    <div className="success-icon"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></div>
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
