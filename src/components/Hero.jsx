import { useEffect, useRef } from 'react'
import useMagnet from '../hooks/useMagnet'
import ParticleCanvas from './ParticleCanvas'
import './Hero.css'

export default function Hero() {
    const badgeRef = useRef(null)
    const title1Ref = useRef(null)
    const title2Ref = useRef(null)
    const title3Ref = useRef(null)
    const subRef = useRef(null)
    const btnsRef = useRef(null)

    const magnet1 = useMagnet(0.4)
    const magnet2 = useMagnet(0.3)

    // Staggered entrance
    useEffect(() => {
        const lines = [badgeRef, title1Ref, title2Ref, title3Ref, subRef, btnsRef]
        lines.forEach((r, i) => {
            if (!r.current) return
            r.current.style.opacity = '0'
            r.current.style.transform = 'translateY(40px)'
            r.current.style.filter = 'blur(8px)'
            r.current.style.transition = `opacity 0.75s ease ${i * 0.13}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${i * 0.13}s, filter 0.6s ease ${i * 0.13}s`
            setTimeout(() => {
                if (r.current) {
                    r.current.style.opacity = '1'
                    r.current.style.transform = 'translateY(0)'
                    r.current.style.filter = 'blur(0)'
                }
            }, 60)
        })
    }, [])

    const scrollTo = (href) => {
        const el = document.querySelector(href)
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' })
    }

    return (
        <section className="hero" id="home">

            {/* ── Interactive Green Constellation Background ── */}
            <div className="hero-canvas-overlay" aria-hidden>
                <ParticleCanvas />
                <div className="hero-canvas-fade" />
            </div>

            {/* Content */}
            <div className="hero-content">
                <div className="badge hero-badge" ref={badgeRef}>
                    <span className="badge-dot" />
                    PREMIUM SOFTWARE ENGINEERING
                </div>

                <h1 className="hero-title">
                    <span className="hero-line" ref={title1Ref}>Zero Friction.</span>
                    <span className="hero-line hero-line-accent" ref={title2Ref}>Maximum Velocity.</span>
                    <span className="hero-line hero-line-dim" ref={title3Ref}>Infinite Scale.</span>
                </h1>

                <p className="hero-sub" ref={subRef}>
                    We engineer the software that powers the world's most ambitious companies — automating complexity, eliminating bottlenecks, and delivering at a pace your competitors can't match.
                </p>

                <div className="hero-btns" ref={btnsRef}>
                    <div className="magnet-wrap" ref={magnet1.ref} onMouseMove={magnet1.handleMouseMove} onMouseLeave={magnet1.handleMouseLeave}>
                        <a href="#contact" className="btn btn-primary" onClick={e => { e.preventDefault(); scrollTo('#contact') }}>
                            <span className="cta-label">Start Your Project</span>
                            <span className="cta-arrow">→</span>
                        </a>
                    </div>
                    <div className="magnet-wrap" ref={magnet2.ref} onMouseMove={magnet2.handleMouseMove} onMouseLeave={magnet2.handleMouseLeave}>
                        <a href="#features" className="btn btn-secondary" onClick={e => { e.preventDefault(); scrollTo('#features') }}>
                            Explore Services
                        </a>
                    </div>
                </div>

                {/* Live stats strip */}
                <div className="hero-micro-stats">
                    <span className="ms-item"><span className="ms-dot green" />500+ Projects Delivered</span>
                    <span className="ms-sep">·</span>
                    <span className="ms-item"><span className="ms-dot green" />98% Satisfaction Rate</span>
                    <span className="ms-sep">·</span>
                    <span className="ms-item"><span className="ms-dot green" />200+ Global Clients</span>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-hint" aria-hidden>
                <div className="scroll-mouse"><div className="scroll-dot" /></div>
                <span className="scroll-label">Scroll to explore</span>
            </div>
        </section>
    )
}
