"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const websiteAsset = (file) => `/assets/website-elements/${file}`;

const navItems = [
  { label: "EMANATION", href: "/" },
  { label: "CREATION", href: "/about" },
  { label: "FORMATION", href: "/world-of-formation" },
  { label: "MANIFESTATION", href: "/manifestation" }
];

export default function KyoobsHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const MenuIcon = isMenuOpen ? FiX : FiMenu;

  return (
    <header className="site-header" data-menu-open={isMenuOpen} aria-label="KYOOBS site header">
      <a className="site-header-mark" href="/" aria-label="KYOOBS home">
        <img className="wordmark" src={websiteAsset("Kyoobs-logo-wordmark.svg")} alt="KYOOBS" />
      </a>

      <nav className="site-header-nav" aria-label="KYOOBS worlds">
        {navItems.map((item) => (
          <a className="site-header-nav-button" href={item.href} key={item.href} onClick={() => setIsMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className="site-header-menu-toggle"
        type="button"
        aria-label={isMenuOpen ? "Close KYOOBS navigation" : "Open KYOOBS navigation"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <MenuIcon aria-hidden="true" />
      </button>

      <button className="wallet-button" type="button">
        CONNECT
      </button>
    </header>
  );
}
