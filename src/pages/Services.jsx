import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ParticleCanvas from '../components/ParticleCanvas'
import './Services.css'

const services = [
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>,
        title: 'Website Creation',
        desc: 'High-converting websites and landing pages built with modern UI, fast performance, and lead-focused structure.',
        features: ['Conversion-first UX + mobile responsive', 'Lightning performance + Core Web Vitals', 'SEO-ready structure + clean sitemap', 'Analytics + lead tracking setup'],
        buttonText: 'Get a Quote'
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
        title: 'Software Development',
        desc: 'Custom web and mobile applications engineered for scale, security, and long-term maintainability.',
        features: ['Web apps (React/Next.js) + APIs', 'Admin dashboards + authentication', 'Payment, booking, CRM integrations', 'Scalable architecture + clean code'],
        buttonText: 'Start a Project'
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
        title: 'SEO Optimization',
        desc: 'Technical SEO + on-page optimization to improve rankings, visibility, and qualified traffic.',
        features: ['Technical audit + fixes', 'Keyword strategy + content plan', 'On-page SEO + internal linking', 'Indexing + sitemap + schema setup'],
        buttonText: 'Boost My SEO'
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
        title: 'Digital Marketing',
        desc: 'Growth campaigns designed to generate demand — strategy, creatives, ads, and funnels.',
        features: ['Lead-gen funnels + landing pages', 'Google/Meta ads + tracking', 'Social content plan', 'Reporting + optimization cycles'],
        buttonText: 'Grow My Leads'
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
        title: 'Site Maintenance',
        desc: 'Keep your site secure, fast, and updated — with ongoing support and monthly improvements.',
        features: ['Security updates + backups', 'Speed optimization + uptime checks', 'Content updates + bug fixes', 'Monthly reporting + recommendations'],
        buttonText: 'Maintain My Site'
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="13.5" cy="6.5" r=".5" /><circle cx="17.5" cy="10.5" r=".5" /><circle cx="8.5" cy="7.5" r=".5" /><circle cx="6.5" cy="12.5" r=".5" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>,
        title: 'Logo & Poster Creation',
        desc: 'Modern brand visuals designed for trust — logos and posters for digital + print.',
        features: ['Logo concepts + brand direction', 'Social media posters + banners', 'Print-ready exports', 'Simple brand consistency guide'],
        buttonText: 'Create My Brand'
    },
]

const packages = [
    { name: 'Starter', focus: 'Website', outcomes: ['Conversion-ready landing page', 'Basic SEO setup', 'Mobile responsive design'], cta: 'Get a Quote' },
    { name: 'Growth', focus: 'Website + SEO', outcomes: ['Performance business site', 'Complete SEO foundation', 'Lead tracking + Analytics'], cta: 'Get a Quote' },
    { name: 'Scale', focus: 'Software + Growth', outcomes: ['Custom web/mobile application', 'Advanced growth automation', 'Full-scale marketing funnel'], cta: 'Get a Quote' },
]

const trustPoints = [
    {
        label: 'Fast delivery',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
    },
    {
        label: 'NDA protected',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
    },
    {
        label: 'SEO-ready build',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
    },
    {
        label: 'Post-launch support',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
    }
]

const techs = ['React', 'Next.js', 'Node.js', 'Python', 'Flutter', 'AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'Figma', 'TypeScript', 'GraphQL']

// Framer Motion Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
}
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function Services() {
    useEffect(() => { document.title = 'Services | Gro Innovative' }, [])

    return (
        <div className="page-enter">
            {/* Page Header */}
            <section className="page-hero">
                <ParticleCanvas />
                <div className="page-hero-bg" />
                <div className="container">
                    <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="badge badge-accent"><span className="badge-dot" style={{ background: 'var(--accent)' }} />WHAT WE OFFER</motion.div>
                    <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>High-Performance Websites,<br /><span className="gradient-text">Software & Growth Systems</span></motion.h1>
                    <motion.p variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>From strategy to launch — we build conversion-focused websites, scalable applications, SEO foundations, and marketing systems designed to generate leads and long-term growth.</motion.p>
                    <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="hero-proof-line">
                        <span>Fast delivery</span> <span className="dot">•</span> <span>NDA protected</span> <span className="dot">•</span> <span>Support after launch</span>
                    </motion.div>
                </div>
            </section>

            {/* Proof Strip */}
            <section className="proof-strip">
                <div className="container">
                    <div className="proof-grid">
                        {trustPoints.map((tp, i) => (
                            <div key={tp.label} className="proof-item">
                                <span className="proof-icon">{tp.icon}</span>
                                <span className="proof-label">{tp.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services list */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="services-list"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {services.map((s) => (
                            <motion.div
                                key={s.title}
                                variants={cardVariants}
                                className="svc-card"
                            >
                                <div className="svc-left">
                                    <div className="icon-box" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)', fontSize: '2rem', width: 64, height: 64 }}>{s.icon}</div>
                                    <div>
                                        {s.tag && <div className="badge badge-accent" style={{ marginBottom: 10 }}><span className="badge-dot" style={{ background: 'var(--accent)' }} />{s.tag}</div>}
                                        <h3>{s.title}</h3>
                                        <p style={{ marginTop: 10 }}>{s.desc}</p>
                                        <Link to="/contact" className="btn btn-primary" style={{ marginTop: 20 }}>{s.buttonText} <span className="arr">→</span></Link>
                                    </div>
                                </div>
                                <div className="svc-right">
                                    <ul className="svc-features">
                                        {s.features.map(f => (
                                            <li key={f}><span className="check">✔</span>{f}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Service Packages */}
            <section className="section bg-dim">
                <div className="container">
                    <div className="section-header">
                        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="badge badge-accent">
                            <span className="badge-dot" style={{ background: 'var(--accent)' }} />
                            SERVICE PACKAGES
                        </motion.div>
                        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            Choose the Right Solution<br />for Your Growth Stage
                        </motion.h2>
                        <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            Flexible packages designed for startups, growing businesses, and scalable digital products.
                        </motion.p>
                    </div>
                    <div className="grid-3">
                        {packages.map((pkg, i) => (
                            <motion.div
                                key={pkg.name}
                                className="pkg-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="pkg-header">
                                    <div className="pkg-focus">{pkg.focus}</div>
                                    <h3>{pkg.name}</h3>
                                </div>
                                <ul className="pkg-outcomes">
                                    {pkg.outcomes.map(o => (
                                        <li key={o}><span className="check">✔</span> {o}</li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="btn btn-secondary w-full" style={{ marginTop: 'auto' }}>{pkg.cta} →</Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="section-sm section-alt">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h3 className="reveal" style={{ marginBottom: 8 }}>Technologies We Use</h3>
                    <p className="reveal reveal-delay-1" style={{ marginBottom: 32 }}>We work with the best modern tools to deliver robust, scalable solutions.</p>
                    <div className="tech-cloud reveal reveal-delay-2">
                        {techs.map(t => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-dark">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="reveal" style={{ color: '#fff' }}>Not sure which service you need?</h2>
                    <p className="reveal reveal-delay-1">Book a free 30-minute consultation. We'll help you figure out the right approach.</p>
                    <Link to="/contact" className="btn btn-white btn-lg reveal reveal-delay-2" style={{ marginTop: 32 }}>
                        Book Free Consultation <span className="arr">→</span>
                    </Link>
                </div>
            </section>
        </div>
    )
}
