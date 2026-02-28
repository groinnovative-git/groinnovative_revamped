import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Pricing.css'

const plans = [
    {
        name: 'Starter', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>,
        price: { mo: 499, yr: 399 },
        tag: '', tagCls: '',
        desc: 'Perfect for small businesses and startups getting their first digital product.',
        features: [
            'Up to 5 pages / screens', 'Responsive design', 'Basic SEO setup', 'Contact form', '30-day support', '2 revision rounds'
        ],
        cta: 'Get Started', ctaClass: 'btn-secondary',
    },
    {
        name: 'Growth', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
        price: { mo: 1499, yr: 1199 },
        tag: 'Most Popular', tagCls: 'popular',
        desc: 'For growing businesses that need a powerful digital presence and backend capabilities.',
        features: [
            'Unlimited pages', 'Custom backend / API', 'Database integration', 'Auth & user accounts', 'CMS integration', '90-day support', '5 revision rounds'
        ],
        cta: 'Start Today', ctaClass: 'btn-primary',
    },
    {
        name: 'Enterprise', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="15" y2="22" /><line x1="8" y1="6" x2="8.01" y2="6" /><line x1="16" y1="6" x2="16.01" y2="6" /><line x1="12" y1="6" x2="12.01" y2="6" /><line x1="12" y1="10" x2="12.01" y2="10" /><line x1="12" y1="14" x2="12.01" y2="14" /><line x1="16" y1="10" x2="16.01" y2="10" /><line x1="16" y1="14" x2="16.01" y2="14" /><line x1="8" y1="10" x2="8.01" y2="10" /><line x1="8" y1="14" x2="8.01" y2="14" /></svg>,
        price: { mo: null, yr: null },
        tag: '', tagCls: '',
        desc: 'Full-scale, custom software solutions for established businesses with complex requirements.',
        features: [
            'Everything in Growth', 'Custom architecture', 'Dedicated dev team', 'Cloud infrastructure', 'SLA & uptime guarantee', '24/7 priority support', 'Unlimited revisions'
        ],
        cta: 'Talk to Sales', ctaClass: 'btn-secondary',
    },
]

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

export default function Pricing() {
    const [yearly, setYearly] = useState(false)
    useReveal()
    useEffect(() => { document.title = 'Pricing | Gro Innovative' }, [])

    return (
        <div className="page-enter">
            <section className="page-hero">
                <div className="page-hero-bg" />
                <div className="container">
                    <div className="badge reveal"><span className="badge-dot" />Simple Pricing</div>
                    <h1 className="reveal reveal-delay-1">Transparent Pricing.<br /><span className="gradient-text">No Surprises.</span></h1>
                    <p className="reveal reveal-delay-2">Start free, scale as you grow. No hidden fees, no lock-in contracts.</p>
                    {/* Toggle */}
                    <div className="price-toggle reveal reveal-delay-3">
                        <span className={!yearly ? 'active' : ''}>Monthly</span>
                        <button className={`toggle-btn${yearly ? ' on' : ''}`} onClick={() => setYearly(!yearly)} aria-label="Toggle billing period">
                            <span className="toggle-knob" />
                        </button>
                        <span className={yearly ? 'active' : ''}>Yearly <em className="save-badge">Save 20%</em></span>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="pricing-grid">
                        {plans.map((p, i) => (
                            <div key={p.name} className={`price-card reveal reveal-delay-${i + 1}${p.tagCls === 'popular' ? ' featured' : ''}`}>
                                {p.tag && <div className="featured-badge">{p.tag}</div>}
                                <div className="price-icon">{p.icon}</div>
                                <h3>{p.name}</h3>
                                <p className="price-desc">{p.desc}</p>
                                <div className="price-amt">
                                    {p.price.mo ? (
                                        <>
                                            <span className="currency">$</span>
                                            <span className="amount">{yearly ? p.price.yr : p.price.mo}</span>
                                            <span className="period">/mo</span>
                                        </>
                                    ) : (
                                        <span className="custom-price">Custom</span>
                                    )}
                                </div>
                                {yearly && p.price.yr && (
                                    <div className="billed-note">Billed yearly (${p.price.yr * 12}/yr)</div>
                                )}
                                <ul className="price-features">
                                    {p.features.map(f => <li key={f}><span className="check"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ verticalAlign: 'middle', marginTop: '-2px' }}><polyline points="20 6 9 17 4 12" /></svg></span>{f}</li>)}
                                </ul>
                                <Link to="/contact" className={`btn ${p.ctaClass}`} style={{ marginTop: 'auto' }}>
                                    {p.cta} <span className="arr">→</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <p className="price-note reveal">All prices in USD. Need a custom solution? <Link to="/contact" style={{ color: 'var(--primary)' }}>Contact us</Link> for a tailored quote.</p>
                </div>
            </section>

            <section className="section-sm section-alt">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h3 className="reveal">Every plan includes</h3>
                    <div className="included-grid reveal reveal-delay-1">
                        {['SSL Certificate', 'Mobile Responsive', 'SEO Optimised', 'Code Ownership', 'No Hidden Fees', 'Free Consultation'].map(f => (
                            <div key={f} className="included-item"><span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" style={{ marginRight: 6, verticalAlign: 'middle' }}><polyline points="20 6 9 17 4 12" /></svg></span> {f}</div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
