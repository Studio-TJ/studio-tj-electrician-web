# ⚡ TJ Electro  
### Your English & Chinese speaking electrician in Almere

---

## About

Welcome to **TJ Electro**.

I provide reliable, clean, and professional electrical services for residential projects.  
Fluent in **English and Chinese**, making communication easy and clear.

---

## Services

- Lighting installation (ceiling lights, chandeliers, LED fixtures)
- Socket & switch installation or replacement
- Electrical troubleshooting and fault diagnosis
- Distribution board (fuse box) upgrade or replacement
- New circuits (adding new groups)
- EV charger (wallbox) installation
- Home battery / energy storage systems
- Smart home and automation systems
- Security systems (cameras, basic alarm systems)
- Small renovation and electrical upgrades
- Other electrical work – feel free to ask

---

## Why choose me

- Clear communication (EN / 中文)
- Transparent pricing
- Clean and careful work
- Focus on quality over speed

---

## Adding portfolio projects

Portfolio images live in `assets/images/portfolio/`. Project descriptions and
translations live in `_data/portfolio.yml`. The website displays published
projects in the same order as the YAML list.

### Recommended JPG workflow

The website can display JPG files directly, but camera originals are often much
larger than necessary and may contain GPS/EXIF metadata. Use the included script
to resize the image, remove metadata and create a WebP file:

```sh
./scripts/prepare-portfolio-image.sh "/path/to/IMG_1234.JPG" distribution-board-01
```

This creates:

```text
assets/images/portfolio/distribution-board-01.webp
```

ImageMagick is required. On macOS it can be installed with:

```sh
brew install imagemagick
```

If you prefer to keep a JPG, copy it into `assets/images/portfolio/` and use its
`.jpg` path in the YAML. Resize large originals and remove location metadata
before publishing them.

### Project entry

Edit the starter entry in `_data/portfolio.yml` for the first project. For later
projects, copy that entire entry and add it below the previous one. Keep
`published: false` while preparing it; change it to `true` when the image and
English text are ready. Chinese and Dutch text can be added later. Missing
translations automatically fall back to English.

```yaml
- id: "distribution-board-01"
  published: true
  image: "/assets/images/portfolio/distribution-board-01.webp"
  location: "Almere"
  date: "2026-08"
  text:
    en:
      title: "Distribution board upgrade"
      description: "Replacement and rewiring of an outdated distribution board."
      alt: "Completed residential distribution board upgrade"
```

---

## Translations

Shared website text lives in `_data/i18n/en.yml` and `_data/i18n/zh.yml`.
English uses the existing root URLs; Chinese uses the matching `/zh/` URLs.
The language switcher uses `_data/routes.yml` to move between the same page in
both languages. When adding a visible interface string, add the same key to both
language files. Portfolio project translations remain in `_data/portfolio.yml`.

---

## Contact

📧 Email: info@studiotj.cc

(Please include photos/videos if possible for faster estimation)

---

## Terms & Conditions (T&C)

- Quotes are based on provided information; final price may vary depending on site conditions  
- Small works may be charged at hourly rate  
- Materials are charged separately unless stated otherwise  
- Installation warranty: **12 months**  
- Product warranty: according to manufacturer  
- Call-out or inspection may be charged if no work is carried out  

---

## Legal

- Trade name: **TJ Electro**
- KvK number: 80477917

---

*© 2026 TJ Electro. All rights reserved.*
