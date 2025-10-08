# Portfolio UI Refactor Tasks

## Section 1: Hero Section Restructure
- [x] Remove "Download Resume" button from Hero.tsx
- [x] Split hero text into multiple lines: "IT Audit & Assurance", "ICFR/SOX Audit", "Risk Management & Cybersecurity"
- [x] Align profile picture horizontally with the first line ("IT Audit & Assurance")
- [x] Add Framer Motion fade-in animations for each text line
- [x] Ensure responsiveness for mobile and tablet

## Section 2: Certifications Section
- [x] Create public/logos/ directory
- [x] Update certifications array in Certifications.tsx to match specified list (CISA, CRISC, CISSP, CIA, CFE, PMP, COBIT 5)
- [x] Replace emoji icons with official logos using <Image> component
- [x] Update card layout: Logo at top (w-24 h-24), Title, Issuer, Year below

## Section 3: Contact Section
- [x] Remove phone number and LinkedIn details from Contact.tsx "Get in Touch" section
- [x] Keep only email visible in Contact section
- [x] Ensure footer retains all three contact items

## Section 4: Copyright Footer Update
- [x] Update Footer.tsx to display dynamic copyright year range: © 2015 - [currentYear] Emmanuel Ilesanmi. All Rights Reserved.

## Section 5: Responsive Navigation
- [x] Add hamburger menu to Navbar.tsx for mobile devices (< 768px)
- [x] Implement side drawer with section links (About, Skills, Experience, Certifications, Awards, Contact)
- [x] Add smooth close animation on link click using Framer Motion
- [x] Use Menu and X icons from lucide-react
- [x] Maintain theme toggle visibility

## General
- [x] Verify no functional logic is altered
- [x] Test responsiveness and animations
- [x] Ensure theme compatibility
- [x] Check for broken references after removing resume download
- [ ] Download and place official certification logos in public/logos/ (manual step)
