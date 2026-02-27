import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './HowItWorks.css'

const steps = [
    {
        n: '01', icon: '🔍', title: 'Discovery & Scoping',
        desc: 'We start with a detailed conversation about your goals, timeline, and budget. We map out the project scope, technologies, and deliverables in a clear proposal.'
    },
    {
        n: '02', icon: '🎨', title: 'Design & Prototyping',
        desc: 'Our designers create wireframes and high-fidelity mockups. You see exactly what you\'re getting before a single line of code is written.'
    },
    {
        n: '03', icon: '⚙️', title: 'Agile Development',
        desc: 'Development in 2-week sprints. You get weekly demos, can give feedback anytime, and always know exactly where your project stands.'
    },
    {
        n: '04', icon: '🧪', title: 'Testing & QA',
        desc: 'Rigorous automated and manual testing across devices and browsers. Performance benchmarks, security reviews, and bug-free deployment.'
    },
    {
        n: '05', icon: '🚀', title: 'Launch & Deploy',
        desc: 'We handle the full deployment to your cloud infrastructure, set up monitoring, and ensure a smooth go-live with zero downtime.'
    },
    {
        n: '06', icon: '🤝', title: 'Support & Growth',
        desc: 'Your product doesn\'t stop at launch. We offer ongoing maintenance, feature additions, and growth consulting as your business scales.'
    },
]

const faqs = [
    { q: 'How long does a typical project take?', a: 'Most web projects take 4–8 weeks depending on complexity. Mobile apps typically take 8–16 weeks. We provide a detailed timeline in our proposal.' },
    { q: 'Do you sign NDAs?', a: 'Yes, absolutely. We sign NDAs before any project discussion. Your ideas and business information are completely protected.' },
    { q: 'What is your payment structure?', a: 'We typically work on a 40% upfront, 40% mid-project, 20% on delivery basis. For enterprise projects, we offer milestone-based payment plans.' },
    { q: 'Can I see your previous work?', a: 'Yes! We have a portfolio of 50+ projects. We can share case studies and live projects relevant to your industry on request.' },
    { q: 'Do you provide post-launch support?', a: 'Yes. All projects come with 30 days of free post-launch support. We also offer monthly retainer plans for ongoing maintenance and feature development.' },
]

function FAQ() {
    const [open, setOpen] = useState(null)
    return (
        <div className="faq-list">
            {faqs.map((f, i) => (
                <div key={i} className={`faq-item${open === i ? ' open' : ''}`} onClick={() => setOpen(open === i ? null : i)}>
                    <div className="faq-q">
                        <span>{f.q}</span>
                        <span className="faq-chevron">{open === i ? '−' : '+'}</span>
                    </div>
                    <div className="faq-a"><p>{f.a}</p></div>
                </div>
            ))}
        </div>
    )
}

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

export default function HowItWorks() {
    useReveal()
    useEffect(() => { document.title = 'How It Works | Gro Innovative' }, [])
    return (
        <div className="page-enter">
            <section className="page-hero">
                <div className="page-hero-bg" />
                <div className="container">
                    <div className="badge reveal"><span className="badge-dot" />Our Process</div>
                    <h1 className="reveal reveal-delay-1">How We Deliver<br /><span className="gradient-text">World-Class Software</span></h1>
                    <p className="reveal reveal-delay-2">A transparent, collaborative process designed to turn your vision into a fully-working product — on time and on budget.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="steps-grid">
                        {steps.map((s, i) => (
                            <div key={s.n} className={`step-card reveal reveal-delay-${(i % 3) + 1}`}>
                                <div className="step-num">{s.n}</div>
                                <div className="step-icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-sm section-alt">
                <div className="container container-sm">
                    <div className="section-header">
                        <h2 className="reveal">Frequently Asked Questions</h2>
                        <p className="reveal reveal-delay-1">Everything you need to know before we get started.</p>
                    </div>
                    <FAQ />
                    <div style={{ textAlign: 'center', marginTop: 48 }}>
                        <p style={{ marginBottom: 16 }}>Still have questions?</p>
                        <Link to="/contact" className="btn btn-primary">Talk to Our Team <span className="arr">→</span></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
