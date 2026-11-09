# ⚡ TJ Electro

[简体中文](README_zh.md)

Repository documentation is maintained in English and Simplified Chinese. The
English file is the sole source of truth. Chinese translations use the `_zh`
suffix and are updated in the same change.

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

Use the starter entry in `_data/portfolio.yml` as a template and append the new
entry in the desired display order. Keep `published: false` while preparing it.
Set it to `true` when the image and the title, description, and alt text in all
three languages are ready. If an entire project translation is missing, its
card falls back to English.

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
    zh:
      title: "配电箱升级"
      description: "更换老旧配电箱并重新接线。"
      alt: "升级完成的住宅配电箱"
    nl:
      title: "Groepenkast vernieuwd"
      description: "Een verouderde groepenkast vervangen en opnieuw bedraad."
      alt: "Vernieuwde groepenkast in een woning"
```

---

## Website translations

The website is available in English at `/`, Simplified Chinese at `/zh/`, and
Dutch at `/nl/`. Each language has a home, portfolio, and contact page. The
language switcher uses `_data/routes.yml` to link to the same page in the other
languages.

Maintain all three languages in every website change. Update shared copy in
`_data/i18n/en.yml`, `_data/i18n/zh.yml`, and `_data/i18n/nl.yml`, with matching
keys. Update page titles and descriptions in the corresponding entry points.
Keep portfolio translations together in `_data/portfolio.yml`. Verify the
three page versions and their language links before publishing.

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
