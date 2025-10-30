Personal Web Profile
=====================

This is a small static personal profile page demonstrating fetch() and DOM manipulation.

Files
- `index.html` — main page
- `styles.css` — styles and simple animations
- `script.js` — fetches local `data.json` and optionally fetches GitHub repos via the GitHub API
- `data.json` — local JSON with sample name, skills, hobbies, and projects

Notes about automatic GitHub fetching
- The page will auto-fetch public repositories if `data.json` includes the field `githubUsername` (set to your GitHub username). This repository already sets that to `nishimurajhaon07-ux` so repos will load automatically when you open the page.

Usage
1. Open `index.html` directly in the browser OR serve the folder with a simple HTTP server. Serving is recommended because some browsers restrict fetch() for local files.

PowerShell (from the `Web-Profile` folder):

```powershell
# serve on port 8000 (requires Python installed)
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

How to customize
- Edit `data.json` to change name, bio, skills, hobbies, and projects.
- In the page, enter a GitHub username and click "Fetch Repos" to load public repositories from GitHub.

Adding your photo (avatar)

1. Copy your image into the project folder and name it `avatar.jpg`. Example PowerShell command (run from any location):

```powershell
Copy-Item "C:\Users\agust\Downloads\726ed679-9f7a-4ead-9317-369f2fcc1963.jpg" -Destination "c:\xampp\htdocs\GitHub\Web-Profile\avatar.jpg"
```

2. Alternatively, edit `data.json` and set the `avatar` field to a URL or a local filename (e.g. `"avatar": "avatar.jpg"`). The page will prefer `data.json`'s `avatar` value if present.

3. You can also change the photo in-browser by clicking the "Change photo" button in the header and selecting a new image — this updates the image shown in the page but does not save it to disk.

Notes
- The page demonstrates asynchronous fetch() calls, error handling, and DOM updates.
- The GitHub API is used unauthenticated; for many requests or private repos you would need to use authentication.

Enjoy! Replace the placeholder name/bio/avatar with your own content and push to your GitHub repository for grading.