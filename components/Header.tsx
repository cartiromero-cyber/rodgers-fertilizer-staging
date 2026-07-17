"use client";
import Link from "next/link";
import { useState } from "react";
import { primaryNav, utilityNav, site } from "@/content/site";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container hdr">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <b>RODGERS FERTILIZER</b>
          <span>Saluda, SC · Since {site.since}</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          {primaryNav.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <Link className="btn btn-primary" href="/request-a-quote">Request a Quote</Link>
        </nav>
        <button className="menu-btn" aria-expanded={open} aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <div className={"mobile-drawer" + (open ? " mobile-open" : "")}>
        {primaryNav.concat(utilityNav).map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <Link href="/request-a-quote" onClick={() => setOpen(false)} style={{ fontWeight: 800, color: "var(--green)" }}>
          Request a Quote →
        </Link>
      </div>
    </header>
  );
}
