# TODO: Replace Filler Data with CV-Verified Information

## Steps to Complete
- [x] Edit Skills.tsx: Replace skills array with Core Technical Skills and Behavioural Competencies, add icons from lucide-react, remove levels and progress bars.
- [x] Edit Experience.tsx: Replace experiences array with 7 CV entries, add icons, keep Read More/Less.
- [x] Edit Certifications.tsx: Replace certifications array with 7 CV entries, add icons to cards.
- [x] Edit Awards.tsx: Replace awards array with 2 CV awards and memberships.
- [x] Run npm run dev to verify compilation and layout.

## Information Gathered
- **Skills.tsx**: Current structure uses a grid of skill cards with name, level, and progress bar. Filler skills include "IT Audit & Assurance", etc. Need to replace with exact Core Technical Skills and Behavioural Competencies from CV, adding relevant icons (Shield, Server, Lock, Brain, Users, etc.) from Lucide-React.
- **Experience.tsx**: Current has 3 filler entries with "Confidential Client". Need to replace with 7 real experiences from CV in specified order, using CV descriptions for details, keeping Read More/Less toggle. Add icons: 🏦 for banks, 💻 for IT roles, 📈 for achievements.
- **Certifications.tsx**: Current has 6 filler certs. Replace with exact 7 from CV, displaying each as card with icon, title, issuing body, year. Remove non-existent certs.
- **Awards.tsx**: Current has 3 filler awards. Replace with 2 real awards from CV and include memberships as additional entries.
- **CV Content**: Extracted from public/Emmanuel Ilesanmi - IT Audit - Master_Canada.docx, providing accurate details for all sections.

## Plan
### Skills.tsx
- Update skills array to include Core Technical Skills (7 items) and Behavioural Competencies (5 items).
- Import icons from lucide-react (e.g., Shield, Server, Lock, Brain, Users).
- Modify card structure to display icon beside skill name, remove level/progress bar as new skills don't have levels.
- Maintain grid layout, animations, and spacing.

### Experience.tsx
- Update experiences array with 7 entries in order: TD Bank, Interswitch Head, Interswitch Team Lead, United Bank for Africa, WEMA Bank, First Bank, Guaranty Trust Bank.
- For each: Set title, company, period from CV; short description from CV summary; details from full CV text.
- Add icon field (e.g., 🏦 for banks) and display in card header.
- Keep Read More/Less toggle for details.

### Certifications.tsx
- Update certifications array with 7 exact entries from CV.
- Add icon field (e.g., 🛡️ for CISSP) and display in card.
- Structure: icon, name, issuer, year, description (keep or update if needed).

### Awards.tsx
- Update awards array with 2 awards from CV.
- Add memberships as additional entries or separate section.
- Maintain list layout with animations.

## Dependent Files
- No new dependencies; assume lucide-react is available (check package.json if needed).
- Files to edit: Skills.tsx, Experience.tsx, Certifications.tsx, Awards.tsx.

## Followup Steps
- After edits, run npm run dev to test compilation and responsive layout.
- Verify icons render correctly and animations preserved.
- Ensure no filler content remains and data matches CV exactly.
