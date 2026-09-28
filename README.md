# Geevo Herbs Website

The website for **Geevo Herbs**, the Ayurvedic wellness brand. *Nature's vibrant secret.*

It's a simple website with no complicated setup. There's nothing to install, and you can preview it by double-clicking a file.

---

## What's in here

| File / folder | What it is |
|---|---|
| `index.html` | The home page (brand story, values, product list) |
| `products/pain-balm.html` | The Pain Balm product page (photos, ingredients, "Shop on Amazon" button) |
| `style.css` | All colors, fonts and layout for every page |
| `gallery.js` | Makes the product photo gallery swipeable |
| `img/` | All website images |
| `AGENTS.md` | Instructions for AI assistants (Claude, Codex, Cursor). You don't need to read it. |

---

## 1. One-time setup (about 10 minutes)

You need two free apps.

### a) GitHub Desktop: downloads the website and saves your changes

1. Download it from **https://desktop.github.com** and sign in with your GitHub account.
2. Click **File → Clone Repository → URL**.
3. Paste this link: `https://github.com/Giansingh4710/GeevoHerbs`
4. Choose where to save it (for example your Desktop) and click **Clone**.

You now have a `GeevoHerbs` folder on your computer.

### b) An AI assistant: makes changes for you

Pick **one**:

- **Claude** (recommended): download the desktop app from **https://claude.ai/download**, open it, go to the **Code** tab, and select the `GeevoHerbs` folder.
- **Codex** (ChatGPT): download the Codex app from **https://openai.com/codex**, sign in with your ChatGPT account, and open the `GeevoHerbs` folder.

---

## 2. See the website on your computer

Open the `GeevoHerbs` folder and **double-click `index.html`**. It opens in your web browser.

After the AI makes a change, **refresh the browser page** (⌘R on Mac, Ctrl+R on Windows) to see it.

---

## 3. Make changes by asking the AI

Just type what you want in plain English. Examples:

- *"Change the price on the Pain Balm page to $34.99."*
- *"Add a new product page for our Pain Capsule, like the Pain Balm page. Here are the photos: [drag photos in]."*
- *"Replace the photo in the 'Ayurveda, made vibrant' section with this one."*
- *"Rewrite the story section to mention that we're two sisters from New Jersey."*
- *"Add our TikTok link to the bottom of every page."*
- *"Make the 'Shop on Amazon' button bigger on phones."*
- *"Something looks broken on my phone at the top of the page. Can you fix it?"*

Tips:
- **Be specific** about which page and which section.
- **Drag photos into the chat** and the AI will resize them for the web.
- **Always check the page in your browser** before saving. Also check on your phone size: in Chrome, right-click → **Inspect** → click the phone icon.
- If you don't like a change, just say *"undo that"*.

---

## 4. Save and publish your changes

When you're happy with how it looks:

1. Open **GitHub Desktop**. It lists the files that changed.
2. At the bottom left, type a short note, like *"Updated price"*.
3. Click **Commit to main**, then **Push origin** (top bar).

The live website updates automatically within a minute or two.

> You can also just ask the AI: *"Save and push my changes to GitHub."*

---

## 5. The live website

The site is hosted for free on **GitHub Pages**:

**https://giansingh4710.github.io/GeevoHerbs/**

Every time you **Push** (step 4), it updates automatically. To check whether an update has finished, open the repository on github.com and click the **Actions** tab. A green check ✓ means it's live.

### Connecting your own domain (like `geevo.shop`)

1. On github.com, open this repository → **Settings → Pages**.
2. Under **Custom domain**, type your domain (e.g. `geevo.shop`) and click **Save**.
3. Log in to wherever you bought the domain (GoDaddy, Namecheap, Squarespace…) and open its **DNS settings**. Add these records:

   | Type | Name / Host | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `giansingh4710.github.io` |

4. Wait a few minutes to a few hours. Then go back to **Settings → Pages** and tick **Enforce HTTPS**.

> Not sure? Ask the AI: *"Help me connect my domain geevo.shop to GitHub Pages."*

---

## Good to know

- **Amazon link**: every "Shop on Amazon" button goes to `https://www.amazon.com/dp/B0DJ1P9RF1`.
- **Price** ($39.99) is typed in by hand. If Amazon's price changes, ask the AI to update it.
- **Brand colors & fonts** are set at the top of `style.css`. Fonts: *Melodrama* (headings) and *Montserrat* (text).
- **Contact**: geevoherbs@gmail.com · Instagram [@geevo.herbs](https://www.instagram.com/geevo.herbs/)
- **Keep photos small.** Never add giant camera photos directly. Ask the AI to resize them first so the site stays fast.
