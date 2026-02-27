import { useEffect, useRef } from 'react'
import useMagnet from '../hooks/useMagnet'
import './Hero.css'

// Text scramble utility
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*'

function scrambleText(el, finalText, duration = 900) {
    let interval
    const chars = CHARS
    let iteration = 0
    const totalFrames = Math.ceil(duration / 40)
    clearInterval(interval)
    interval = setInterval(() => {
        el.textContent = finalText.split('').map((char, idx) => {
            if (idx < Math.floor(iteration)) return finalText[idx]
            if (char === ' ') return ' '
            return chars[Math.floor(Math.random() * chars.length)]
        }).join('')
        iteration += finalText.length / totalFrames
        if (iteration >= finalText.length) {
            clearInterval(interval)
            el.textContent = finalText
        }
    }, 40)
}

export default function Hero() {
    const gridRef = useRef(null)
    const title1Ref = useRef(null)
    const title2Ref = useRef(null)
    const title3Ref = useRef(null)
    const subRef = useRef(null)
    const btnsRef = useRef(null)
    const badgeRef = useRef(null)
    const magnet1 = useMagnet(0.4)
    const magnet2 = useMagnet(0.3)

    // Animated grid mouse parallax
    useEffect(() => {
        const onMove = (e) => {
            const grid = gridRef.current
            if (!grid) return
            const x = (e.clientX / window.innerWidth - 0.5) * 24
            const y = (e.clientY / window.innerHeight - 0.5) * 24
            grid.style.transform = `translate(${x}px, ${y}px)`
        }
        window.addEventListener('mousemove', onMove, { passive: true })
        return () => window.removeEventListener('mousemove', onMove)
    }, [])

    // Staggered entrance + text scramble
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
        // Scramble title lines after they appear
        setTimeout(() => { if (title1Ref.current) scrambleText(title1Ref.current, 'Zero Friction.', 800) }, 300)
        setTimeout(() => { if (title2Ref.current) scrambleText(title2Ref.current, 'Maximum Velocity.', 900) }, 450)
        setTimeout(() => { if (title3Ref.current) scrambleText(title3Ref.current, 'Infinite Scale.', 700) }, 600)
    }, [])

    const scrollTo = (href) => {
        const el = document.querySelector(href)
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' })
    }

    return (
        <section className="hero" id="home">
            {/* Animated grid background */}
            <div className="hero-grid-wrap" aria-hidden>
                <div className="hero-grid" ref={gridRef} />
                <div className="hero-grid-fade" />
            </div>

            {/* Glow orbs */}
            <div className="hero-orb orb-a" aria-hidden />
            <div className="hero-orb orb-b" aria-hidden />
            <div className="hero-orb orb-c" aria-hidden />

            {/* Diagonal beams */}
            <div className="hero-beams" aria-hidden>
                <div className="beam beam-1" />
                <div className="beam beam-2" />
                <div className="beam beam-3" />
                <div className="beam beam-4" />
            </div>

            {/* Content */}
            <div className="hero-content">
                <div className="hero-badge" ref={badgeRef}>
                    <span className="badge-dot" />
                    WORLD-CLASS SOFTWARE ENGINEERING
                    <span className="badge-shine" />
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
                    <div
                        className="magnet-wrap"
                        ref={magnet1.ref}
                        onMouseMove={magnet1.handleMouseMove}
                        onMouseLeave={magnet1.handleMouseLeave}
                    >
                        <a href="#contact" className="btn-grad hero-cta-primary" onClick={e => { e.preventDefault(); scrollTo('#contact') }}>
                            <span className="cta-label">Start Your Project</span>
                            <span className="cta-arrow">→</span>
                            <span className="cta-ripple" />
                        </a>
                    </div>
                    <div
                        className="magnet-wrap"
                        ref={magnet2.ref}
                        onMouseMove={magnet2.handleMouseMove}
                        onMouseLeave={magnet2.handleMouseLeave}
                    >
                        <a href="#features" className="btn-outline" onClick={e => { e.preventDefault(); scrollTo('#features') }}>
                            Explore Services
                        </a>
                    </div>
                </div>

                {/* Live stats strip */}
                <div className="hero-micro-stats">
                    <span className="ms-item"><span className="ms-dot green" />500+ Projects Delivered</span>
                    <span className="ms-sep">·</span>
                    <span className="ms-item"><span className="ms-dot blue" />98% Satisfaction Rate</span>
                    <span className="ms-sep">·</span>
                    <span className="ms-item"><span className="ms-dot orange" />200+ Global Clients</span>
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
