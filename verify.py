import os
import json
import re

def verify_portfolio():
    print("=== VERIFYING ALI HAMZA PORTFOLIO (REAL INFO & HONEST POSITIONING) ===")
    
    # 1. Check required files
    required_files = [
        "index.html",
        "robots.txt",
        "sitemap.xml",
        "css/style.css",
        "css/components.css",
        "js/main.js",
        "js/portfolio.js",
        "js/estimator.js",
        "assets/images/profile-photo.jpg",
        "assets/images/project-automation.png",
        "assets/images/project-whatsapp.png",
        "assets/images/project-webapp.png",
        "assets/images/project-landing.png",
        "assets/images/og-preview.svg",
        "assets/images/favicon.svg"
    ]
    
    for rf in required_files:
        exists = os.path.exists(rf)
        size = os.path.getsize(rf) if exists else 0
        print(f"[{'PASS' if exists else 'FAIL'}] {rf} ({size} bytes)")
    
    # 2. Check JSON-LD Schema
    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()
    
    schema_matches = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.DOTALL)
    if schema_matches:
        for idx, sm in enumerate(schema_matches):
            try:
                schema_json = json.loads(sm.strip())
                print(f"[PASS] JSON-LD Schema #{idx+1} valid! Entities in graph: {len(schema_json.get('@graph', []))}")
                for entity in schema_json.get('@graph', []):
                    print(f"       -> @type: {entity.get('@type')}, id: {entity.get('@id')}")
            except Exception as e:
                print(f"[FAIL] JSON-LD parse error: {e}")
    else:
        print("[FAIL] No JSON-LD schema found!")

    # 3. Check for NO old placeholder phone or email or specific city
    old_placeholders = [
        "923000000000",
        "contact@alihamza.dev",
        "Islamabad",
        "PK-IS",
        "PrimeVista",
        "Fawad Khan",
        "Sarah Naveed"
    ]
    
    for op in old_placeholders:
        count_in_html = html.count(op)
        if count_in_html == 0:
            print(f"[PASS] Zero occurrences of '{op}' in index.html")
        else:
            print(f"[FAIL] Found {count_in_html} occurrences of '{op}' in index.html")

    # 4. Check for Real Contact Info & Elements
    checks = {
        "Real WhatsApp wa.me links (+923072538314)": 'https://wa.me/923072538314' in html,
        "Real WhatsApp display text (+92 307 2538314)": '+92 307 2538314' in html,
        "Real Email (topworry5@gmail.com)": 'topworry5@gmail.com' in html,
        "Generic Pakistan Location": '📍 Pakistan (Global Remote)' in html and 'name="geo.placename" content="Pakistan"' in html,
        "Single H1 Tag": len(re.findall(r'<h1\b', html)) == 1,
        "Profile Photo in Hero": 'src="./assets/images/profile-photo.jpg"' in html,
        "Project Automation Image": 'src="./assets/images/project-automation.png"' in html,
        "Project WhatsApp Image": 'src="./assets/images/project-whatsapp.png"' in html,
        "Project WebApp Image": 'src="./assets/images/project-webapp.png"' in html,
        "Project Landing Image": 'src="./assets/images/project-landing.png"' in html,
        "Hero Typewriter Element Present": 'id="typewriter-text"' in html and 'typewriter-cursor' in html,
        "Tools Marquee Strip Present": 'tools-marquee-section' in html and 'OpenAI' in html and 'WhatsApp Business API' in html and 'Google Antigravity' in html,
        "Hero Availability Widget & Edit Comment": '<!-- EDIT AVAILABILITY:' in html and '🟢 Currently available — 2 project slots open this month' in html,
        "Hero Response Time Badge": 'Average response time:' in html and 'Under 2 hours' in html,
        "PDF Brochure Download Button & Comment": 'Download Services &amp; Pricing PDF' in html and '<!-- TODO: Replace with actual PDF' in html,
        "Estimator Section Present": 'id="estimator"' in html,
        "How I Work Process Section Present": 'id="process"' in html,
        "Process 5 Steps Present": 'data-step="1"' in html and 'data-step="5"' in html and 'Discovery Call' in html and 'Launch &amp; Support' in html,
        "Process Nav Link Present": 'href="#process"' in html,
        "Launch Pricing Badges Present": html.count('🚀 Launch Pricing — Limited to my first 10 clients') >= 2,
        "Local Pakistan PKR Pricing Banner": 'Local clients in Pakistan:' in html and 'PKR pricing' in html,
        "Unlimited Revisions Guarantee Present": "Unlimited revisions until you're happy with the result" in html,
        "Safe Rush Delivery Window": "Priority Rush Delivery (as fast as 3 days, subject to project scope)" in html,
        "No Generic LinkedIn/GitHub Placeholders in Contact": 'href="https://linkedin.com"' not in html and 'href="https://github.com"' not in html,
        "Why Work With Me Commitment Section": 'id="commitment"' in html,
        "FAQ Section Present": 'id="faq"' in html,
    }

    for name, passed in checks.items():
        print(f"[{'PASS' if passed else 'FAIL'}] {name}")

    print("=== VERIFICATION COMPLETE ===")

if __name__ == "__main__":
    verify_portfolio()
