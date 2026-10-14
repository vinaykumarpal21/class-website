# Sagar Classes – static website (HTML + CSS + JS only)

SAGAR-TUTION/
├── index.html              Home
├── html/                   about · attendance (student + staff tabs) · facilities · functions · toppers · contact
│                           staff-attendance · admin
├── css/style.css           ONE stylesheet: tokens, layout, hover system, admin, responsive
├── js/
│   ├── store.js            Data storage (localStorage), ranking, attendance rules, Excel/PDF export
│   ├── script.js           Public pages: notices, toppers, events, attendance + enquiry forms
│   ├── admin.js            Admin panel: login, add/edit/delete, attendance register
│   ├── layout.js           One navbar + footer shared by every page
│   └── theme.js            Light (default) / Dark switch
└── images/logo.jpeg

## Admin
Open `html/admin.html` and log in with **admin / admin@123**.

## Admin → "Website Images" tab
Upload / change / remove: Home main image and About-page profile photo.
Event, topper, student and staff photos are uploaded from their own tabs.

## Data
* Stored in the browser's localStorage (sample data is created on first load), so it stays on that device only.
* Photos are uploaded from the admin panel, resized in the browser; the class logo is used when there is none.
* Attendance can be marked only for students / staff that exist in the admin lists.
* Topper rank is calculated from the score inside each class; the home page shows #1 of every class.
* Backup: `SCStore.exportJSON()` · Reset to samples: `SCStore.reset()`.
* Excel downloads are `.xls`; PDF opens a print view – choose "Save as PDF".

