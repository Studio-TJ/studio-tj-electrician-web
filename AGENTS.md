# AGENTS.md

[简体中文](AGENTS_zh.md)

## Repository documentation

- Maintain repository documentation in English and Simplified Chinese. The English file is the sole source of truth. Update it first, then sync the Chinese translation in the same change.
- Add `_zh` before the file extension for Chinese translations, for example `AGENTS_zh.md` and `README_zh.md`. If the versions differ, follow the English file.
- The public website has three languages. Maintain English, Simplified Chinese, and Dutch together in every website change.

## Project overview

TJ Electro provides residential electrical services from Almere. The site uses Jekyll, Liquid, SCSS, and vanilla JavaScript. It is configured for GitHub Pages at `electro.studiotj.cc`. Reuse the existing templates, styles, and data files.

## Where to make changes

- `index.html`, `portfolio.html`, and `contact.html` are the English entry points. Their Chinese and Dutch counterparts are under `zh/` and `nl/`. All three locales share `_layouts/default.html` and the templates in `_includes/pages/`.
- `_data/i18n/en.yml`, `_data/i18n/zh.yml`, and `_data/i18n/nl.yml` contain site copy, including services, qualifications, pricing, and terms. `_data/contact.yml` contains public contact details. `_data/portfolio.yml` contains projects and their translations.
- `_data/routes.yml` maps pages across locales. Site-wide styles live in `assets/css/style.scss`. The WeChat dialog and copy button behavior live in `assets/js/contact.js`.

## Site changes

- Update customer-facing copy and page metadata in all three languages in the same change. Add new copy keys at the same path in all three locale files. When changing routes, check the entry points, navigation, language switcher, and `hreflang` across all three locales.
- Use owner-provided information for prices, service coverage, qualifications, warranty terms, and contact details. Check amounts, units, and conditions across translations.
- The portfolio displays projects in `_data/portfolio.yml` order. Keep work in progress at `published: false`. Before publishing, confirm the image exists and provide a title, description, and alt text in all three languages. The template falls back to English if an entire project translation is missing.
- Follow [the portfolio image workflow](README.md#recommended-jpg-workflow). Prefer `./scripts/prepare-portfolio-image.sh /path/to/photo.jpg project-id` to resize photos, strip metadata, and convert them to WebP with ImageMagick. Check photos for visible identifying details such as house numbers and names before publishing.

## Verification

- Run `jekyll build` from the repository root with Jekyll and `jekyll-remote-theme` installed. Run `jekyll serve` for a browser preview. Keep generated `_site/` output out of Git.
- Check affected pages in English, Chinese, and Dutch, including at mobile widths. For portfolio changes, check images and alt text. For contact changes, check contact links and the WeChat dialog's open, close, and copy behavior.
