import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ParticleCanvas from '../components/ParticleCanvas'
import EyeFollowIcon from '../components/EyeFollowIcon'
import './Home.css'

/* Scroll reveal hook */
function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll('.reveal')
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
        }, { threshold: 0.12 })
        els.forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])
}

/* Count-up */
function CountUp({ target, suffix = '' }) {
    const ref = useRef(null)
    useEffect(() => {
        const el = ref.current; if (!el) return
        const obs = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return
            obs.disconnect()
            const dur = 1800; const start = performance.now()
            const tick = (now) => {
                const p = Math.min((now - start) / dur, 1)
                const ease = 1 - Math.pow(1 - p, 3)
                el.textContent = Math.floor(ease * target) + suffix
                if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
        }, { threshold: 0.5 })
        obs.observe(el)
        return () => obs.disconnect()
    }, [target, suffix])
    return <span ref={ref}>0{suffix}</span>
}

const services = [
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>, title: 'Web Development', desc: 'Custom websites and web apps built with modern React, Next.js, and Node.js for maximum performance.', color: 'rgba(16, 185, 129, 0.1)' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>, title: 'Mobile Apps', desc: 'Native and cross-platform iOS & Android apps that deliver a seamless user experience.', color: 'rgba(16, 185, 129, 0.1)' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>, title: 'Cloud Solutions', desc: 'Scalable AWS, GCP, and Azure infrastructure with CI/CD pipelines and 99.9% uptime.', color: 'rgba(16, 185, 129, 0.1)' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>, title: 'Digital Marketing', desc: 'SEO, social media, and paid advertising campaigns that grow your brand and drive real conversions.', color: 'rgba(16, 185, 129, 0.1)' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>, title: 'Logo & Branding', desc: 'Memorable brand identities including logos, style guides, and full visual branding systems.', color: 'rgba(16, 185, 129, 0.1)' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>, title: 'IT Consulting', desc: 'Strategic technology advice and architecture design to help your business make the right tech decisions.', color: 'rgba(16, 185, 129, 0.1)' },
]

const stats = [
    { value: 50, suffix: '+', label: 'Clients Served' },
    { value: 120, suffix: '+', label: 'Projects Delivered' },
    { value: 5, suffix: '+', label: 'Years Experience' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

const whyUs = [
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>, title: 'Fast Delivery', desc: 'We move at startup speed. Most projects ship in 4–8 weeks with weekly progress updates.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>, title: 'Top Quality', desc: 'Senior engineers only. Every line of code is reviewed, tested, and production-ready.' },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>, title: 'Dedicated Support', desc: '24/7 post-launch support. We don\'t disappear after delivery — we grow with you.' },
]



export default function Home() {
    useReveal()
    useEffect(() => { document.title = 'GroInnovative | Software & IT Solutions' }, [])

    return (
        <div className="page-enter">
            {/* ── HERO ── */}
            <section className="hero-section">
                <ParticleCanvas />
                <div className="container">
                    <div className="hero-grid-wrapper CenteredLayout">
                        <div className="hero-content centered">
                            <div className="badge reveal">
                                <span className="badge-dot" />
                                ACCELERATE YOUR AI WORKFLOWS
                            </div>
                            <h1 className="hero-headline reveal reveal-delay-1">
                                AI-Driven Software &<br />
                                <span style={{ whiteSpace: 'nowrap' }}>
                                    <EyeFollowIcon />
                                    <span className="gradient-text">Growth Systems</span>
                                </span><br />
                                for Modern Businesses
                            </h1>
                            <p className="hero-sub reveal reveal-delay-2">
                                We design and build scalable SaaS platforms, intelligent websites, and automation-ready digital products — engineered for performance, visibility, and long-term growth.
                            </p>
                            <div className="hero-actions reveal reveal-delay-3">
                                <Link to="/services" className="btn btn-primary">
                                    ✔ Start a Project
                                </Link>
                                <Link to="/contact" className="btn btn-secondary">
                                    ✔ Explore Services
                                </Link>
                            </div>
                            {/* Floating trust pills */}
                            <div className="trust-pills reveal reveal-delay-4">
                                <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" style={{ verticalAlign: 'middle', marginRight: 8 }}><polyline points="20 6 9 17 4 12" /></svg> Free Consultation</span>
                                <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" style={{ verticalAlign: 'middle', marginRight: 8 }}><polyline points="20 6 9 17 4 12" /></svg> No Lock-in Contracts</span>
                                <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" style={{ verticalAlign: 'middle', marginRight: 8 }}><polyline points="20 6 9 17 4 12" /></svg> NDA Protected</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ── STATS ── */}
            <section className="stats-section section-alt">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map(s => (
                            <div className="stat-card reveal" key={s.label}>
                                <div className="stat-num"><CountUp target={s.value} suffix={s.suffix} /></div>
                                <div className="stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SERVICES ── */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="badge reveal"><span className="badge-dot" />What We Do</div>
                        <h2 className="reveal reveal-delay-1">End-to-End Software Services</h2>
                        <p className="reveal reveal-delay-2">From idea to launch — we handle every layer of your digital product.</p>
                    </div>
                    <div className="grid-3">
                        {services.map((s, i) => (
                            <div key={s.title} className={`card service-card reveal reveal-delay-${(i % 3) + 1}`}>
                                <div className="icon-box" style={{ background: s.color, color: 'var(--primary)' }}>{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <Link to="/services" className="card-link">Learn more <span className="arr">→</span></Link>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 48 }}>
                        <Link to="/services" className="btn btn-secondary">View All Services <span className="arr">→</span></Link>
                    </div>
                </div>
            </section>

            {/* ── WHY US ── */}
            <section className="why-section section-alt section">
                <div className="container">
                    <div className="why-inner">
                        <div className="why-text">
                            <div className="badge reveal"><span className="badge-dot" />Why Gro Innovative</div>
                            <h2 className="reveal reveal-delay-1">The partner you've been looking for</h2>
                            <p className="reveal reveal-delay-2" style={{ marginBottom: 32 }}>
                                We combine enterprise-grade engineering with startup agility.
                                Our team of senior developers, designers, and strategists are committed to one thing: your success.
                            </p>
                            {whyUs.map((w, i) => (
                                <div key={w.title} className={`why-item reveal reveal-delay-${i + 2}`}>
                                    <div className="why-icon" style={{ color: 'var(--primary)' }}>{w.icon}</div>
                                    <div>
                                        <strong>{w.title}</strong>
                                        <p>{w.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="why-visual reveal reveal-delay-2">
                            <div className="why-card-stack">
                                <div className="why-card wc-1">
                                    <strong>Project Kickoff</strong>
                                    <p>Week 1 — Discovery & Architecture</p>
                                </div>
                                <div className="why-card wc-2">
                                    <strong>Sprint Development</strong>
                                    <p>Weeks 2–6 — Agile delivery cycles</p>
                                </div>
                                <div className="why-card wc-3">
                                    <strong>Launch & Scale</strong>
                                    <p>Week 7+ — Deployment & growth</p>
                                </div>
                            </div>
                        </div>
                        <div className="why-cta-wrap reveal reveal-delay-4">
                            <Link to="/how-it-works" className="btn btn-primary">
                                See How We Work <span className="arr">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section className="cta-banner section section-dark">
                <div className="container">
                    <div className="cta-banner-inner">
                        <div>
                            <h2 className="reveal" style={{ color: '#fff' }}>Ready to build something great?</h2>
                            <p className="reveal reveal-delay-1">Get a free consultation and project estimate within 24 hours.</p>
                        </div>
                        <div className="reveal reveal-delay-2">
                            <Link to="/contact" className="btn btn-white btn-lg">
                                Start Your Project <span className="arr">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
