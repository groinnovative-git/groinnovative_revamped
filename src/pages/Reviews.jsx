import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Reviews.css'

const testimonials = [
    { name: 'Rahul Mehta', role: 'CEO, TechFlow Solutions', avatar: 'RM', rating: 5, review: 'Gro Innovative delivered our SaaS platform in 6 weeks — ahead of schedule. The code quality was exceptional and the team communicated every step of the way. Highly recommended.' },
    { name: 'Priya Sharma', role: 'Founder, ShopEase', avatar: 'PS', rating: 5, review: 'Our e-commerce store went from concept to launch in 5 weeks. Sales went up 3x in the first month. The design is beautiful and the mobile experience is flawless.' },
    { name: 'James Wilson', role: 'CTO, CloudBase Inc.', avatar: 'JW', rating: 5, review: 'We needed a serious DevOps overhaul. Gro Innovative rebuilt our entire AWS infrastructure, set up CI/CD, and reduced our deployment time from 2 hours to 8 minutes.' },
    { name: 'Ananya Krishnan', role: 'Marketing Head, BrandUp', avatar: 'AK', rating: 5, review: 'Their digital marketing team is phenomenal. Our organic traffic increased by 240% in 3 months and our CPA on paid ads dropped by 60%. Real, measurable results.' },
    { name: 'Mohammed Ali', role: 'Director, EduTech Pro', avatar: 'MA', rating: 5, review: 'The mobile app they built for us has 4.8 stars on both App Store and Play Store. 50,000 downloads in the first month. The UX is just incredible.' },
    { name: 'Sarah Thompson', role: 'CEO, FinanceFlow', avatar: 'ST', rating: 5, review: 'Outstanding work on our financial dashboard. Complex real-time data, beautiful charts, and bank-level security. The team truly understood our domain and delivered perfectly.' },
]

const featured = testimonials[0]

function Stars({ n }) {
    return <div className="stars">{Array.from({ length: n }).map((_, i) => <span key={i}>★</span>)}</div>
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

export default function Reviews() {
    useReveal()
    useEffect(() => { document.title = 'Client Reviews | Gro Innovative' }, [])
    return (
        <div className="page-enter">
            <section className="page-hero">
                <div className="page-hero-bg" />
                <div className="container">
                    <div className="badge reveal"><span className="badge-dot" />Client Reviews</div>
                    <h1 className="reveal reveal-delay-1">Loved by 50+<br /><span className="gradient-text">Happy Clients</span></h1>
                    <p className="reveal reveal-delay-2">Real results. Real businesses. Here's what our clients have to say about working with us.</p>
                    <div className="rating-summary reveal reveal-delay-3">
                        <Stars n={5} />
                        <span className="rating-num">4.9</span>
                        <span className="rating-total">/ 5.0 average from 50+ reviews</span>
                    </div>
                </div>
            </section>

            {/* Featured review */}
            <section className="section-sm section-alt">
                <div className="container container-sm">
                    <div className="featured-review reveal">
                        <div className="featured-quote">"</div>
                        <p className="fq-text">{featured.review}</p>
                        <div className="fq-author">
                            <div className="avatar">{featured.avatar}</div>
                            <div>
                                <strong>{featured.name}</strong>
                                <span>{featured.role}</span>
                            </div>
                        </div>
                        <Stars n={featured.rating} />
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="section">
                <div className="container">
                    <div className="reviews-grid">
                        {testimonials.slice(1).map((t, i) => (
                            <div key={t.name} className={`review-card reveal reveal-delay-${(i % 3) + 1}`}>
                                <Stars n={t.rating} />
                                <p className="rc-text">"{t.review}"</p>
                                <div className="rc-author">
                                    <div className="avatar sm">{t.avatar}</div>
                                    <div>
                                        <strong>{t.name}</strong>
                                        <span>{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 56 }}>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Start Your Project <span className="arr">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
