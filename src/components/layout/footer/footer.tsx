"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/image/logo.png"; // Header-dəki ilə eyni
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

// Navbar faylından export etdiyin massivləri istifadə edirik
import { centerTitles, educationTitles } from "@/const";

const socials = [
  { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://youtube.com", label: "YouTube", Icon: Youtube },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-neutral-50 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300">
      {/* Top */}
      <div className="container mx-auto px-5 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={Logo}
                alt="InnoHub logo"
                className="h-10 w-10 rounded-lg object-contain"
                priority
              />
              <span className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                InnoHub
              </span>
            </Link>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Gələcəyin texnologiyalarını öyrənin və karyeranızı inkişaf etdirin.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Mərkəz haqqında */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Mərkəz haqqında
            </h3>
            <ul className="space-y-2 text-sm">
              {centerTitles.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-600 transition hover:text-sky-500 dark:text-neutral-400"
                  >
                    {/* i18n varsa t(item.title) ilə əvəz edə bilərsən */}
                    {humanize(item.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tədris sahələri */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Tədris sahələri
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 lg:grid-cols-1">
              {educationTitles.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-600 transition hover:text-sky-500 dark:text-neutral-400"
                  >
                    {humanize(item.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Əlaqə */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Əlaqə
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-neutral-700 dark:text-neutral-300">
                Telefon: <span className="font-medium">+994 XX XXX XX XX</span>
              </p>
              <p className="text-neutral-700 dark:text-neutral-300">
                Email:{" "}
                <Link
                  href="mailto:info@innohub.az"
                  className="font-medium text-sky-600 hover:underline dark:text-sky-400"
                >
                  info@innohub.az
                </Link>
              </p>
              <p className="text-neutral-700 dark:text-neutral-300">
                Ünvan: Bakı, Azərbaycan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto px-5 py-5 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            &copy; {year} InnoHub. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
}

/** "about" -> "About", "ui_ux_design" -> "Ui ux design" (sadə humanize) */
function humanize(key: string) {
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}
