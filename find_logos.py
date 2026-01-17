import urllib.request
import re

def find_langgraph_logo():
    url = "https://langchain-ai.github.io/langgraph/"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        # Look for logo img tag
        matches = re.findall(r'<img[^>]*src="([^"]*logo[^"]*)"', html, re.IGNORECASE)
        if matches:
            print("LangGraph candidates:", matches)
            # resolving relative paths?
            # if match starts with ., join with base url
    except Exception as e:
        print(f"LangGraph error: {e}")

def find_pygame_lofi():
    # Try raw github url for lofi
    url = "https://raw.githubusercontent.com/pygame/pygame/main/docs/reST/_static/pygame_lofi.svg"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        code = urllib.request.urlopen(req).getcode()
        if code == 200:
            print(f"Pygame Lofi found at: {url}")
        else:
            print(f"Pygame Lofi status: {code}")
    except Exception as e:
        print(f"Pygame Lofi error: {e}")

if __name__ == "__main__":
    find_langgraph_logo()
    find_pygame_lofi()
