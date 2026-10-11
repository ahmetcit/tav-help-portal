# Zensical — TAV Engineering Help Portal

A calm, bilingual (EN / TR) help portal for TAV Engineering. Rebranded as
**TAV Engineering Help Portal** / **TAV Mühendislik Yardım Portalı**.

## Structure

```
zens/
├── index.html          → redirects to en/index.html
├── en/  (English)
│   ├── index.html      → home (topic cards + Contact IT)
│   └── guides/
│       ├── email.html          → Email (accounts, eM Client, signature)
│       ├── egnyte.html         → TAVcloud Egnyte (access, folder tree, UI, desktop app, guide)
│       ├── egnyte-signin.html  → Egnyte sign-in & MFA (detailed)
│       ├── google-workspace.html → Google Workspace (account, password, Meet)
│       ├── passwords.html      → Passwords & MFA
│       ├── identity.html       → Corporate identity (logos, templates)
│       └── ai.html             → AI (Gemini, Egnyte AI, DeepSeek)
├── tr/  (Türkçe — mirror of en/)
├── css/zensical.css     → shared theme (+ tree, gallery, lang-switch)
├── js/zensical.js       → mobile menu + checklist + localized progress
├── assets/
│   ├── favicon.svg
│   ├── logos/           → TAV Engineering logos (EN/TR)
│   ├── previews/        → document-template previews
│   └── signatures/      → email signature HTML + text previews
└── README.md
```

## Sections (topics)

1. **E-Posta / Email** — @tav.engineering announcement, eM Client, corporate signature.
2. **TAVcloud Egnyte** — sign in, foldable folder tree (with owners), web UI, desktop app, Help Assistant, and a simplified Power User guide.
3. **Google Workspace** — myaccount.google.com, password management, Google Meet.
4. **Parolalar & Hesaplar / Passwords & Accounts** — Google Workspace passwords, MFA (Google Authenticator) on computer & mobile.
5. **Kurumsal Kimlik / Corporate Identity** — logos (EN/TR gallery) + document templates, linked to Egnyte.
6. **Yapay Zeka / AI** — Gemini Pro, Egnyte AI, DeepSeek API.
7. **BT İletişim / Contact IT** — kept at the bottom of the home page.

## Notes

- The Egnyte folder tree in `guides/egnyte.html` is generated from the local
  Egnyte sync; folder **owners** are placeholders (`Sahip: —` / `Owner: —`) to be
  filled in by IT.
- The AI section was summarized from the Egnyte AI Assistant helpdesk article
  and the Egnyte Power User Guide (PDF).
- Branding: Stone + Slate palette (slate `#3A4456`, gray `#707072`, beige
  `#E2E0DA`), crimson `#AA1A2D` in logo only. Fonts DM Sans + Roboto.
