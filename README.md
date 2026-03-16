# 🏋️ NutriZone — Premium Supplement Store Website

A clean, modern **product overview website** for a supplement store.  
Built with plain **HTML**, **CSS**, and **JavaScript** — no frameworks, no installations needed!

---

## 📁 Project Files

```
nutri-store/
│
├── index.html    ← The main webpage (structure & content)
├── styles.css    ← All the design & colors (linked to HTML)
├── script.js     ← All the buttons & interactions (linked to HTML)
└── README.md     ← This file you're reading right now!
```

> 💡 **All 3 files must stay in the same folder** for the website to work properly.

---

## 🚀 How to Open the Website

You don't need to install anything. Just follow these steps:

### Step 1 — Download the files
Download all 3 files:
- `index.html`
- `styles.css`
- `script.js`

### Step 2 — Keep them in one folder
Create a folder on your computer (e.g. `NutriZone`) and put all 3 files inside it.

```
📂 NutriZone
   ├── index.html
   ├── styles.css
   └── script.js
```

### Step 3 — Open in browser
Double-click `index.html` — it will open in your web browser (Chrome, Firefox, Edge, etc.)

**That's it! 🎉 Your website is running.**

---

## 🌐 How the Files Are Linked

If you ever wonder how HTML knows about CSS and JS — here's where the links are inside `index.html`:

**CSS is linked in the `<head>` section (top of the file):**
```html
<link rel="stylesheet" href="styles.css" />
```

**JavaScript is linked just before `</body>` (bottom of the file):**
```html
<script src="script.js"></script>
```

> ⚠️ If you rename any file, make sure you update these links too!

---

## 🗺️ What's on the Website

| Section | What it does |
|---|---|
| **Navbar** | Fixed top bar with links to every section. On mobile, it turns into a hamburger menu. |
| **Hero** | Big full-screen banner with the store name and tagline. |
| **Brands** | Cards for MuscleBlaze, Avvatar, BigMuscles, Wellcore, Nutrabay, and Optimum Nutrition. Click a brand card to filter products! |
| **Products** | 15+ supplement products with photos, ratings, and weight options. |
| **Filters** | Filter products by Category (Protein, Creatine, etc.) and by Brand at the same time. |
| **Categories** | Visual tiles for each supplement type. |
| **About** | Store stats and why customers choose NutriZone. |
| **Store Location** | Embedded Google Map + a popup modal with full map and directions button. |
| **Footer** | Links and contact info. |

---

## ✨ Features Explained (Simple)

### 🔍 Product Filters
- Click any **Category** tab (e.g. "Protein") to show only protein products.
- Click any **Brand** tab (e.g. "MuscleBlaze") to show only that brand.
- You can combine both filters at the same time.

### 📍 Google Maps
- Scroll to the **"Find Our Store"** section.
- Click the **"View on Google Maps"** button.
- A popup opens with the full map and a "Get Directions" button.
- Press `Esc` or click anywhere outside to close it.

### ❤️ Wishlist Hearts
- Click the **♡ heart** on any product card to save it.
- It turns red (♥) to show it's saved.
- A small popup notification appears at the bottom.

### 📱 Mobile Friendly
- On smaller screens, the navigation collapses into a **☰ hamburger menu**.
- All sections stack neatly on mobile.

---

## 🎨 Want to Customize It?

### Change Store Name
Open `index.html` and search for `NutriZone` — replace it with your store name.

### Change Store Address (on map)
In `index.html`, find the two `<iframe>` tags with Google Maps and update the `src` URL with your location.  
You can get the embed code from [Google Maps](https://maps.google.com) → Share → Embed a map.

### Change Colors
Open `styles.css` and look for the `:root` section at the top:
```css
:root {
  --accent: #E63012;   /* Main red color — change this! */
  --black:  #0C0C0C;   /* Text color */
  --bg:     #FAFAF8;   /* Page background */
}
```
Just change the color values to whatever you like.

### Add a New Product
Copy any existing product block in `index.html` (search for `<div class="pcard"`), paste it, and update:
- `data-cat` → the category (protein / creatine / preworkout / mass / vitamins)
- `data-brand` → the brand name
- The image `src`
- Product name, description, rating, price

---

## 🛠️ Tech Stack

| Technology | What it's used for |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Styling, layout, animations |
| Vanilla JavaScript | Filters, map modal, scroll effects |
| Google Fonts | `Unbounded` + `Plus Jakarta Sans` fonts |
| Google Maps Embed | Store location map |
| Unsplash Images | Product & hero photographs |

> No npm, no Node.js, no React, no build tools — just plain web files!

---

## 📋 Browser Support

Works on all modern browsers:

| Browser | Supported |
|---|---|
| Google Chrome | ✅ Yes |
| Mozilla Firefox | ✅ Yes |
| Microsoft Edge | ✅ Yes |
| Safari (Mac/iOS) | ✅ Yes |
| Internet Explorer | ❌ No (outdated) |

---

## ❓ Common Issues

**Q: The website opens but has no styling (looks plain/ugly)?**  
A: Make sure `styles.css` is in the **same folder** as `index.html`. Don't open the CSS file alone — always open `index.html`.

**Q: The map is not showing?**  
A: You need an internet connection for Google Maps to load. The map won't work offline.

**Q: Images are not loading?**  
A: You need internet connection — images are loaded from Unsplash (online). A 🥛 emoji fallback shows if an image fails.

**Q: The JavaScript isn't working?**  
A: Make sure `script.js` is in the same folder as `index.html`. Also check that JavaScript is enabled in your browser.

**Q: Preview in Claude looks unstyled?**  
A: That's normal! Claude's preview sandboxes external files. Download all 3 files and open `index.html` locally — it'll look perfect.

---

## 📞 Need Help?

This is a static website — no server or database needed.  
If something doesn't look right, double-check that all 3 files are in the same folder and you're opening `index.html` in a browser.

---

*Built with ❤️ for NutriZone — India's Premium Supplement Store*
