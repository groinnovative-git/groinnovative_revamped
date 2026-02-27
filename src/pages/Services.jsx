import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const services = [
    {
        icon: '🌐', title: 'Web Development',
        color: '#EBF3FF', tag: 'Most Popular',
        desc: 'We build high-performance, SEO-optimised web applications using React, Next.js, Vue, and Node.js — from landing pages to full SaaS platforms.',
        features: ['Custom React / Next.js apps', 'REST & GraphQL APIs', 'CMS integration (Sanity, Contentful)', 'E-commerce (Shopify, WooCommerce)', 'Performance & SEO optimisation'],
    },
    {
        icon: '📱', title: 'Mobile App Development',
        color: '#F0FDF9', tag: '',
        desc: 'Beautiful, fast iOS and Android apps built with React Native and Flutter — with backend, push notifications, and app store deployment.',
        features: ['React Native & Flutter', 'iOS & Android deployment', 'Push notifications & deep links', 'Offline-first architecture', 'App store submission'],
    },
    {
        icon: '☁️', title: 'Cloud & DevOps',
        color: '#FFF7ED', tag: '',
        desc: 'Scalable, secure cloud infrastructure on AWS, GCP, and Azure — with CI/CD, containerisation, and 24/7 monitoring.',
        features: ['AWS / GCP / Azure setup', 'Docker & Kubernetes', 'CI/CD pipelines (GitHub Actions)', 'Auto-scaling & load balancing', '99.9% uptime SLAs'],
    },
    {
        icon: '📣', title: 'Digital Marketing',
        color: '#FDF4FF', tag: '',
        desc: 'Data-driven marketing that actually converts — SEO, paid ads, social media, email, and content marketing that drives measurable ROI.',
        features: ['Search Engine Optimisation (SEO)', 'Google Ads & Meta Ads', 'Social media management', 'Email marketing automation', 'Analytics & reporting'],
    },
    {
        icon: '🎨', title: 'Logo & Brand Design',
        color: '#F0FDF4', tag: '',
        desc: 'Your brand is your first impression. We create memorable logos, brand style guides, and visual identities that stand out.',
        features: ['Logo design (3 concepts)', 'Brand style guide', 'Business card & letterhead', 'Social media kit', 'Unlimited revisions'],
    },
    {
        icon: '🔧', title: 'IT Consulting',
        color: '#EFF6FF', tag: '',
        desc: 'Strategic technology leadership for your business — architecture reviews, tech stack decisions, team hiring, and digital transformation.',
        features: ['Technology audit', 'Architecture design', 'CTO-as-a-service', 'Team building & hiring', 'Digital transformation roadmap'],
    },
]

const techs = ['React', 'Next.js', 'Node.js', 'Python', 'Flutter', 'AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'Figma', 'TypeScript', 'GraphQL']

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

export default function Services() {
    useReveal()
    useEffect(() => { document.title = 'Services | Gro Innovative' }, [])

    return (
        <div className="page-enter">
            {/* Page Header */}
            <section className="page-hero">
                <div className="page-hero-bg" />
                <div className="container">
                    <div className="badge badge-accent reveal"><span className="badge-dot" style={{ background: 'var(--accent)' }} />What We Offer</div>
                    <h1 className="reveal reveal-delay-1">Full-Spectrum IT Services<br /><span className="gradient-text">for Modern Businesses</span></h1>
                    <p className="reveal reveal-delay-2">From ideation to deployment — we cover every layer of your digital needs with one reliable partner.</p>
                </div>
            </section>

            {/* Services list */}
            <section className="section">
                <div className="container">
                    <div className="services-list">
                        {services.map((s, i) => (
                            <div key={s.title} className={`svc-card reveal reveal-delay-${(i % 2) + 1}`}>
                                <div className="svc-left">
                                    <div className="icon-box" style={{ background: s.color, fontSize: '2rem', width: 64, height: 64 }}>{s.icon}</div>
                                    <div>
                                        {s.tag && <div className="badge badge-accent" style={{ marginBottom: 10 }}><span className="badge-dot" style={{ background: 'var(--accent)' }} />{s.tag}</div>}
                                        <h3>{s.title}</h3>
                                        <p style={{ marginTop: 10 }}>{s.desc}</p>
                                        <Link to="/contact" className="btn btn-primary" style={{ marginTop: 20 }}>Get Started <span className="arr">→</span></Link>
                                    </div>
                                </div>
                                <div className="svc-right">
                                    <ul className="svc-features">
                                        {s.features.map(f => (
                                            <li key={f}><span className="check">✔</span>{f}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
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
