import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    const location = useLocation()

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', fn, { passive: true })
        return () => window.removeEventListener('scroll', fn)
    }, [])

    useEffect(() => {
        setOpen(false)
    }, [location.pathname])

    return (
        <>
            <header className={`gi-nav${scrolled ? ' scrolled' : ''}`}>
                <div className="container gi-nav-inner">
                    {/* Logo */}
                    <Link to="/" className="gi-logo" onClick={() => setOpen(false)}>
                        <div className="gi-logo-mark">
                            <span>G</span>
                        </div>
                        <div className="gi-logo-text">
                            <span className="gi-logo-name">GroInnovative</span>
                        </div>
                    </Link>

                    {/* Desktop links */}
                    <nav className="gi-links">
                        {navLinks.map(l => (
                            <NavLink
                                key={l.to}
                                to={l.to}
                                end={l.to === '/'}
                                className={({ isActive }) => `gi-link${isActive ? ' active' : ''}`}
                            >
                                {l.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="gi-nav-right">
                        {/* CTA */}
                        <div className="gi-nav-cta">
                            <Link to="/contact" className="btn btn-primary btn-sm">
                                Get a Quote
                            </Link>
                        </div>
                    </div>

                    {/* Hamburger */}
                    <button className={`gi-ham${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
                        <span /><span /><span />
                    </button>
                </div>
            </header>

            {/* Mobile menu */}
            <div className={`gi-mobile-menu${open ? ' open' : ''}`}>
                <div className="mobile-menu-header">
                    <button className="gi-close-btn" onClick={() => setOpen(false)} aria-label="Close menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
                {navLinks.map(l => (
                    <NavLink
                        key={l.to}
                        to={l.to}
                        end={l.to === '/'}
                        className={({ isActive }) => `gi-mobile-link${isActive ? ' active' : ''}`}
                        onClick={() => setOpen(false)}
                    >
                        {l.label}
                    </NavLink>
                ))}
                <div className="mobile-cta-wrapper" style={{ marginTop: '20px' }}>
                    <Link to="/contact" className="btn btn-primary btn-block" onClick={() => setOpen(false)}>
                        Get a Quote
                    </Link>
                </div>
            </div>
        </>
    )
}
