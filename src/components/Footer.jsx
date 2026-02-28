import { Link } from 'react-router-dom'
import './Footer.css'

const services = ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'Digital Marketing', 'Logo Design', 'IT Consulting']
const company = ['About Us', 'How It Works', 'Pricing', 'Reviews', 'Contact']
const social = [
    { icon: '𝕏', label: 'Twitter', href: '#' },
    { icon: 'in', label: 'LinkedIn', href: '#' },
    { icon: 'f', label: 'Facebook', href: '#' },
]

export default function Footer() {
    return (
        <footer className="gi-footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="gi-logo" style={{ marginBottom: 16 }}>
                            <div className="gi-logo-mark"><span>G</span></div>
                            <div className="gi-logo-text">
                                <span className="gi-logo-name">GroInnovative</span>
                            </div>
                        </div>
                        <p className="footer-tagline">
                            We build software that scales.<br />
                            Trusted by 50+ businesses worldwide.
                        </p>
                        <div className="footer-socials">
                            {social.map(s => (
                                <a key={s.label} href={s.href} className="social-icon" aria-label={s.label}>{s.icon}</a>
                            ))}
                        </div>
                    </div>
                    {/* Services */}
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            {services.map(s => <li key={s}><Link to="/services">{s}</Link></li>)}
                        </ul>
                    </div>
                    {/* Company */}
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            {company.map(c => (
                                <li key={c}><Link to={`/${c.toLowerCase().replace(/ /g, '-').replace("'", '')}`}>{c}</Link></li>
                            ))}
                        </ul>
                    </div>
                    {/* Contact */}
                    <div className="footer-col">
                        <h4>Get in Touch</h4>
                        <ul className="footer-contact-list">
                            <li>📧 hello@groinnovative.com</li>
                            <li>📞 +91 98765 43210</li>
                            <li>📍 Bangalore, India</li>
                        </ul>
                        <Link to="/contact" className="btn btn-primary btn-sm" style={{ marginTop: 16, display: 'inline-flex' }}>
                            Start a Project
                        </Link>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} GroInnovative Pvt. Ltd. All rights reserved.</p>
                    <p>Made with ❤️ by GroInnovative</p>
                </div>
            </div>
        </footer>
    )
}
