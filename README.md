# Abdur Rouf - Portfolio

Personal portfolio website: plain HTML, CSS and JavaScript (no build step).

## Structure
- `index.html`: home page (navbar, hero, about, skills, education, experience, projects, contact, footer)
- `project.html?id=<id>`: details page for each project
- `js/data.js`: **all editable content** (profile, social links, projects, publications)
- `css/style.css`: styles (dark / light theme)
- `assets/`: photo, resume PDF, project screenshots

## Update content
- Add LinkedIn / Facebook: fill in `PROFILE.socials` in `js/data.js`.
- Add a live link to a project: set its `live` field in `js/data.js`.

## Run locally
Open `index.html` in a browser, or run `python -m http.server` in this folder.

## Live Link
https://abdurrouf-portfolio.netlify.app/
