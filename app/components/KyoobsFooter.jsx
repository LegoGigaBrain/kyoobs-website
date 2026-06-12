"use client";

import { FaDiscord, FaInstagram, FaXTwitter } from "react-icons/fa6";

const websiteAsset = (file) => `/assets/website-elements/${file}`;

export default function KyoobsFooter() {
  return (
    <footer className="site-footer">
      <img className="footer-icon" src={websiteAsset("Kyoobs-icon.svg")} alt="KYOOBS" />
      <p>© 2026 Tlotlego Maboe. Kyoobs and associated artwork are copyrighted 2026. All right reserved.</p>
      <div className="socials" aria-label="Social links">
        <a href="#" aria-label="KYOOBS on X">
          <FaXTwitter aria-hidden="true" />
        </a>
        <a href="#" aria-label="KYOOBS on Instagram">
          <FaInstagram aria-hidden="true" />
        </a>
        <a href="#" aria-label="KYOOBS on Discord">
          <FaDiscord aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
