from PIL import Image, ImageDraw, ImageFont

def create_polished_project_images():
    print("Generating ultra-crisp project screenshots with clean Segoe UI typography...")
    W, H = 1200, 750

    # Fonts
    font_large_b = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 26)
    font_title_b = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 22)
    font_body_b  = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 18)
    font_body    = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 18)
    font_sm      = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 15)
    font_tag     = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 14)

    # -------------------------------------------------------------
    # 1. AI Multi-Agent Workflow Engine (project-automation.png)
    # -------------------------------------------------------------
    img1 = Image.new('RGB', (W, H), (11, 15, 25))
    d1 = ImageDraw.Draw(img1)
    
    # Outer Card & Window Frame
    d1.rounded_rectangle([10, 10, W-10, H-10], radius=24, outline=(40, 53, 75), width=2, fill=(15, 23, 42))
    
    # Header bar
    d1.rounded_rectangle([10, 10, W-10, 75], radius=24, fill=(20, 29, 47))
    d1.rectangle([10, 55, W-10, 75], fill=(20, 29, 47))
    d1.ellipse([35, 36, 53, 54], fill=(239, 68, 68))
    d1.ellipse([63, 36, 81, 54], fill=(245, 158, 11))
    d1.ellipse([91, 36, 109, 54], fill=(16, 185, 129))
    d1.text((135, 30), "AI Multi-Agent Workflow Pipeline • Live Automation Engine", fill=(226, 232, 240), font=font_body_b)

    # Grid Points
    for x in range(60, W-40, 55):
        for y in range(120, H-100, 55):
            d1.ellipse([x-2, y-2, x+2, y+2], fill=(30, 41, 59))

    # Connecting Flow Lines
    d1.line([(280, 310), (460, 200)], fill=(16, 185, 129), width=6)
    d1.line([(280, 310), (460, 430)], fill=(6, 182, 212), width=6)
    d1.line([(720, 200), (900, 310)], fill=(139, 92, 246), width=6)
    d1.line([(720, 430), (900, 310)], fill=(236, 72, 153), width=6)

    # Node 1: Inbound Webhook (Left)
    d1.rounded_rectangle([50, 220, 280, 400], radius=18, fill=(19, 29, 46), outline=(16, 185, 129), width=3)
    d1.rounded_rectangle([50, 220, 280, 270], radius=18, fill=(6, 78, 59))
    d1.rectangle([50, 250, 280, 270], fill=(6, 78, 59))
    d1.text((70, 232), "INBOUND TRIGGER", fill=(52, 211, 153), font=font_tag)
    d1.text((70, 290), "Webhook Ingest", fill=(248, 250, 252), font=font_title_b)
    d1.text((70, 325), "event: new_inquiry", fill=(148, 163, 184), font=font_sm)
    d1.text((70, 355), "Status: 200 OK", fill=(52, 211, 153), font=font_tag)

    # Node 2: OpenAI Synthesis (Top Center)
    d1.rounded_rectangle([460, 110, 720, 290], radius=18, fill=(19, 29, 46), outline=(139, 92, 246), width=3)
    d1.rounded_rectangle([460, 110, 720, 160], radius=18, fill=(76, 29, 149))
    d1.rectangle([460, 140, 720, 160], fill=(76, 29, 149))
    d1.text((480, 122), "AI SYNTHESIS AGENT", fill=(196, 181, 253), font=font_tag)
    d1.text((480, 180), "GPT-4o Evaluation", fill=(248, 250, 252), font=font_title_b)
    d1.text((480, 215), "Intent Score: 98% High", fill=(148, 163, 184), font=font_sm)
    d1.text((480, 245), "Auto-Summarized", fill=(167, 139, 250), font=font_tag)

    # Node 3: n8n Workflow Data Enrich (Bottom Center)
    d1.rounded_rectangle([460, 340, 720, 520], radius=18, fill=(19, 29, 46), outline=(6, 182, 212), width=3)
    d1.rounded_rectangle([460, 340, 720, 390], radius=18, fill=(22, 78, 99))
    d1.rectangle([460, 370, 720, 390], fill=(22, 78, 99))
    d1.text((480, 352), "PIPELINE AUTOMATION", fill=(103, 232, 249), font=font_tag)
    d1.text((480, 410), "n8n / Make Engine", fill=(248, 250, 252), font=font_title_b)
    d1.text((480, 445), "Syncing Database & CRM", fill=(148, 163, 184), font=font_sm)
    d1.text((480, 475), "Execution Time: 0.18s", fill=(56, 189, 248), font=font_tag)

    # Node 4: Action Outcome (Right)
    d1.rounded_rectangle([900, 220, 1150, 400], radius=18, fill=(19, 29, 46), outline=(16, 185, 129), width=3)
    d1.rounded_rectangle([900, 220, 1150, 270], radius=18, fill=(6, 78, 59))
    d1.rectangle([900, 250, 1150, 270], fill=(6, 78, 59))
    d1.text((920, 232), "AUTOMATED OUTCOME", fill=(52, 211, 153), font=font_tag)
    d1.text((920, 290), "Instant WhatsApp Alert", fill=(248, 250, 252), font=font_title_b)
    d1.text((920, 325), "Dispatched via Meta API", fill=(148, 163, 184), font=font_sm)
    d1.text((920, 355), "Latency: 0.35s [Delivered]", fill=(52, 211, 153), font=font_tag)

    # Bottom metrics strip
    d1.rounded_rectangle([50, 625, W-50, 710], radius=16, fill=(19, 29, 46), outline=(40, 53, 75), width=1)
    d1.text((80, 650), "Architecture: OpenAI GPT-4o + n8n Webhooks + Python Service", fill=(148, 163, 184), font=font_body)
    d1.text((880, 650), "STATUS: ACTIVE WORKFLOW", fill=(16, 185, 129), font=font_body_b)

    img1.save('assets/images/project-automation.png', 'PNG')
    print("Saved assets/images/project-automation.png")


    # -------------------------------------------------------------
    # 2. WhatsApp AI Bot (project-whatsapp.png)
    # -------------------------------------------------------------
    img2 = Image.new('RGB', (W, H), (11, 19, 25))
    d2 = ImageDraw.Draw(img2)
    
    # Outer frame
    d2.rounded_rectangle([10, 10, W-10, H-10], radius=24, outline=(42, 57, 66), width=2, fill=(17, 27, 33))
    
    # WhatsApp header bar
    d2.rounded_rectangle([10, 10, W-10, 85], radius=24, fill=(32, 44, 51))
    d2.rectangle([10, 65, W-10, 85], fill=(32, 44, 51))
    d2.ellipse([35, 43, 53, 61], fill=(239, 68, 68))
    d2.ellipse([63, 43, 81, 61], fill=(245, 158, 11))
    d2.ellipse([91, 43, 109, 61], fill=(16, 185, 129))

    # WhatsApp Bot Icon + Status
    d2.ellipse([135, 25, 185, 75], fill=(37, 211, 102))
    d2.text((144, 36), "WA", fill=(11, 19, 25), font=font_title_b)
    d2.text((205, 28), "Meta Cloud API • 24/7 Conversational AI Assistant", fill=(233, 237, 239), font=font_title_b)
    d2.text((205, 55), "Online | Automated Responses & Lead Qualification", fill=(37, 211, 102), font=font_sm)

    # Chat Bubbles (Left Side)
    # Customer Bubble 1
    d2.rounded_rectangle([45, 115, 560, 215], radius=16, fill=(32, 44, 51))
    d2.text((70, 130), "Hi! I need an automated WhatsApp booking bot", fill=(233, 237, 239), font=font_body)
    d2.text((70, 160), "for my business in Pakistan.", fill=(233, 237, 239), font=font_body)
    d2.text((475, 185), "10:42 AM", fill=(134, 150, 160), font=font_sm)

    # AI Bot Response Bubble
    d2.rounded_rectangle([100, 235, 680, 400], radius=16, fill=(0, 92, 75), outline=(37, 211, 102), width=2)
    d2.text((125, 250), "AI ASSISTANT (Ali Hamza Bot)", fill=(37, 211, 102), font=font_tag)
    d2.text((125, 280), "Hello! I can deploy a custom Meta Cloud API bot", fill=(248, 250, 252), font=font_body)
    d2.text((125, 310), "with instant FAQ answers, catalog sharing,", fill=(248, 250, 252), font=font_body)
    d2.text((125, 340), "and automated Google Calendar scheduling.", fill=(248, 250, 252), font=font_body)
    d2.text((560, 365), "10:42 AM [Sent]", fill=(134, 150, 160), font=font_sm)

    # Quick reply button pill
    d2.rounded_rectangle([100, 420, 440, 480], radius=14, fill=(32, 44, 51), outline=(0, 168, 132), width=2)
    d2.text((125, 438), ">> Book a 15-Min Discovery Demo", fill=(0, 168, 132), font=font_body_b)

    # Customer Confirmation Bubble
    d2.rounded_rectangle([45, 505, 520, 585], radius=16, fill=(32, 44, 51))
    d2.text((70, 525), "Great! Let's schedule it for tomorrow.", fill=(233, 237, 239), font=font_body)
    d2.text((435, 550), "10:43 AM", fill=(134, 150, 160), font=font_sm)

    # Right Panel: CRM & API Telemetry
    d2.rounded_rectangle([720, 115, 1150, 700], radius=20, fill=(24, 34, 41), outline=(42, 57, 66), width=1)
    d2.rounded_rectangle([720, 115, 1150, 175], radius=20, fill=(32, 44, 51))
    d2.rectangle([720, 155, 1150, 175], fill=(32, 44, 51))
    d2.text((750, 132), "Live Bot Telemetry & Integrations", fill=(233, 237, 239), font=font_title_b)

    # Metric 1
    d2.rounded_rectangle([745, 195, 1125, 290], radius=14, fill=(17, 27, 33))
    d2.text((765, 210), "Average Response Speed", fill=(134, 150, 160), font=font_sm)
    d2.text((765, 238), "< 1.2s (Instant Autonomous)", fill=(37, 211, 102), font=font_title_b)

    # Metric 2
    d2.rounded_rectangle([745, 310, 1125, 405], radius=14, fill=(17, 27, 33))
    d2.text((765, 325), "Lead Conversion Routing", fill=(134, 150, 160), font=font_sm)
    d2.text((765, 353), "100% Automated Handoff", fill=(6, 182, 212), font=font_title_b)

    # Integrations
    d2.text((745, 430), "Connected Platforms:", fill=(233, 237, 239), font=font_body_b)
    
    d2.rounded_rectangle([745, 460, 925, 515], radius=10, fill=(32, 44, 51))
    d2.text((765, 475), "Meta Cloud API", fill=(56, 189, 248), font=font_tag)
    
    d2.rounded_rectangle([945, 460, 1125, 515], radius=10, fill=(32, 44, 51))
    d2.text((975, 475), "OpenAI GPT", fill=(167, 139, 250), font=font_tag)

    d2.rounded_rectangle([745, 530, 925, 585], radius=10, fill=(32, 44, 51))
    d2.text((765, 545), "Google Calendar", fill=(52, 211, 153), font=font_tag)

    d2.rounded_rectangle([945, 530, 1125, 585], radius=10, fill=(32, 44, 51))
    d2.text((980, 545), "PostgreSQL", fill=(244, 114, 182), font=font_tag)

    d2.rounded_rectangle([745, 615, 1125, 675], radius=12, fill=(0, 92, 75))
    d2.text((810, 633), "ACTIVE: 24/7 Webhook Service", fill=(248, 250, 252), font=font_body_b)

    img2.save('assets/images/project-whatsapp.png', 'PNG')
    print("Saved assets/images/project-whatsapp.png")


    # -------------------------------------------------------------
    # 3. SaaS Dashboard (project-webapp.png)
    # -------------------------------------------------------------
    img3 = Image.new('RGB', (W, H), (11, 15, 25))
    d3 = ImageDraw.Draw(img3)
    
    # Outer frame
    d3.rounded_rectangle([10, 10, W-10, H-10], radius=24, outline=(49, 46, 129), width=2, fill=(15, 23, 42))
    
    # Browser bar
    d3.rounded_rectangle([10, 10, W-10, 75], radius=24, fill=(20, 29, 47))
    d3.rectangle([10, 55, W-10, 75], fill=(20, 29, 47))
    d3.ellipse([35, 36, 53, 54], fill=(239, 68, 68))
    d3.ellipse([63, 36, 81, 54], fill=(245, 158, 11))
    d3.ellipse([91, 36, 109, 54], fill=(16, 185, 129))

    d3.rounded_rectangle([140, 24, 660, 62], radius=8, fill=(30, 41, 59))
    d3.text((160, 32), "https://saas-management-portal.demo/telemetry", fill=(148, 163, 184), font=font_body)

    # Left sidebar
    d3.rounded_rectangle([35, 95, 245, 715], radius=16, fill=(15, 23, 42), outline=(30, 41, 59), width=1)
    d3.text((55, 125), "NEXUS CORE", fill=(56, 189, 248), font=font_large_b)
    
    d3.rounded_rectangle([48, 175, 232, 225], radius=8, fill=(30, 41, 59), outline=(6, 182, 212), width=1)
    d3.text((65, 188), "Telemetry Feed", fill=(56, 189, 248), font=font_body_b)

    d3.text((65, 250), "Automations", fill=(148, 163, 184), font=font_body)
    d3.text((65, 305), "Active Users", fill=(148, 163, 184), font=font_body)
    d3.text((65, 360), "Webhooks", fill=(148, 163, 184), font=font_body)
    d3.text((65, 415), "Settings", fill=(148, 163, 184), font=font_body)

    # Top KPI cards
    d3.rounded_rectangle([270, 95, 540, 220], radius=16, fill=(19, 29, 46), outline=(30, 41, 59), width=1)
    d3.text((290, 115), "Platform Response Speed", fill=(148, 163, 184), font=font_sm)
    d3.text((290, 142), "< 42 ms", fill=(16, 185, 129), font=font_large_b)
    d3.text((290, 182), "+ 99.99% Render Uptime", fill=(52, 211, 153), font=font_sm)

    d3.rounded_rectangle([565, 95, 835, 220], radius=16, fill=(19, 29, 46), outline=(30, 41, 59), width=1)
    d3.text((585, 115), "API Endpoints Active", fill=(148, 163, 184), font=font_sm)
    d3.text((585, 142), "24 REST APIs", fill=(6, 182, 212), font=font_large_b)
    d3.text((585, 182), "Zero Framework Overhead", fill=(56, 189, 248), font=font_sm)

    d3.rounded_rectangle([860, 95, 1150, 220], radius=16, fill=(19, 29, 46), outline=(30, 41, 59), width=1)
    d3.text((880, 115), "Theme System", fill=(148, 163, 184), font=font_sm)
    d3.text((880, 142), "Dark / Light", fill=(168, 85, 247), font=font_large_b)
    d3.text((880, 182), "LocalStorage Synced", fill=(192, 132, 252), font=font_sm)

    # Main Chart Panel
    d3.rounded_rectangle([270, 245, 1150, 715], radius=16, fill=(19, 29, 46), outline=(30, 41, 59), width=1)
    d3.text((295, 270), "Real-Time Traffic & System Performance Telemetry", fill=(248, 250, 252), font=font_title_b)
    d3.text((1000, 270), "LIVE STREAM", fill=(16, 185, 129), font=font_body_b)

    # Grid lines
    for gy in [350, 430, 510, 590]:
        d3.line([(300, gy), (1110, gy)], fill=(30, 41, 59), width=1)

    # Chart curve
    chart_points = [
        (310, 580), (410, 510), (510, 450), (610, 380),
        (710, 430), (810, 340), (910, 310), (1010, 370), (1110, 290)
    ]
    for i in range(len(chart_points)-1):
        d3.line([chart_points[i], chart_points[i+1]], fill=(6, 182, 212), width=5)
        d3.ellipse([chart_points[i][0]-5, chart_points[i][1]-5, chart_points[i][0]+5, chart_points[i][1]+5], fill=(16, 185, 129))

    d3.ellipse([1110-6, 290-6, 1110+6, 290+6], fill=(16, 185, 129))

    img3.save('assets/images/project-webapp.png', 'PNG')
    print("Saved assets/images/project-webapp.png")


    # -------------------------------------------------------------
    # 4. Landing Page Demo (project-landing.png)
    # -------------------------------------------------------------
    img4 = Image.new('RGB', (W, H), (15, 23, 42))
    d4 = ImageDraw.Draw(img4)
    
    # Outer frame
    d4.rounded_rectangle([10, 10, W-10, H-10], radius=24, outline=(30, 41, 59), width=2, fill=(2, 6, 23))
    
    # Nav header
    d4.rounded_rectangle([10, 10, W-10, 80], radius=24, fill=(30, 41, 59))
    d4.rectangle([10, 60, W-10, 80], fill=(30, 41, 59))
    d4.ellipse([35, 38, 53, 56], fill=(239, 68, 68))
    d4.ellipse([63, 38, 81, 56], fill=(245, 158, 11))
    d4.ellipse([91, 38, 109, 56], fill=(16, 185, 129))

    d4.text((140, 32), "AURA CONVERT • High-Speed B2B Growth Funnel", fill=(248, 250, 252), font=font_title_b)
    d4.rounded_rectangle([990, 24, 1130, 66], radius=12, fill=(16, 185, 129))
    d4.text((1025, 34), "Launch >>", fill=(11, 15, 25), font=font_body_b)

    # Hero headline text (Left)
    d4.rounded_rectangle([50, 130, 340, 175], radius=20, fill=(6, 78, 59), outline=(16, 185, 129), width=1)
    d4.text((70, 142), "100/100 LIGHTHOUSE SPEED", fill=(52, 211, 153), font=font_tag)

    d4.text((50, 210), "Supercharge Client Inquiries With", fill=(248, 250, 252), font=font_large_b)
    d4.text((50, 255), "Sub-Second Fast Landing Pages", fill=(56, 189, 248), font=font_large_b)

    d4.text((50, 325), "Built with clean HTML5, modern vanilla CSS tokens,", fill=(148, 163, 184), font=font_body)
    d4.text((50, 360), "and Schema.org AEO/GEO rich snippet optimization.", fill=(148, 163, 184), font=font_body)

    d4.rounded_rectangle([50, 420, 250, 480], radius=12, fill=(16, 185, 129))
    d4.text((80, 440), "Get Free Quote >>", fill=(11, 15, 25), font=font_body_b)

    d4.rounded_rectangle([270, 420, 450, 480], radius=12, fill=(30, 41, 59), outline=(51, 65, 85), width=1)
    d4.text((305, 440), "View Live Demo", fill=(248, 250, 252), font=font_body_b)

    # Right scorecard panel
    d4.rounded_rectangle([700, 120, 1140, 700], radius=20, fill=(30, 41, 59), outline=(56, 189, 248), width=2)
    d4.text((730, 145), "Speed & SEO Scorecard", fill=(248, 250, 252), font=font_title_b)

    # Gauge 1
    d4.rounded_rectangle([730, 195, 1110, 310], radius=14, fill=(15, 23, 42))
    d4.ellipse([750, 220, 810, 280], fill=(6, 78, 59), outline=(16, 185, 129), width=3)
    d4.text((765, 236), "100", fill=(52, 211, 153), font=font_large_b)
    d4.text((830, 225), "Google Lighthouse Score", fill=(248, 250, 252), font=font_body_b)
    d4.text((830, 255), "Perfect Core Web Vitals", fill=(148, 163, 184), font=font_sm)

    # Gauge 2
    d4.rounded_rectangle([730, 340, 1110, 455], radius=14, fill=(15, 23, 42))
    d4.ellipse([750, 365, 810, 425], fill=(30, 27, 75), outline=(139, 92, 246), width=3)
    d4.text((762, 381), "AEO", fill=(196, 181, 253), font=font_tag)
    d4.text((830, 370), "Schema.org Rich Snippets", fill=(248, 250, 252), font=font_body_b)
    d4.text((830, 400), "Voice & AI Search Optimized", fill=(148, 163, 184), font=font_sm)

    # Gauge 3
    d4.rounded_rectangle([730, 485, 1110, 600], radius=14, fill=(22, 78, 99))
    d4.ellipse([750, 510, 810, 570], fill=(22, 78, 99), outline=(6, 182, 212), width=3)
    d4.text((762, 526), "<1s", fill=(103, 232, 249), font=font_tag)
    d4.text((830, 515), "Sub-Second First Paint", fill=(248, 250, 252), font=font_body_b)
    d4.text((830, 545), "Instant conversion experience", fill=(148, 163, 184), font=font_sm)

    d4.rounded_rectangle([730, 625, 1110, 680], radius=12, fill=(16, 185, 129))
    d4.text((820, 642), "Fast Delivery & Clean Code", fill=(11, 15, 25), font=font_body_b)

    img4.save('assets/images/project-landing.png', 'PNG')
    print("Saved assets/images/project-landing.png")

if __name__ == "__main__":
    create_polished_project_images()
