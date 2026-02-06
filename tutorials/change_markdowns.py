import os
import re
import requests
from pathlib import Path
from urllib.parse import urlparse


def process_markdown_file(md_file_path):
    """Process a single markdown file: download images and update links."""

    # Read markdown content
    with open(md_file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Get markdown filename without extension
    md_name = Path(md_file_path).stem

    # Create assets folder structure in the SAME directory as the markdown file
    md_parent = Path(md_file_path).parent
    assets_dir = md_parent / "assets" / md_name
    assets_dir.mkdir(parents=True, exist_ok=True)

    # Find all image URLs in markdown
    image_pattern = r"!\[.*?\]\((https?://[^\)]+)\)"
    matches = re.finditer(image_pattern, content)

    new_content = content
    image_count = 0

    for match in matches:
        url = match.group(1)
        image_count += 1

        # Extract filename from URL
        parsed_url = urlparse(url)
        filename = os.path.basename(parsed_url.path)

        # Download image
        try:
            response = requests.get(url, timeout=10)
            response.raise_for_status()

            # Save image
            image_path = assets_dir / filename
            with open(image_path, "wb") as img_file:
                img_file.write(response.content)

            # Update markdown content with new path
            new_url = f"assets/{md_name}/{filename}"
            new_content = new_content.replace(url, new_url)

            print(f"  ✓ Downloaded: {filename}")

        except Exception as e:
            print(f"  ✗ Error downloading {url}: {e}")

    if image_count == 0:
        print(f"  No images found in this file")

    # Save updated markdown
    with open(md_file_path, "w", encoding="utf-8") as f:
        f.write(new_content)

    print(f"  Saved updated markdown")


def process_multiple_markdown_files(directory):
    """Process all markdown files in a directory."""

    # Convert to Path object and resolve to absolute path
    directory = Path(directory).resolve()

    print(f"Looking for markdown files in: {directory}")
    print(f"Current working directory: {Path.cwd()}\n")

    # Find all markdown files
    md_files = list(directory.glob("*.md"))

    if not md_files:
        print("❌ No markdown files found!")
        return

    print(f"Found {len(md_files)} markdown file(s):\n")
    for md_file in md_files:
        print(f"  - {md_file.name}")

    print("\n" + "=" * 50 + "\n")

    for md_file in md_files:
        print(f"Processing: {md_file.name}")
        process_markdown_file(md_file)
        print()


if __name__ == "__main__":
    # Get the directory where THIS script is located
    script_dir = Path(__file__).parent

    # Process markdown files in the 'tutorials' subdirectory
    tutorials_dir = script_dir  # / "tutorials"

    process_multiple_markdown_files(tutorials_dir)

    # Or process a specific file:
    # process_markdown_file("structure_icing_indicator.md")
