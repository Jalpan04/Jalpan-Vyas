import urllib.request
import re
import json
import ssl

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def fetch_repo_details(user, repo):
    url = f"https://github.com/{user}/{repo}"
    print(f"Fetching {url}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        response = urllib.request.urlopen(req, context=ctx)
        html = response.read().decode('utf-8')

        # Description
        desc_match = re.search(r'<p class="f4 my-3">(.+?)</p>', html, re.DOTALL)
        description = desc_match.group(1).strip() if desc_match else "No description found"
        # Clean up tags if any
        description = re.sub(r'<[^>]+>', '', description).strip()

        # Tech/Languages (simple extraction from "Languages" section or stats)
        # This is harder to scrape reliably without API. 
        # But we can look for "Language" span or the "Layout-sidebar" area
        # A simple heuristic: Look for `color-fg-default text-bold mr-1` spans which usually hold language names in sidebar
        languages = re.findall(r'<span class="color-fg-default text-bold mr-1">([^<]+)</span>', html)
        
        # OG Image for project image
        og_image_match = re.search(r'<meta property="og:image" content="([^"]+)"', html)
        image_url = og_image_match.group(1) if og_image_match else "assets/images/placeholder.jpg"

        return {
            "id": repo.lower().replace("_", "-"),
            "name": repo.replace("_", " ").title(), # SABLE_DECK -> Sable Deck
            "tagline": description[:100] + "..." if len(description) > 100 else description,
            "description": description,
            "image": image_url, # We will likely need to download this or use it directly
            "tech": languages[:5], # Take top 5
            "liveUrl": "", # User didn't provide, assume none or find in 'link' info
            "sourceUrl": url,
            "featured": False
        }

    except Exception as e:
        print(f"Error fetching {repo}: {e}")
        return None

repos = ["SABLE_DECK", "Arckage", "Pixelmess"]
user = "Jalpan04"
projects = []

for repo in repos:
    data = fetch_repo_details(user, repo)
    if data:
        projects.append(data)

with open('new_projects.json', 'w') as f:
    json.dump(projects, f, indent=4)
print("Saved to new_projects.json")
