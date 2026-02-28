import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ParticleCanvas from '../components/ParticleCanvas'
import { Search, PenTool, Code, Bug, Rocket, LifeBuoy } from 'lucide-react'
import './HowItWorks.css'

const steps = [
    {
        n: '01', icon: Search, title: 'Discovery & Scoping',
        desc: 'We start with a detailed conversation about your goals, timeline, and budget. We map out the project scope, technologies, and deliverables in a clear proposal.'
    },
    {
        n: '02', icon: PenTool, title: 'Design & Prototyping',
        desc: 'Our designers create wireframes and high-fidelity mockups. You see exactly what you\'re getting before a single line of code is written.'
    },
    {
        n: '03', icon: Code, title: 'Agile Development',
        desc: 'Development in 2-week sprints. You get weekly demos, can give feedback anytime, and always know exactly where your project stands.'
    },
    {
        n: '04', icon: Bug, title: 'Testing & QA',
        desc: 'Rigorous automated and manual testing across devices and browsers. Performance benchmarks, security reviews, and bug-free deployment.'
    },
    {
        n: '05', icon: Rocket, title: 'Launch & Deploy',
        desc: 'We handle the full deployment to your cloud infrastructure, set up monitoring, and ensure a smooth go-live with zero downtime.'
    },
    {
        n: '06', icon: LifeBuoy, title: 'Support & Growth',
        desc: 'Your product doesn\'t stop at launch. We offer ongoing maintenance, feature additions, and growth consulting as your business scales.'
    },
]


// Framer Motion Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
}
const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function HowItWorks() {
    useEffect(() => { document.title = 'How It Works | Gro Innovative' }, [])
    return (
        <div className="page-enter">
            <section className="page-hero" style={{ padding: 0 }}>
                <ParticleCanvas />
                <div className="page-hero-bg" />
                <div className="container" style={{ paddingTop: 'calc(var(--nav-h) + 64px)', paddingBottom: '64px' }}>
                    <div className="hero-grid-wrapper CenteredLayout" style={{ minHeight: 'auto' }}>
                        <div className="hero-content centered" style={{ maxWidth: 840 }}>
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                className="badge"
                                style={{ boxShadow: '0 0 20px rgba(16,185,129,0.15)' }}
                            >
                                <span className="badge-dot" />OUR PROCESS
                            </motion.div>
                            <motion.h1
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.1 }}
                                className="hero-headline"
                            >
                                How We Deliver{' '}
                                <span className="gradient-text">World-Class Software</span>
                            </motion.h1>
                            <motion.p
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.2 }}
                                className="hero-sub"
                                style={{ maxWidth: 580 }}
                            >
                                A transparent, collaborative process designed to turn your vision into a fully-working product — on time and on budget.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <motion.div
                        className="steps-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {steps.map((s) => {
                            const Icon = s.icon;
                            return (
                                <motion.div
                                    key={s.n}
                                    variants={stepVariants}
                                    className="step-card"
                                >
                                    <div className="step-num">{s.n}</div>
                                    <div className="step-icon-badge">
                                        <Icon size={20} strokeWidth={1.8} />
                                    </div>
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <section className="section-sm section-alt">
                <div className="container container-sm">
                    <div className="section-header">
                        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>Ready to start?</motion.h2>
                        <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}>Let's build something brilliant together.</motion.p>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 16 }}>
                        <Link to="/contact" className="btn btn-primary">Talk to Our Team <span className="arr">→</span></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
