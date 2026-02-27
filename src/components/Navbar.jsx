import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Reviews', to: '/reviews' },
    { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', fn, { passive: true })
        return () => window.removeEventListener('scroll', fn)
    }, [])

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
                            <span className="gi-logo-name">Gro Innovative</span>
                            <span className="gi-logo-sub">Software & IT</span>
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

                    {/* CTA */}
                    <div className="gi-nav-cta">
                        <Link to="/contact" className="btn btn-primary btn-sm">
                            Get a Quote
                        </Link>
                    </div>

                    {/* Hamburger */}
                    <button className={`gi-ham${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
                        <span /><span /><span />
                    </button>
                </div>
            </header>

            {/* Mobile menu */}
            <div className={`gi-mobile-menu${open ? ' open' : ''}`}>
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
                <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
                    Get a Quote
                </Link>
            </div>
        </>
    )
}
