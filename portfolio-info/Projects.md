# Projects

## Tickora

A tracking layer on top of Atlassian Jira — personal and team dashboards, one-click hour logging that writes straight back as a Jira worklog, an RPG-style progression system (XP, levels, ranks from Base Camp to Pinnacle, streaks, achievements), and manager-facing reports, while Jira stays the system of record. Scope is deliberately limited to tracking, updating, logging, monitoring, and reporting — no creation of new Jira issues. The personal dashboard shows today's progress, this week's hours vs. target, and a live player card; My Work gives a cleaner filterable ticket list than Jira's own board; Team and Reports pages surface hours logged, tickets completed, and workload per person, daily/weekly/monthly, exportable to CSV.

**Technologies:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Radix UI, Motion, TanStack Query, Recharts, MySQL, Prisma, Vitest

**Code:** https://github.com/ammansoomro/tickora
**Assets:** /works/tickora/screenshot-1.jpg, /works/tickora/screenshot-2.jpg, /works/tickora/screenshot-3.jpg, /works/tickora/screenshot-4.jpg, /works/tickora/screenshot-5.jpg

## Wealth Deck

A comprehensive full-stack web application for tracking and managing your investment portfolio across multiple asset classes. Built with modern technologies to provide real-time portfolio insights, beautiful visualizations, and intuitive user experience. Features multi-asset tracking including cryptocurrencies (BTC, ETH, SOL, XRP, and more), Pakistan Stock Exchange (PSX) stocks, mutual funds, silver holdings (bars, coins, tola), and VPS (Voluntary Pension Scheme) funds. Includes a real-time portfolio overview with interactive charts, profit/loss tracking, asset breakdown with performance metrics, salary allocation tools, investment calculator, SIP calculator, and automatic crypto price updates via CoinGecko API.

**Technologies:** TypeScript, React, Node.js, PostgreSQL, Prisma, Express.js, Vite, Tailwind CSS, Framer Motion, Recharts, Radix UI, React Router DOM, Axios, CoinGecko API

**Code:** https://github.com/ammansoomro/investment-tracker
**Live:** https://wealthdeck.vercel.app
**Assets:** /works/wealth-deck/screenshot-1.png, /works/wealth-deck/screenshot-2.png, /works/wealth-deck/screenshot-3.png

## GitHub Defect Marker

A Chrome extension that helps reviewers classify defects while leaving review comments on GitHub pull requests. Tick Mark as Defect in any PR comment box, pick a Severity (Major, Minor, Cosmetic) and a Defect Type (Missing, Extra, Risk-prone, Ambiguous, Inconsistent, Improvement, Factually Incorrect) via one-click pills, and a machine-readable label (#Major:Missing, #Cosmetic:Improvement, ...) is inserted at the start of the comment — with submission blocked until the label is complete and present. Features a live label preview chip, native GitHub theming via Primer CSS variables (light, dark, dark-dimmed, and high-contrast), full accessibility with aria-live validation and reduced-motion support, and zero data collection — no background worker, no network requests, no storage, and zero Chrome permissions. Published on the Chrome Web Store, with a fully static marketing landing page built with Next.js 15 (App Router), React 19, and Tailwind CSS v4.

**Technologies:** JavaScript, Chrome Extension (Manifest V3), HTML5, CSS3, GitHub Primer CSS, Next.js 15, React 19, Tailwind CSS v4, lucide-react

**Code:** https://github.com/ammansoomro/github-defect-marker
**Live:** https://defect-marker.vercel.app/
**Chrome Web Store:** https://chromewebstore.google.com/detail/github-defect-marker/jjdoipaabbleocomabmeleioohlikdlf
**Assets:** /works/github-defect-marker/screenshot-1.png, /works/github-defect-marker/screenshot-2.png, /works/github-defect-marker/screenshot-3.png

## PR Analysis Dashboard

A comprehensive full-stack web application designed as an in-house tool to help development teams monitor and gain deep insights into their pull request workflows, code quality, and team collaboration patterns. Built with modern web technologies, this dashboard transforms raw GitHub and Bitbucket PR data into actionable intelligence through intuitive visualizations, AI-powered analysis, and detailed reporting capabilities. Features multi-platform integration (GitHub OAuth and Bitbucket), comprehensive PR analysis with defect tracking and categorization, team collaboration insights with reviewer analytics, AI-powered insights using OpenAI GPT-4o-mini for natural language analysis, advanced filtering and search capabilities, detailed PR views with defect management, and interactive visualizations powered by Recharts.

**Technologies:** TypeScript, React, Node.js, Express.js, MySQL, Prisma, Vite, Tailwind CSS, Framer Motion, Recharts, Radix UI, React Router DOM, Passport.js, OpenAI API, GitHub API, Bitbucket API, Axios

**Code:** https://github.com/ammansoomro/pr-analytics-dashboard
**Assets:** /works/pr-analysis-dashboard/screenshot-1.jpg, /works/pr-analysis-dashboard/screenshot-10.jpg, /works/pr-analysis-dashboard/screenshot-2.jpg, /works/pr-analysis-dashboard/screenshot-3.jpg, /works/pr-analysis-dashboard/screenshot-4.jpg, /works/pr-analysis-dashboard/screenshot-5.jpg, /works/pr-analysis-dashboard/screenshot-6.jpg, /works/pr-analysis-dashboard/screenshot-7.jpg, /works/pr-analysis-dashboard/screenshot-8.jpg, /works/pr-analysis-dashboard/screenshot-9.jpg

## Jira Quick Logger

A Chrome extension that fills your Jira Log Work form's Stage of Introduction, Description, and Fix Versions from your saved defaults, so you only ever type Time Spent. Detects Jira's own Log Work dialog via a MutationObserver and label-text matching — not brittle CSS classes — so it survives Jira version and theme differences, and re-runs on every DOM mutation to keep working across issue navigation and modal close/reopen. Supports multi-value Fix Versions across both native selects and chip-based pickers, and never touches Time Spent, validation, or submission — Jira's own form is left untouched. Defaults live only in chrome.storage.sync: no account, no network requests, no analytics. Toggle auto-fill anytime from the toolbar popup. Published on the Chrome Web Store, with a static marketing landing page built with Next.js 15 and Tailwind CSS.

**Technologies:** JavaScript, Chrome Extension (Manifest V3), HTML5, CSS3, Next.js 15, React 19, Tailwind CSS, lucide-react

**Code:** https://github.com/ammansoomro/jira-logger
**Live:** https://jira-logger-landing.vercel.app/
**Chrome Web Store:** https://chromewebstore.google.com/detail/ihffbbpagemhcgomggjahhpondilabok
**Assets:** /works/jira-quick-logger/screenshot-1.png

## DB Mirror — Web Edition

A refined, browser-based tool for comparing the schema and data of two Microsoft SQL Server databases — a Next.js rewrite of the original PyQt6 desktop tool, reimagined as a fast web app with a guided four-step flow (Connect → Databases → Tables → Compare), live streaming progress, and one-click exports. The stateless comparison engine discovers base tables on both sides and intersects them, performs a schema diff over INFORMATION_SCHEMA.COLUMNS (tables/columns present on one side only, plus type mismatches), and runs a per-table data diff: it looks up the real primary key from INFORMATION_SCHEMA.KEY_COLUMN_USAGE to match rows into source-only, target-only and changed (per-column) sets, falling back to a multiset diff on the normalized row when no PK exists. All values are normalized to strings (dates → ISO, buffers → hex) so 1 vs 1.0 never registers as a false difference, volatile columns are excluded, and tables over 100k rows are flagged as sampled. Each table's result streams over Server-Sent Events as it completes, and reports export to self-contained HTML, CSV, or JSON. Comparison is strictly read-only, identifiers are bracket-escaped, values use bound parameters, and credentials are entered per session and never persisted — with a demo mode to explore the full UI without a live database.

**Technologies:** Next.js 15, React 19, TypeScript, mssql (tedious), SQL Server, Tailwind CSS, Framer Motion, Zustand, Server-Sent Events

**Code:** https://github.com/ammansoomro/db-mirror
**Live:** https://db-mirror.vercel.app
**Assets:** /works/db-mirror/screenshot-1.png, /works/db-mirror/screenshot-2.png, /works/db-mirror/screenshot-3.png, /works/db-mirror/screenshot-4.png

## Cluedo Companion

A premium digital detective notes sheet for the board game Cluedo — track clues, eliminate suspects, and solve the mystery. Features an interactive deduction grid where each cell cycles through five states (check, cross, maybe, self-held), support for 2-6 players with renamable columns, per-card notes, and a free-form detective journal. The board is analyzed live: cards held by any player are eliminated from the murder envelope, each category shows remaining candidates and flags the answer when exactly one remains, and an overall completion meter tracks progress. Multiple investigations are managed as persistent case files (saved to localStorage via Zustand persist), and any case can be shared with friends through a compact URL-safe encoded link. Wrapped in a detective-themed dark UI with Cinzel, Cormorant Garamond, and Special Elite typography, Framer Motion animations, and optional sound effects.

**Technologies:** Next.js, React 19, TypeScript, Tailwind CSS v4, Zustand, Framer Motion, lucide-react

**Code:** https://github.com/ammansoomro/cluedo-companion
**Live:** https://cluedo-companion.vercel.app
**Assets:** /works/cluedo-companion/screenshot-1.png

## Prompt-O-Phobia

Empower your creativity using Next.js. Shape unique prompts for advanced AI interaction, revolutionizing AI-driven experiences. Your innovation knows no bounds with this platform. Share and redefine possibilities today!

**Technologies:** Next.js, React, TypeScript, Tailwind CSS, AI Integration

**Code:** https://github.com/ammansoomro/prompt-o-phobia
**Live:** https://prompt-o-phobia.vercel.app/
**Assets:** /works/prompt-o-phobia/screenshot-1.png, /works/prompt-o-phobia/screenshot-2.png, /works/prompt-o-phobia/screenshot-3.png

## Arcade Vault

A small-scale e-commerce platform built with React, Node.js, Stripe, and Multer to explore payment processing and file uploads. Arcade-Vault is an experimental gaming store where users can browse and purchase controllers, consoles, games, and headsets. This project started as an exploration of Stripe Payments but later expanded to include Multer for file uploads, leading to a broader learning experience.

**Technologies:** React, Vite, Tailwind CSS, Node.js, Express.js, MongoDB, Stripe, Multer

**Code:** https://github.com/ammansoomro/arcade-vault
**Assets:** /works/arcade-vault/screenshot-1.jpg, /works/arcade-vault/screenshot-2.png, /works/arcade-vault/screenshot-3.png, /works/arcade-vault/screenshot-4.png, /works/arcade-vault/screenshot-5.png, /works/arcade-vault/screenshot-6.png

## Moviebase

This project is a YTS clone built using React and its libraries, and it's populated using YTS official API. It provides users with an interface that allows them to browse, search and download movies torrents from YTS website.

**Technologies:** React, HTML, CSS, styled-components, react-router-dom, framer-motion, react-paginate, @splidejs/react-splide, YTS API

**Code:** https://github.com/ammansoomro/Moviebase
**Live:** https://moviebase-yts.netlify.app/
**Assets:** /works/moviebase/screenshot-1.jpg, /works/moviebase/screenshot-2.png, /works/moviebase/screenshot-3.png, /works/moviebase/screenshot-4.png

## Shadow Sensei

A web-based, Student Management System built using HTML, CSS, PHP, and JavaScript that would store all the data about the students and their courses on a PHP MySQL server.

**Technologies:** PHP, MySQL, HTML5, CSS3, JavaScript

**Code:** https://github.com/ammansoomro/ShadowSensei
**Assets:** /works/shadow-sensei/screenshot-1.jpg, /works/shadow-sensei/screenshot-2.jpg, /works/shadow-sensei/screenshot-3.jpg, /works/shadow-sensei/screenshot-4.jpg, /works/shadow-sensei/screenshot-5.jpg
