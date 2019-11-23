# Tenttiarkisto frontend

Exam archive frontend for all of our faculty / Koko tiedekunnan (LuTe) laajuisen tenttiarkiston frontend

### Tech
- React
- Bootstrap 4

Backend is here <https://github.com/asteriskiry/tenttiarkisto-backend>

### Start

```
git clone https://github.com/asteriskiry/tenttiarkisto-frontend.git
cd tenttiarkisto-frontend
yarn
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production

Exam archive is hosted on Digit ry:s AWS. CI/CD-pipe via Github Actions is confugred on this repo, so it builds & deploys on push to master. Temporary URL: <http://tentit.fi.s3-website.eu-north-1.amazonaws.com/>

---
© Asteriski ry & Digit ry
