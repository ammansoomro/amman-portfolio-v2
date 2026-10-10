Animation architecture**

# PROJECT: AMMAN SOOMRO — PREMIUM DEVELOPER PORTFOLIO

You are a senior frontend engineer, creative developer, UI/UX designer,
interaction designer, and digital art director.

Your task is to DESIGN AND IMPLEMENT a complete, production-quality
personal portfolio website for Amman Soomro, a Software Engineer.

This is not a generic developer portfolio.

The website must feel like a premium digital experience crafted by a
high-end design studio: visually distinctive, technically sophisticated,
minimal, immersive, fast, and exceptionally polished.

I have attached a BRAND IDENTITY AND WEBSITE DESIGN REFERENCE IMAGE.

THIS IMAGE IS YOUR PRIMARY DESIGN SPECIFICATION.

Study the reference carefully before writing any code. Extract its
visual language, color palette, typography, component styles, spacing,
graphic elements, and overall composition.

Recreate that visual identity as closely as possible while adapting
the layouts into a real, responsive, fully functional website.

Do not interpret the image as loose inspiration.
Do not replace the design with your own generic portfolio template.
Do not introduce an unrelated design system.

The final result should look and feel like the website shown in the
reference image, translated into a real application.

============================================================
01. PRIMARY OBJECTIVE
=====================

Build a complete portfolio website with the following sections:

1. Landing / Hero
2. About Me
3. Work Experience
4. Featured Projects
5. Skills and Technologies
6. Contact
7. Individual Project Case Study Pages

The homepage should tell a cohesive story about me as a software
engineer.

Each substantial project must have its own dedicated route and a
carefully designed case-study experience.

The website must support:

- Responsive desktop, tablet, and mobile layouts.
- Dark mode as the primary experience.
- A functional light/dark theme toggle.
- Persistent theme preferences.
- Smooth navigation and scrolling.
- Sophisticated animations using Framer Motion and GSAP.
- Real project screenshots and meaningful project descriptions.
- Accessible keyboard navigation.
- Excellent performance.
- Search-engine-friendly project pages.
- Reusable components and maintainable architecture.

Do not stop after building the hero section.

Implement the entire website, including all major sections,
project detail pages, responsive layouts, interactions, and states.

============================================================
02. BRAND IDENTITY — FOLLOW THE REFERENCE IMAGE
================================================

BRAND NAME:
Amman Soomro

PROFESSIONAL TITLE:
Software Engineer

BRAND MONOGRAM:
AS.

PRIMARY TAGLINE:
"Building thoughtful digital experiences through code."

BRAND PERSONALITY:

- Modern
- Minimal
- Technical
- Premium
- Thoughtful
- Confident
- Detail-oriented

The design should communicate technical expertise through the
quality of the interface rather than excessive decoration.

It should look like a carefully crafted personal brand belonging
to an experienced software engineer.

It must NOT look like:

- A generic AI-generated portfolio.
- A standard SaaS landing page.
- A gaming website.
- A cryptocurrency website.
- A futuristic dashboard.
- A template filled with gradients.
- A generic shadcn/ui starter project.

Avoid the familiar purple-indigo AI aesthetic.

The attached reference uses a near-black canvas, subtle green accents,
precise typography, thin borders, refined interface components, and
abstract flowing lines.

Preserve that direction.

============================================================
03. COLOR SYSTEM
================

Use the following design tokens as the initial palette, matching
them to the attached reference as closely as possible.

PRIMARY DARK THEME:

--background: #0B0B0D;
--surface: #111214;
--card: #16181B;
--border: #1F2327;

--foreground: #E5E7EB;
--foreground-secondary: #A0A6B2;
--foreground-muted: #6B7280;

--accent: #A7F280;
--accent-hover: #B9F59B;
--accent-foreground: #10130D;

--success: #A7F280;
--warning: #F59E0B;
--error: #EF4444;

Use the mint accent sparingly for:

- Primary buttons.
- Selected navigation states.
- Important text highlights.
- Small status indicators.
- Interactive details.
- Focus states where appropriate.
- Small graphic accents.

The accent must never dominate the page.

Most of the interface should remain near-black, charcoal, and
soft white.

Avoid large green backgrounds and excessive green glow.

Do not apply gradients to every component.

ABSTRACT GRAPHIC LANGUAGE:

The reference contains delicate flowing lines that resemble
topographic contours or elegant digital waveforms.

Recreate this visual language using restrained SVG graphics.

Use these lines as an occasional decorative element in:

- The hero.
- Selected project presentations.
- Section transitions.
- The footer.

The graphics should feel technical and sophisticated.

They must not look like plants, landscapes, or nature-themed branding.

Avoid making mountains, plants, or stock landscape imagery the
central identity of the site.

If a project requires screenshots, prioritize actual product
interfaces over decorative stock images.

LIGHT THEME:

Implement a coordinated light theme using semantic CSS variables.

Use a restrained combination of:

- Soft neutral background.
- White surfaces.
- Dark typography.
- Muted secondary text.
- The same mint-green brand accent.
- Subtle borders.

The light theme should preserve the same brand identity rather than
looking like an unrelated template.

Dark mode is the default visual priority.

============================================================
04. TYPOGRAPHY
==============

Use:

PRIMARY FONT:
Geist Sans.

MONOSPACE FONT:
Geist Mono.

OPTIONAL ACCENT FONT:
A restrained serif typeface only where it genuinely improves the
editorial character of a project or a specific heading.

Geist should dominate the interface.

Typography should feel clean, modern, precise, and technical.

Use strong typographic hierarchy.

Suggested desktop scale:

Hero headline: clamp(3.5rem, 6vw, 6.5rem)
Section headings: clamp(2.5rem, 4vw, 4rem)
Project headings: clamp(2rem, 3vw, 3.5rem)
Body text: 1rem to 1.125rem
Metadata: 0.7rem to 0.85rem

These are starting points, not rigid rules.

Use responsive sizing and carefully controlled line lengths.

The hero heading should feel substantial without overwhelming
the supporting content.

Use uppercase micro-labels, subtle letter spacing, and monospace
metadata to reinforce the technical visual identity.

Do not make every heading uppercase.

Do not use excessively thin typography that becomes difficult
to read against dark backgrounds.

============================================================
05. LAYOUT AND DESIGN PRINCIPLES
================================

Use a consistent spacing system based on multiples of four:

4, 8, 12, 16, 24, 32, 48, 64, 96, 128.

Use a centered content container with a maximum width of approximately
1280px.

Create generous whitespace.

Use subtle borders rather than heavy shadows.

Prefer precise alignment, asymmetric compositions, and strong
typographic hierarchy.

Cards should have restrained corner radii, generally between
8px and 14px.

Avoid excessive rounded pills and oversized capsule-shaped
containers.

Buttons may use slightly rounded corners.

Navigation should be compact and refined.

Use CSS Grid and Flexbox to create intentional layouts.

Avoid making every section look like a collection of identical cards.

Every section should have its own visual rhythm while remaining
consistent with the overall design system.

The website should feel designed, not assembled from a UI kit.

============================================================
06. NAVIGATION
==============

Create a refined, responsive navigation bar.

LEFT:
AS. wordmark.

CENTER OR RIGHT:
About
Experience
Projects
Skills
Contact

FAR RIGHT:
Theme toggle.
Résumé button or link.

Use a compact, understated design.

The navigation should be fixed or sticky where appropriate.

At the top of the page, it may have a transparent background.

As the visitor scrolls, transition into a subtle dark surface with
a fine border or restrained backdrop blur.

Avoid oversized navigation bars.

On mobile, use a carefully designed compact navigation menu.

The mobile menu should open and close smoothly, support keyboard
navigation, and prevent background interaction while open.

Navigation links should scroll to the appropriate sections on the
homepage.

On project pages, navigation should remain functional and provide
a clear route back to the main portfolio.

============================================================
07. HERO SECTION
================

This is the most important first impression.

Recreate the composition and atmosphere shown in the reference image.

Suggested content:

MICRO-LABEL:
SOFTWARE ENGINEER · KARACHI, PAKISTAN

HEADLINE:

"Building thoughtful
digital experiences
through code."

Highlight the word "code." using the brand accent.

Supporting paragraph:

"I'm Amman Soomro, a software engineer focused on building
scalable applications, clean interfaces, and meaningful products."

PRIMARY BUTTON:
Explore my work →

SECONDARY BUTTON:
Get in touch

Below the content, display a compact set of technology labels.

Possible labels:

React
Next.js
TypeScript
Node.js
Tailwind CSS
PostgreSQL

Only display technologies that accurately represent my skills.

VISUAL COMPOSITION:

The hero should use a sophisticated asymmetric layout.

Keep the headline and supporting content readable.

Introduce the abstract flowing line graphic from the reference,
using SVG paths or another lightweight, responsive technique.

The graphic should sit behind or alongside the content without
compromising contrast.

Use subtle depth, controlled lighting effects, and restrained
movement.

Do not add an unrelated 3D object.

Do not create a giant glowing sphere.

Do not add a full-screen particle background.

Do not place the entire hero inside a giant glass card.

The design should remain predominantly dark and editorial.

The hero must be visually impressive even when all animations
are disabled.

============================================================
08. ABOUT SECTION
=================

Section label:
01 / ABOUT

Heading:
Engineering with an eye for detail.

Create a thoughtful introduction to my background and engineering
philosophy.

Suggested copy:

"I'm a software engineer who enjoys building products that combine
thoughtful interfaces with reliable engineering.

My work spans frontend development, enterprise applications, and
full-stack projects. I care about writing maintainable code,
understanding the problems I'm solving, and creating experiences
that feel effortless to use."

Keep the layout editorial and minimal.

Use a combination of typography, spacing, subtle dividers, and
a restrained supporting visual.

Do not invent personal details.

Do not add fake statistics.

Do not add a random portrait placeholder unless an actual portrait
is available.

You may include concise professional highlights supported by my
actual experience.

============================================================
09. WORK EXPERIENCE
===================

Section label:
02 / EXPERIENCE

Heading:
My professional journey.

Use an editorial timeline rather than generic employment cards.

The timeline should have:

- Company name.
- Job title.
- Employment dates.
- Concise description.
- Relevant responsibilities.
- Technologies or domains.
- Optional expandable details.

Known professional background:

MATRIX SYSTEMS
Software Development Engineer II.
Current role, subject to verification of exact dates and responsibilities.

TECHLOGIX
Software Engineer.
Worked on digital banking applications and frontend development
for enterprise banking experiences.

My work has included modules involving fund transfers, bill payments,
mobile top-ups, digital account opening, and related banking workflows.

Represent these details accurately.

Do not fabricate dates, achievements, metrics, or business outcomes.

Do not disclose confidential company information.

DESIGN:

Use a thin vertical timeline or an editorial two-column layout.

Dates should occupy a narrow column.

Descriptions should have sufficient room to breathe.

Use small accent indicators and subtle entrance animations.

On mobile, collapse the layout into a readable single-column timeline.

The section must remain understandable without animation.

============================================================
10. PROJECTS SHOWCASE
=====================

Section label:
03 / SELECTED WORK

Heading:
Selected work and side projects.

The projects section is one of the most important parts of the website.

Do not create a generic grid of six identical cards.

Use a curated, visually engaging project showcase with a combination
of featured projects and smaller supporting projects.

Each project preview should include:

- Project title.
- Short, meaningful description.
- Project category.
- Relevant technology labels.
- Actual screenshot or appropriate visual.
- A clear link to its dedicated case-study page.

Use a mixture of large feature projects, asymmetric layouts,
and smaller supporting projects.

The layouts should feel intentional rather than random.

KNOWN PROJECTS:

1. B2Portal
2. Arcade Vault
3. Prompt-O-Phobia
4. Additional projects from my existing portfolio or repository.

Inspect the available repository and project information before
creating the final content.

Do not invent product features.

Do not invent user counts, revenue, performance improvements,
or other project metrics.

If an actual screenshot is available, use it.

If screenshots are missing, create a clean placeholder component
that can be populated later.

Never present a fabricated screenshot as an actual production
application screenshot.

PROJECT INTERACTIONS:

When a project is hovered:

- Its screenshot may scale slightly.
- Its border or surface may change subtly.
- An arrow or supporting label may move a few pixels.
- Relevant metadata may become more prominent.

Keep the interactions restrained and responsive.

On mobile, use touch-friendly interactions rather than hover-dependent
functionality.

The entire project preview should be accessible as a link where
appropriate.

============================================================
11. INDIVIDUAL PROJECT CASE STUDY PAGES
=======================================

Every substantial project must have its own dedicated page.

Suggested routes:

/projects/b2portal
/projects/arcade-vault
/projects/prompt-o-phobia

Use dynamic routes or a maintainable project data structure.

These pages must not feel like the same template with different
titles pasted into it.

Maintain the brand identity while adapting the content layout
to each project's actual characteristics.

CASE STUDY STRUCTURE:

A. Breadcrumb navigation.

B. Project title and concise introduction.

C. Project metadata:

- Role.
- Category.
- Technologies.
- Timeline, when known.
- Project status, when known.

D. Large project cover image.

E. Overview.

F. Problem or challenge.

G. Solution and implementation.

H. Key features.

I. Actual screenshots with captions.

J. Technical architecture or implementation details, where relevant.

K. Engineering decisions and trade-offs.

L. Outcomes and lessons learned, when known.

M. Live project and repository links, if publicly available.

N. Previous project / next project navigation.

O. Return-to-projects link.

Do not force every section onto every project.

Use the content to determine the layout.

A project with substantial backend architecture may need technical
diagrams and implementation details.

A frontend-focused project may benefit from larger screenshots
and interaction demonstrations.

B2PORTAL:

Known technical context includes React, TypeScript, Node.js,
Express, PostgreSQL, Prisma, Redis, BullMQ, and external integrations.

Potential topics include email integrations, document processing,
structured quote workflows, asynchronous processing, and connections
to external business systems.

Verify which technologies and features belong to the actual project
before displaying them.

ARCADE VAULT:

Inspect available project files and documentation to determine
its actual functionality and architecture.

PROMPT-O-PHOBIA:

Inspect available project files and documentation before writing
its final case study.

Never invent a technical architecture simply to make a project
page look comprehensive.

SCREENSHOTS:

Create a reusable screenshot gallery component.

Support full-width images, side-by-side comparisons, and cropped
interface details.

Images should have consistent spacing, appropriate aspect ratios,
and accessible descriptions.

Use Next.js image optimization where appropriate.

If project assets are missing, keep the content structure ready
for screenshots to be added later.

============================================================
12. SKILLS SECTION
==================

Section label:
04 / TOOLKIT

Heading:
Technologies I work with.

Organize technologies into logical groups.

Potential categories:

FRONTEND
React, Next.js, TypeScript, JavaScript, Oracle JET, Tailwind CSS.

BACKEND
Node.js, Express, Java.

DATA AND INFRASTRUCTURE
PostgreSQL, Prisma, MySQL, MongoDB, Redis, BullMQ.

INTEGRATIONS AND TOOLS
Firebase, Sanity, REST APIs, Git, GitHub, and other tools
confirmed by my existing work.

Verify these technologies against the available project information.

Do not include everything indiscriminately.

Do not use percentage-based skill meters.

Do not use circular progress indicators.

Do not claim arbitrary proficiency percentages.

DESIGN:

Use a typography-led grid with subtle dividers.

Technology labels should be compact and refined.

The section should feel organized and technical without looking
like a dashboard.

============================================================
13. CONTACT SECTION
===================

Section label:
05 / CONTACT

Heading:
Let's build something great.

Suggested copy:

"I'm always open to interesting conversations about software,
product development, and opportunities to build useful things."

Primary CTA:
Send me an email →

Secondary links:
GitHub
LinkedIn
Résumé

Use actual contact details and profile URLs available in the project
or explicitly configured by me.

Do not invent email addresses or social profile URLs.

If contact details are missing, create configurable placeholders
in a centralized data file.

The contact section should feel like a natural conclusion to the page.

Use subtle background graphics, generous spacing, and a clear call
to action.

Finish with a minimal footer containing:

AS.
Amman Soomro.
Software Engineer.
Current year.
Relevant social links.

============================================================
14. ANIMATION PHILOSOPHY
========================

IMPORTANT:

Use BOTH Framer Motion / Motion for React and GSAP.

Use them extensively enough to create a distinctive, polished,
interactive experience, but do not over-animate the website.

The goal is premium motion design, not a demonstration of every
animation technique available.

Animations must improve hierarchy, atmosphere, feedback, or
navigation.

They must never make the website feel slow, distracting, or difficult
to use.

Use Framer Motion for:

- Component entrance animations.
- Navigation transitions.
- Button interactions.
- Project hover states.
- Small layout transitions.
- Theme transitions where appropriate.
- Staggered text and metadata reveals.
- Shared layout transitions when useful.

Use GSAP for:

- More advanced timeline-based sequences.
- Carefully controlled hero animation.
- ScrollTrigger-based storytelling.
- A restrained parallax effect.
- Selected pinned or scrubbed project presentations.
- Complex sequences that would be unnecessarily awkward with
  simple component animations.

Do not use both libraries to animate the same element unnecessarily.

Assign clear responsibilities to each library.

Avoid competing animation systems.

============================================================
15. REQUIRED ANIMATION EXPERIENCES
==================================

A. HERO ENTRANCE

On the initial page load:

1. The small introductory label appears.
2. The headline reveals with a subtle upward movement.
3. Supporting text follows.
4. CTA buttons appear.
5. The abstract wave graphic begins a very subtle animation.

Use a cohesive timeline.

Avoid excessive delays between elements.

The page should become usable immediately.

B. NAVIGATION

As the user scrolls:

- Navigation styling transitions subtly.
- Background and border treatments adjust.
- Active section indication updates appropriately.

Do not make the navigation excessively animated.

C. SCROLL REVEALS

Use restrained scroll-triggered reveals for selected section headings,
project content, and experience entries.

Use opacity and small positional changes.

Do not animate every paragraph independently.

Avoid creating a long sequence in which visitors must wait for
content to become visible.

D. ABSTRACT WAVE ANIMATION

Create the reference's subtle flowing-line motif using SVG.

Animate selected paths using lightweight techniques.

Possible effects include:

- Gentle stroke-dash movement.
- Slow, subtle displacement.
- Minimal opacity variation.
- Slight parallax relative to scrolling.

The effect must remain understated.

Avoid large GPU-intensive filters or constantly moving backgrounds.

E. PROJECT INTERACTIONS

Use subtle image scaling, border transitions, arrow movement,
and small metadata reveals.

Use shared transitions only where they improve continuity.

F. PROJECT CASE STUDIES

A case study may use one carefully designed scroll-driven sequence
to introduce its cover image or technical architecture.

Do not pin every section.

Do not trap the visitor in a long animation.

G. BUTTONS

Buttons should have clear hover, focus, active, and disabled states.

Use restrained movement or color changes.

Avoid aggressive magnetic effects on every button.

If a magnetic interaction is used, restrict it to one or two
prominent desktop-only CTAs and disable it for touch devices.

H. PAGE TRANSITIONS

If page transitions are implemented, keep them short and ensure
navigation remains responsive.

Never create an interaction that delays normal navigation
unnecessarily.

============================================================
16. GSAP AND SCROLLTRIGGER RULES
================================

Use GSAP only where its capabilities offer a genuine benefit.

When using GSAP with React:

- Use the appropriate React integration.
- Use GSAP context or the equivalent cleanup mechanism.
- Revert animations during component cleanup.
- Avoid duplicate ScrollTriggers after rerenders.
- Scope selectors to the component being animated.
- Avoid global selectors that accidentally affect unrelated pages.
- Handle responsive behavior correctly.
- Avoid conflicts with Framer Motion.
- Respect reduced-motion preferences.

If you implement pinned sections:

- Limit pinning to a small number of carefully selected sections.
- Provide a mobile-friendly alternative.
- Avoid scroll hijacking.
- Ensure the page works with touch scrolling.
- Ensure keyboard navigation remains functional.
- Test layout behavior when browser dimensions change.

Do not use GSAP merely because it is requested.

Use it where it produces a better result.

============================================================
17. MOTION DESIGN TOKENS
========================

Create consistent timing and easing conventions.

Suggested starting points:

Micro-interactions:
120–200ms.

Standard UI transitions:
200–350ms.

Section reveals:
400–700ms.

Complex hero sequences:
Approximately 800–1200ms total.

Use refined easing rather than exaggerated spring effects.

Prefer smooth ease-out curves for entrances.

Use spring motion selectively for interactions where it feels natural.

Do not animate every transition at the same speed.

Do not introduce artificial loading screens to showcase animation.

Avoid excessive blur transitions, elastic bouncing, and dramatic
rotations.

The overall motion should feel precise, confident, and understated.

============================================================
18. PERFORMANCE AND ACCESSIBILITY
=================================

The website must remain fast despite the use of animations.

Requirements:

- Avoid unnecessary client-side rendering.
- Use server components where appropriate.
- Keep client components focused on actual interactivity.
- Optimize and lazy-load images where appropriate.
- Avoid excessive animation libraries or redundant dependencies.
- Avoid expensive continuous JavaScript animation loops.
- Prefer CSS transforms and opacity for simple transitions.
- Use will-change only when justified.
- Clean up event listeners, observers, timelines, and ScrollTriggers.
- Prevent horizontal overflow.
- Avoid layout shifts caused by animations.
- Respect prefers-reduced-motion.
- Provide meaningful focus states.
- Ensure keyboard accessibility.
- Maintain readable contrast.
- Provide appropriate alternative text.
- Never hide essential information behind hover effects.

REDUCED MOTION:

When prefers-reduced-motion is enabled:

- Disable decorative parallax.
- Disable unnecessary continuous motion.
- Simplify scroll-triggered sequences.
- Avoid long animated entrances.
- Keep navigation and interactions fully functional.

The website must remain attractive and usable with reduced motion
enabled.

============================================================
19. LIGHT AND DARK MODE
=======================

Dark mode is the primary design.

Implement a functional theme toggle.

Requirements:

- Use semantic CSS variables.
- Respect the system preference on first visit.
- Persist explicit user preference.
- Prevent incorrect-theme flashes during initial loading.
- Ensure screenshots and project visuals work in both themes.
- Ensure borders, forms, buttons, and hover states adapt properly.
- Preserve the same brand identity across both themes.

The toggle should have accessible labels.

Do not use a full-page reload to switch themes.

============================================================
20. TECHNICAL ARCHITECTURE
==========================

First inspect the existing repository.

Determine:

- Whether a project already exists.
- The framework and version.
- Existing dependencies.
- Existing pages and routing.
- Existing portfolio content.
- Available screenshots and assets.
- Existing Sanity configuration.
- Current styling conventions.

If the project already has a suitable structure, extend it instead
of rebuilding everything unnecessarily.

PREFERRED STACK:

Next.js.
React.
TypeScript.
Tailwind CSS.
Framer Motion / Motion for React.
GSAP.
GSAP ScrollTrigger where needed.
Sanity if a CMS is already configured or genuinely needed.

Use the existing dependency versions where appropriate.

Do not install redundant libraries.

Do not replace working project infrastructure without a clear reason.

Use reusable components and strongly typed project data.

Suggested structure:

src/
app/
page.tsx
layout.tsx
projects/
[slug]/
page.tsx

components/
layout/
Navbar.tsx
Footer.tsx
ThemeToggle.tsx

sections/
  Hero.tsx
  About.tsx
  Experience.tsx
  Projects.tsx
  Skills.tsx
  Contact.tsx

projects/
  ProjectCard.tsx
  ProjectHero.tsx
  ProjectGallery.tsx
  ProjectOverview.tsx
  ProjectFeatures.tsx
  ProjectNavigation.tsx

motion/
  Reveal.tsx
  TextReveal.tsx
  SmoothScrollSection.tsx
  WaveGraphic.tsx

ui/
  Button.tsx
  Container.tsx
  SectionHeading.tsx
  Badge.tsx
data/
projects.ts
experience.ts
skills.ts
site.ts

lib/
animations.ts
utils.ts

styles/
globals.css

Adapt this structure to the existing repository rather than
following it blindly.

Keep project content separate from presentation.

Avoid giant components containing the entire application.

Use consistent naming and clear component responsibilities.

============================================================
21. IMPLEMENTATION QUALITY
==========================

This must be a real website, not a static design mockup.

Every visible interactive element should work.

Requirements:

- Navigation links work.
- Theme toggle works.
- Project links open the correct pages.
- Case studies display their own content.
- Contact links work.
- Résumé link works when configured.
- Mobile navigation works.
- Buttons have functional destinations.
- Images load correctly.
- Browser back and forward navigation work.
- Missing project content is handled gracefully.
- Unknown project slugs show a proper not-found page.
- Responsive layouts do not break.
- No placeholder links remain disguised as completed functionality.

Avoid fake functionality.

Do not use alert() as a substitute for real interactions.

Do not leave TODO comments for essential requirements.

Do not create empty sections simply to satisfy the page structure.

If actual information is missing, make the relevant content
configurable and clearly identify what needs to be supplied.

============================================================
22. SEO AND METADATA
====================

Implement:

- Page-specific titles.
- Descriptive meta descriptions.
- Open Graph metadata.
- Project-specific metadata.
- Appropriate canonical URLs where configured.
- Semantic headings.
- Descriptive image alt text.
- Sitemap and robots configuration as appropriate.
- Structured data where genuinely relevant.

Use ammansoomro.com as the intended primary domain.

Do not invent testimonials, client endorsements, awards, or
project results.

============================================================
23. RESPONSIVE DESIGN
=====================

Design and test for:

- Large desktop screens.
- Standard laptop screens.
- Tablets.
- Mobile devices.

DESKTOP:

Use the complete editorial layout, generous spacing, asymmetric
compositions, and selected scroll interactions.

TABLET:

Adjust grid proportions and typography.

Simplify complex layouts where needed.

MOBILE:

Use a deliberate single-column layout.

Keep headings readable.

Ensure buttons and controls are easy to tap.

Reduce decorative motion.

Disable or redesign pinned sections that do not translate well
to touch scrolling.

Do not simply shrink the desktop layout.

Mobile must feel like a fully designed experience.

============================================================
24. DESIGN QUALITY CONTROL
==========================

Before considering the work complete, compare the actual website
against the attached branding reference.

Evaluate:

1. Is the background close to the reference's near-black tone?
2. Is the mint accent used with restraint?
3. Does the typography feel similarly clean and technical?
4. Are borders and surfaces subtle?
5. Are the abstract lines elegant rather than distracting?
6. Does the hero have a comparable level of polish?
7. Are the project layouts visually engaging?
8. Do the case studies feel professionally designed?
9. Does mobile preserve the same identity?
10. Does light mode remain consistent with the brand?
11. Do animations feel intentional?
12. Is the website fast and responsive?

If browser automation or screenshot tools are available, run the
application and inspect the actual rendered pages.

Test at desktop and mobile viewport sizes.

Fix visible issues instead of merely reporting them.

Look specifically for:

- Broken spacing.
- Typography overflow.
- Unintended horizontal scrolling.
- Incorrect theme colors.
- Missing images.
- Misaligned navigation.
- Animation flicker.
- Hydration issues.
- Duplicate ScrollTriggers.
- Broken project routes.
- Low-contrast text.
- Excessive animation.
- Poor mobile composition.

Do not claim visual verification unless you have actually inspected
the rendered application.

============================================================
25. DEVELOPMENT WORKFLOW
========================

Follow this workflow.

PHASE 1 — INSPECT

Inspect the repository, dependencies, existing content, assets,
and available project information.

Identify what already exists and what needs to be built.

PHASE 2 — ESTABLISH THE DESIGN SYSTEM

Create the color tokens, typography, spacing conventions, reusable
components, and theme infrastructure.

Match the reference before adding advanced animations.

PHASE 3 — BUILD THE CORE WEBSITE

Implement the navigation, hero, about, experience, projects,
skills, contact, and footer.

Ensure the responsive layout works before adding complex motion.

PHASE 4 — BUILD PROJECT CASE STUDIES

Implement the project data model and dedicated project routes.

Add project-specific content, screenshots, galleries, technical
details, and navigation.

PHASE 5 — ADD ANIMATION

Implement Framer Motion interactions.

Add GSAP and ScrollTrigger only for carefully selected advanced
effects.

Ensure animation cleanup and reduced-motion support.

PHASE 6 — POLISH

Refine typography, spacing, borders, responsive layouts, image
presentation, transitions, and interaction states.

PHASE 7 — VERIFY

Run available linting, type checks, builds, and browser tests.

Fix errors and inspect the rendered website where tools permit.

Do not stop at a plan or a design description.

Actually implement the application.

============================================================
26. FINAL CREATIVE DIRECTION
============================

The website should feel like a combination of:

- A premium independent software engineer's portfolio.
- A carefully art-directed digital publication.
- A modern product interface.
- A technically sophisticated interactive experience.

The visual identity must remain consistent throughout the site.

Use the abstract wave graphics, mint accents, dark surfaces,
refined typography, and understated borders as recurring brand
elements.

The animations should add depth and personality without becoming
the main attraction.

The projects and engineering work must remain the centrepiece.

A visitor should immediately understand:

Who I am.
What I build.
What I have worked on.
How I approach engineering.
How to contact me.

The site should be distinctive enough to be memorable, but
professional enough to represent me in a hiring process.

Do not sacrifice usability for visual effects.

Do not sacrifice performance for animation.

Do not sacrifice clarity for aesthetic experimentation.

============================================================
27. DEFINITION OF DONE
======================

The task is complete only when:

[ ] The complete homepage is implemented.
[ ] The branding closely matches the attached reference.
[ ] The dark theme is polished.
[ ] The light theme works correctly.
[ ] Theme preference persists.
[ ] All primary sections are present.
[ ] The experience timeline is implemented.
[ ] Projects have real, configurable data.
[ ] Individual project pages work.
[ ] Project galleries are implemented.
[ ] Technology labels reflect actual projects.
[ ] Framer Motion interactions are implemented.
[ ] GSAP is used selectively for advanced effects.
[ ] ScrollTrigger cleanup is handled correctly.
[ ] Reduced-motion preferences are respected.
[ ] Desktop and mobile layouts are polished.
[ ] Navigation and CTAs work.
[ ] Contact links work when configured.
[ ] SEO metadata is implemented.
[ ] No fabricated statistics or achievements are present.
[ ] No broken links or missing essential functionality remain.
[ ] Type checking and production build succeed, where supported.
[ ] The final rendered website has been visually checked when
browser tooling is available.

Start by inspecting the existing repository and the attached
reference image.

Then implement the website.

Prioritize fidelity to the reference, quality of execution,
maintainability, and performance.

Do not ask me to approve every section individually.

Make thoughtful implementation decisions consistent with this
specification, and proceed until the website is complete.

Use Motion for React for:

* Entrance animations.
* Hover interactions.
* Layout transitions.
* Scroll-triggered reveals.
* Component transitions.
* Simple parallax effects.

Use GSAP and ScrollTrigger selectively for:

* Complex pinned sequences.
* Advanced scroll storytelling.
* Coordinated multi-element timelines.

Do not implement the same animation through multiple competing systems.

Create reusable animation variants and shared motion utilities.

8. PAGE 3: INDIVIDUAL PROJECT CASE STUDIES**

Routes:

* /projects/b2portal
* /projects/prompt-o-phobia
* /projects/arcade-vault

Each substantial project must have its own detailed page.

This is a critical requirement.

Do not send every project to GitHub or a generic external website.

Create a reusable case-study template driven by structured project data.

Each project should have a distinct presentation based on its content, while sharing the same underlying design system.

## **A. Project hero**

Include:

* Project name.
* Short, compelling description.
* Project category.
* My role.
* Project timeframe where available.
* Technology tags.
* Live demo action if available.
* GitHub action if available.
* A large product screenshot.

Consider subtle image parallax or layered visual depth.

The project title should be prominent without consuming the entire initial viewport.

## **B. Project overview**

Explain:

* What the project is.
* What problem it addresses.
* Who it serves.
* Why it was built.
* My contribution.

Use concise, readable content.

## **C. Technology stack**

Group technologies logically.

For each important technology, explain its role in the project.

Avoid showing technologies that were not actually used.

## **D. Features**

Present key features using a combination of:

* Screenshots.
* Short descriptions.
* Alternating content layouts.
* Interactive demonstrations where appropriate.
* Small diagrams when useful.

Potential B2Portal features may include email integrations, file extraction, invoice processing, and MIS integrations, but only include features verified for the actual implementation.

## **E. Engineering challenges**

Explain important technical decisions.

Depending on the actual project, these might include:

* Frontend architecture.
* API integration.
* Authentication.
* Data processing.
* Database design.
* Background jobs.
* Error handling.
* Performance optimization.
* Integration architecture.

Describe genuine implementation decisions.

Do not invent technical challenges or claim technologies were used without evidence.

## **F. Results and learnings**

Explain:

* What was achieved.
* What I learned.
* What I would improve.
* Verifiable performance or business outcomes, if available.

Never invent metrics.

## **G. Screenshot gallery**

Create a polished image gallery.

Features:

* Multiple screenshots.
* Click-to-enlarge lightbox.
* Next/previous navigation.
* Keyboard support.
* Appropriate image sizing.
* Captions where useful.
* Smooth transitions.

Use real screenshots when available.

Provide replaceable placeholders otherwise.

## **H. Next project**

At the bottom of every case study, provide a transition to another project.

Consider a large preview card with a subtle image transition.

Include a return-to-projects action.

## **PAGE 1: HOME**

Route: /

The home page introduces me and guides visitors through my work.

Required sections:

1. Navigation.
2. Hero.
3. About Me.
4. Work Experience.
5. Featured Projects.
6. Skills and Technologies.
7. Contact.
8. Footer.

These may be combined or reordered when a better storytelling experience justifies it.

## **A. Navigation**

Create a refined navigation system.

Required items:

* Brand logo.
* Home.
* Experience.
* Projects.
* Skills.
* Contact.
* Light/dark theme toggle.

Requirements:

* Sticky or intelligently adaptive navigation.
* Transparent or understated styling initially.
* A refined surface treatment when scrolling, if appropriate.
* Smooth active-section indication.
* Subtle hover interactions.
* Responsive mobile navigation.
* Accessible keyboard interactions.

Consider a compact floating navigation container if it complements the design.

Do not make the navigation unnecessarily large.

## **B. Hero section**

This is the most important section of the home page.

Create a distinctive hero composition with:

* Personal introduction.
* Prominent name and role.
* Concise description.
* Primary CTA.
* Secondary CTA.
* Professional social links.
* Optional portrait or carefully designed visual composition.
* Optional verified professional metrics.
* Scroll indicator.

Suggested content:

“Hi, I’m Amman Soomro.”

“Software Engineer building thoughtful digital experiences.”

“I build modern web applications with a focus on clean architecture, refined interfaces, and solving real-world problems.”

Primary CTA: Explore My Work

Secondary CTA: Get in Touch

GitHub and LinkedIn should be accessible without competing with the primary actions.

You may refine the copy to create a stronger visual composition.

Do not invent achievements, awards, employment history, or professional metrics.

## **C. About Me**

Create an editorial-style About section.

It should communicate:

* Who I am.
* What I build.
* How I approach engineering.
* What I care about as a developer.
* The types of technical problems I enjoy solving.

Possible layout:

* Text on one side.
* A portrait, abstract visual, or technical composition on the other.
* A few short engineering principles or personal interests.

Use subtle scroll reveals and restrained parallax.

Avoid a generic biography card.

## **D. Work Experience**

Create a sophisticated experience timeline.

Present each position with:

* Company.
* Role.
* Employment dates.
* Location where appropriate.
* Responsibilities.
* Technologies used.
* Meaningful contributions.
* Verifiable impact.

Use a clean vertical timeline or editorial list.

Possible interactions:

* Progressive timeline line.
* Milestone indicators.
* Subtle card transitions.
* Expandable details if the content is extensive.

Use actual career information when available.

Do not invent responsibilities or metrics.

Make the section easy to scan for recruiters.

## **E. Featured Projects**

Create a visually distinctive project showcase.

Feature a small number of high-quality projects.

Potential projects include:

* B2Portal.
* Prompt-O-Phobia.
* Arcade Vault.
* My personal portfolio.

Use these only where the project details are accurate and relevant.

The section should include:

* Project title.
* Short description.
* Main screenshot.
* Selected technology tags.
* Project category.
* Link to its dedicated case study.
* Live demo or GitHub link where available.

Consider an immersive pinned showcase, large alternating project layouts, or a distinctive asymmetrical grid.

Do not default to a generic three-column grid if a more compelling presentation is achievable.

Use real project screenshots whenever available.

If screenshots are unavailable, create clearly identified placeholders that can be replaced later.

Do not present fabricated screenshots as genuine application interfaces.

## **F. Skills and Technologies**

Organize skills into meaningful categories.

Potential categories:

* Frontend.
* Backend.
* Databases.
* Frameworks and Libraries.
* Tools and Platforms.
* Other Technologies.

Use technologies that reflect my actual experience.

Potential technologies include React, Next.js, TypeScript, JavaScript, Tailwind CSS, Node.js, Express, Java, Prisma, PostgreSQL, MongoDB, Oracle SQL, Git, and Sanity.

Oracle JET and Knockout.js may also be relevant.

Do not add technologies merely to make the portfolio appear more impressive.

Avoid enormous collections of floating logos or excessive skill badges.

Use a clean, intentional layout with subtle interactions.

## **G. Contact section**

Create a strong closing section.

The section should feel like a natural conclusion to the page.

Include:

* A clear invitation to collaborate.
* Email contact.
* LinkedIn.
* GitHub.
* Contact form.
* Optional availability indicator, only if configurable and accurate.

Potential heading:

“Have something interesting in mind?”

Supporting text should be short and personable.

Use a refined visual treatment with a prominent CTA.

The contact form must have:

* Name.
* Email.
* Message.
* Validation.
* Loading state.
* Success state.
* Error state.
* Accessible labels.

Do not create a fake submission flow that always reports success.

If no backend is configured, clearly document the integration required to make the form functional.

## **H. Footer**

Keep the footer minimal.

Include:

* Brand identity.
* Copyright year.
* GitHub and LinkedIn.
* Email.
* Back-to-top action if appropriate.

Avoid unnecessary footer columns.

---

# **7. PAGE 2: PROJECTS LISTING**

Route: /projects

Create a dedicated projects page.

This page should feel like a curated collection of engineering work.

It must have its own composition rather than simply repeating the home-page project cards.

Required elements:

* Page introduction.
* Short description.
* Project filters.
* Project grid or editorial list.
* Technology tags.
* Project thumbnails.
* Links to dedicated project pages.
* Empty state when filters produce no results.

Potential filters:

* All.
* Frontend.
* Full Stack.
* Web Applications.
* Integrations.
* Personal Projects.

Use categories based on actual project metadata.

## **Project interactions**

Implement:

* Smooth filter transitions.
* Subtle hover elevation.
* Screenshot scaling.
* Refined image reveals.
* Contextual hover actions.
* Consistent card alignment.
* Responsive layouts.

Filtering must work, not merely appear decorative.

Each project card should be clickable through a clear, accessible interaction.

Do not force visitors to hover to discover essential information.

Keep mobile behavior intuitive.

MODERN WEB EFFECTS AND MOTION DESIGN**

Motion design is a major part of this project.

Use modern effects thoughtfully and purposefully.

The site should feel alive, responsive, and immersive.

However, avoid turning it into a collection of unrelated animation experiments.

Every effect must serve at least one purpose:

* Guide attention.
* Establish hierarchy.
* Communicate depth.
* Explain a transition.
* Encourage exploration.
* Make an interaction feel more tactile.
* Improve the storytelling experience.

## **A. Cinematic hero entrance**

The opening viewport should immediately communicate quality.

Implement a sophisticated hero experience with:

* Staggered text reveals.
* Line-by-line heading animations.
* Masked text transitions.
* Subtle background gradient movement.
* Layered parallax elements.
* Refined entrance animations for CTAs.
* Animated social icons.
* A custom scroll indicator.
* Subtle background texture where appropriate.

Consider a restrained animated glow or spotlight behind the hero content.

Avoid excessive typing animations, bouncing elements, or long entrance sequences that delay access to the actual content.

The hero must remain compelling even when animations are disabled.

## **B. Parallax scrolling**

Use parallax to create depth across selected sections.

Potential applications:

* Hero background layers.
* Decorative visual elements.
* Project screenshots.
* About-section imagery.
* Featured project compositions.
* Background typography.

Different layers may move at different speeds as the user scrolls.

Keep text readable and avoid excessive motion.

Use scroll progress or intersection-based triggers where appropriate.

Parallax should be subtle on desktop and reduced or removed on mobile when necessary.

## **C. Scroll-triggered reveals**

Create a coherent scroll animation system.

Possible techniques:

* Fade and translate.
* Masked image reveals.
* Staggered card entrances.
* Heading reveals.
* Progressive timeline animations.
* Subtle image scaling.
* Background transitions.
* Scroll-linked visual transformations.

Avoid animating every paragraph independently.

Group related content into meaningful animation sequences.

Use consistent easing and timing across the entire website.

## **D. Pinned scrolling experiences**

Explore a pinned featured-project section.

As the visitor scrolls:

* The main project showcase remains temporarily pinned.
* The active project changes.
* Screenshots transition smoothly.
* Project titles and descriptions update.
* Technology tags update.
* A progress indicator communicates the current position.

This should feel like a premium product presentation.

Use this effect only where it adds genuine value.

Do not make the entire website depend on scroll hijacking or forced scrolling behavior.

Provide a sensible, accessible mobile alternative.

## **E. Magnetic buttons**

Implement subtle magnetic interactions on selected desktop buttons.

Buttons should move slightly toward the pointer and return smoothly to their original positions.

Use this for prominent actions such as:

* View My Work.
* Contact Me.
* Explore Project.

Do not apply magnetic behavior to every clickable element.

Ensure keyboard navigation and touch interactions work normally.

## **F. Cursor interactions**

Explore a refined custom cursor treatment for desktop.

Potential effects:

* A small cursor follower.
* A subtle spotlight over selected surfaces.
* Cursor expansion over project cards.
* Contextual labels such as “Explore”, “View Project”, or “Drag”.
* Subtle pointer-responsive gradients.

The cursor must never obscure important content or interfere with clicking.

Disable or simplify custom cursor effects on touch devices.

Retain the native cursor unless there is a compelling and accessible reason to change it.

## **G. 3D tilt and depth**

Selected project cards may respond to pointer movement using subtle perspective transforms.

Use:

* Small rotations.
* Layered image movement.
* Subtle perspective.
* Soft reflections.
* Restrained lighting effects.

Keep the effect sophisticated and minimal.

Do not rotate cards aggressively or introduce unnecessary 3D scenes.

Use actual WebGL or Three.js only if it provides a meaningful visual improvement.

## **H. Kinetic typography**

Use typography as an important visual element.

Explore:

* Line-by-line reveals.
* Scroll-linked headline transformations.
* Masked text transitions.
* Subtle word movement.
* Animated role labels.
* Large background typography.
* Text transitions between selected states.

Typography animations must remain readable and should not cause layout shifts.

Avoid endless typing effects or distracting character-by-character animations throughout the page.

## **I. Smooth transitions**

Implement refined transitions for:

* Navigation hover states.
* Theme switching.
* Project filters.
* Project cards.
* Image galleries.
* Expandable content.
* Route transitions where supported.

Transitions should feel quick and intentional.

Avoid excessive blur transitions or animations that make navigation feel slow.

## **J. Ambient visual effects**

Use a few restrained effects where they improve the composition:

* Soft radial gradients.
* Subtle grain or noise.
* Faint grid patterns.
* Low-opacity glow effects.
* Slow-moving background shapes.
* Fine animated borders.

Avoid excessive glassmorphism, neon glows, or constantly moving backgrounds.

The overall design should remain crisp and professional.

# **4. OVERALL DESIGN DIRECTION**

Create an immersive, motion-driven, premium portfolio.

The website should combine a minimalist foundation with sophisticated modern web interactions.

Visual characteristics:

* Large, expressive typography.
* Asymmetrical layouts where appropriate.
* Generous whitespace.
* Carefully controlled negative space.
* Fine borders and restrained shadows.
* Layered visual depth.
* Subtle atmospheric gradients.
* Sophisticated image treatments.
* Smooth scrolling transitions.
* Thoughtful hover states.
* Scroll-triggered animations.
* Interactive project showcases.
* Refined light and dark themes.

Use a consistent spacing system based on 4px and 8px increments.

Establish reusable design tokens for:

* Colors.
* Typography.
* Spacing.
* Border radii.
* Shadows.
* Animation durations.
* Easing curves.
* Container widths.
* Breakpoints.
* Z-index layers.

Every section should feel like part of the same design system.

However, do not make every section look identical. Introduce visual variation through composition, background treatments, image placement, and carefully selected interactions.

**Creative freedom:** You are encouraged to create an original visual concept within this direction. Do not blindly follow standard portfolio layouts if a more distinctive composition would produce a better experience.
