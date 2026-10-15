import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { business, navItems } from "@/content/site";
import { useTheme } from "@/contexts/ThemeContext";
import { trpc } from "@/lib/trpc";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  return <div className="site-shell">
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}><span className="wordmark-dot" />WEBORA<span className="wordmark-digital">DIGITAL</span></Link>
        <nav className={`desktop-nav ${open ? "mobile-open" : ""}`} aria-label="Primary navigation">
          {navItems.map(([label, href]) => <Link key={href} href={href} className={location === href ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>Start a conversation <ArrowUpRight size={16} /></Link>
        </nav>
        <div className="header-actions"><button className="icon-button" onClick={toggleTheme} aria-label="Toggle color theme">{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}</button><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button></div>
      </div>
    </header>
    <main>{children}</main>
    <footer className="site-footer"><div className="container footer-grid"><div><Link href="/" className="wordmark footer-mark"><span className="wordmark-dot" />WEBORA<span className="wordmark-digital">DIGITAL</span></Link><p className="footer-note">Websites built to get found, build trust, and generate enquiries.</p></div><div><p className="footer-label">Explore</p>{navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<Link href="/contact">Contact</Link></div><div><p className="footer-label">Contact</p><a href={`mailto:${business.email}`}>{business.email}</a><a href={`tel:${business.phone.replace(/\s/g, "")}`}>{business.phone}</a><a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a><NewsletterForm /></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Webora Digital</span><span><Link href="/privacy">Privacy</Link> <Link href="/terms">Terms</Link></span></div></footer>
  </div>;
}

function NewsletterForm() { const mutation = trpc.leads.subscribe.useMutation(); const [email, setEmail] = useState(""); return <form className="newsletter-form" onSubmit={e => { e.preventDefault(); mutation.mutate({ email }, { onSuccess: () => setEmail("") }); }}><label className="footer-label" htmlFor="newsletter-email">Get useful website notes</label><div><input id="newsletter-email" type="email" required placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} /><button aria-label="Subscribe" disabled={mutation.isPending}><ArrowUpRight size={15} /></button></div>{mutation.isSuccess && <small>Subscribed.</small>}{mutation.error && <small>Try again later.</small>}</form>; }

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) { return <section className="page-intro"><div className="container split-intro"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div><p className="intro-copy">{copy}</p></div></section>; }

export function CTA({ label = "Book a free consultation", href = "/book" }: { label?: string; href?: string }) { return <Link className="button button-primary" href={href}>{label}<ArrowUpRight size={17} /></Link>; }
