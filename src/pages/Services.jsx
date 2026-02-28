import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const services = [
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
        title: 'Enterprise Architecture',
        desc: 'We engineer high-performance, SEO-optimised scalable platforms. Building resilient microservices using React, Node, and advanced API layers.',
        features: ['Custom React / Next.js', 'REST & GraphQL APIs', 'High performance clusters', 'Deep Security Audits']
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
        title: 'Native Mobility',
        desc: 'Fluid, hardware-accelerated iOS and Android applications built natively and with React Native. Absolute zero-latency user experiences.',
        features: ['iOS & Android Native', 'Offline-first architecture', 'Biometric Security', 'Push infrastructure']
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>,
        title: 'Cloud Infrastructure',
        desc: 'Scalable, secure cloud environments on AWS, GCP, and Azure. Implementing advanced automated CI/CD and Kubernetes orchestration.',
        features: ['AWS / Azure Architecture', 'Docker & Kubernetes', 'Automated CI/CD', '99.99% Uptime SLAs']
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
        title: 'Growth Engineering',
        desc: 'Data-driven analytics and performance marketing layers embedded directly into the application to drive algorithmic ROI at scale.',
        features: ['Algorithmic SEO', 'Data Lake Analytics', 'A/B Test Infrastructure', 'Conversion rate optimization']
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
        title: 'Cognitive AI',
        desc: 'Integrating advanced LLMs and analytical ML models into core business processes. Automating the un-automatable.',
        features: ['Custom LLM Training', 'Predictive Analysis', 'RAG implementations', 'Automated Workflows']
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>,
        title: 'IT Consulting & Strategy',
        desc: 'C-suite technology leadership. We provide CTO-level guidance on architecture execution, team scaling, and digital transformation.',
        features: ['Technology Audits', 'Architecture Blueprints', 'CTO-as-a-service', 'M&A Tech Due Diligence']
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
                                    <div className="icon-box" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)', fontSize: '2rem', width: 64, height: 64 }}>{s.icon}</div>
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
