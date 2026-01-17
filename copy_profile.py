import shutil
import os

source = r"C:/Users/acer/.gemini/antigravity/brain/ab1d76c1-ffef-48cd-86b3-92e7e42ebe21/uploaded_image_1768635862179.jpg"
destination = r"c:/Users/acer/Desktop/web projects/Jalpan-Vyas/assets/images/profile.jpg"

try:
    os.makedirs(os.path.dirname(destination), exist_ok=True)
    shutil.copy2(source, destination)
    print("Successfully copied profile image.")
except Exception as e:
    print(f"Error copying file: {e}")
