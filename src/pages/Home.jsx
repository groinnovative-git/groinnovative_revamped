import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
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
    { icon: '🌐', title: 'Web Development', desc: 'Custom websites and web apps built with modern React, Next.js, and Node.js for maximum performance.', color: '#EBF3FF' },
    { icon: '📱', title: 'Mobile Apps', desc: 'Native and cross-platform iOS & Android apps that deliver a seamless user experience.', color: '#F0FDF9' },
    { icon: '☁️', title: 'Cloud Solutions', desc: 'Scalable AWS, GCP, and Azure infrastructure with CI/CD pipelines and 99.9% uptime.', color: '#FFF7ED' },
    { icon: '📣', title: 'Digital Marketing', desc: 'SEO, social media, and paid advertising campaigns that grow your brand and drive real conversions.', color: '#FDF4FF' },
    { icon: '🎨', title: 'Logo & Branding', desc: 'Memorable brand identities including logos, style guides, and full visual branding systems.', color: '#F0FDF4' },
    { icon: '🔧', title: 'IT Consulting', desc: 'Strategic technology advice and architecture design to help your business make the right tech decisions.', color: '#EFF6FF' },
]

const stats = [
    { value: 50, suffix: '+', label: 'Clients Served' },
    { value: 120, suffix: '+', label: 'Projects Delivered' },
    { value: 5, suffix: '+', label: 'Years Experience' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

const whyUs = [
    { icon: '⚡', title: 'Fast Delivery', desc: 'We move at startup speed. Most projects ship in 4–8 weeks with weekly progress updates.' },
    { icon: '🏆', title: 'Top Quality', desc: 'Senior engineers only. Every line of code is reviewed, tested, and production-ready.' },
    { icon: '🤝', title: 'Dedicated Support', desc: '24/7 post-launch support. We don\'t disappear after delivery — we grow with you.' },
]

const logos = ['Google', 'Microsoft', 'AWS', 'Stripe', 'Shopify', 'Notion', 'Slack', 'Figma']

export default function Home() {
    useReveal()
    useEffect(() => { document.title = 'Gro Innovative | Software & IT Solutions' }, [])

    return (
        <div className="page-enter">
            {/* ── HERO ── */}
            <section className="hero-section">
                {/* Animated background grid */}
                <div className="hero-grid" aria-hidden />
                <div className="hero-glow hero-glow-1" aria-hidden />
                <div className="hero-glow hero-glow-2" aria-hidden />
                <div className="container">
                    <div className="hero-content">
                        <div className="badge reveal">
                            <span className="badge-dot" />
                            Trusted by 50+ businesses worldwide
                        </div>
                        <h1 className="hero-headline reveal reveal-delay-1">
                            We Build Software<br />
                            <span className="gradient-text">That Scales.</span>
                        </h1>
                        <p className="hero-sub reveal reveal-delay-2">
                            Gro Innovative is a full-stack software development company delivering world-class web apps,
                            mobile solutions, cloud infrastructure, and digital marketing for ambitious businesses.
                        </p>
                        <div className="hero-actions reveal reveal-delay-3">
                            <Link to="/services" className="btn btn-primary btn-lg">
                                Explore Services <span className="arr">→</span>
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-lg">
                                Talk to Us
                            </Link>
                        </div>
                        {/* Floating trust pills */}
                        <div className="trust-pills reveal reveal-delay-4">
                            <span>✅ Free Consultation</span>
                            <span>✅ No Lock-in Contracts</span>
                            <span>✅ NDA Protected</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TRUSTED BY ── */}
            <section className="trusted-section">
                <div className="container">
                    <p className="trusted-label">Trusted by teams at</p>
                </div>
                <div className="ticker-wrap">
                    <div className="ticker-track">
                        {[...logos, ...logos].map((name, i) => (
                            <div className="ticker-item" key={i}>{name}</div>
                        ))}
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
                                <div className="icon-box" style={{ background: s.color }}>{s.icon}</div>
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
                                    <div className="why-icon">{w.icon}</div>
                                    <div>
                                        <strong>{w.title}</strong>
                                        <p>{w.desc}</p>
                                    </div>
                                </div>
                            ))}
                            <Link to="/how-it-works" className="btn btn-primary" style={{ marginTop: 32 }}>
                                See How We Work <span className="arr">→</span>
                            </Link>
                        </div>
                        <div className="why-visual reveal reveal-delay-2">
                            <div className="why-card-stack">
                                <div className="why-card wc-1">
                                    <span>🚀</span>
                                    <strong>Project Kickoff</strong>
                                    <p>Week 1 — Discovery & Architecture</p>
                                </div>
                                <div className="why-card wc-2">
                                    <span>⚙️</span>
                                    <strong>Sprint Development</strong>
                                    <p>Weeks 2–6 — Agile delivery cycles</p>
                                </div>
                                <div className="why-card wc-3">
                                    <span>✅</span>
                                    <strong>Launch & Scale</strong>
                                    <p>Week 7+ — Deployment & growth</p>
                                </div>
                            </div>
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
