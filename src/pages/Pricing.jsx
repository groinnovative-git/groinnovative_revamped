import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Pricing.css'

const plans = [
    {
        name: 'Starter', icon: '🚀',
        price: { mo: 499, yr: 399 },
        tag: '', tagCls: '',
        desc: 'Perfect for small businesses and startups getting their first digital product.',
        features: [
            'Up to 5 pages / screens', 'Responsive design', 'Basic SEO setup', 'Contact form', '30-day support', '2 revision rounds'
        ],
        cta: 'Get Started', ctaClass: 'btn-secondary',
    },
    {
        name: 'Growth', icon: '⚡',
        price: { mo: 1499, yr: 1199 },
        tag: 'Most Popular', tagCls: 'popular',
        desc: 'For growing businesses that need a powerful digital presence and backend capabilities.',
        features: [
            'Unlimited pages', 'Custom backend / API', 'Database integration', 'Auth & user accounts', 'CMS integration', '90-day support', '5 revision rounds'
        ],
        cta: 'Start Today', ctaClass: 'btn-primary',
    },
    {
        name: 'Enterprise', icon: '🏢',
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
                                    {p.features.map(f => <li key={f}><span className="check">✔</span>{f}</li>)}
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
                            <div key={f} className="included-item"><span>✅</span> {f}</div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
