"""
Main entrypoint for the Daily AI Agent Generator.
Runs every day at 8:00 AM EST and performs:
1. Fetch & summarize latest AI news from configured RSS feeds
2. Generate 10 new AI agent ideas for Henry (student‑athlete, ADHD, productivity‑driven, creative builder)
3. Append ideas to Google Sheet (Date, Title, Description, Use Case, Source)
4. Send daily email with the ideas
5. Automatic fallback fix via ChatGPT if any step fails
"""

import logging
import traceback
import os
import sys
from datetime import datetime

import pytz
from apscheduler.schedulers.blocking import BlockingScheduler

from rss_parser import fetch_and_summarize
from idea_generator import generate_agent_ideas
from sheets_handler import append_to_sheet
from email_sender import send_email
from fallback import attempt_fix

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[logging.StreamHandler()]
)


def run_daily():
    """Orchestrates the daily workflow."""
    try:
        logging.info("Fetching & summarizing AI updates…")
        summary = fetch_and_summarize()

        logging.info("Generating agent ideas…")
        ideas = generate_agent_ideas(summary)

        logging.info("Appending ideas to Google Sheet…")
        sheet_url = append_to_sheet(ideas)

        logging.info("Sending daily email…")
        send_email(ideas, sheet_url)

        logging.info("✅ Daily AI Agent generation completed successfully")

    except Exception as exc:
        logging.error("❌ Workflow failed: %s", exc)
        traceback_str = traceback.format_exc()
        logging.debug(traceback_str)

        # Attempt automatic fix using ChatGPT/Gemini
        attempt_fix(traceback_str)


def schedule():
    tz = pytz.timezone("US/Eastern")
    scheduler = BlockingScheduler(timezone=tz)
    scheduler.add_job(run_daily, "cron", hour=8, minute=0, id="daily_agent_gen")

    logging.info("Scheduler started — waiting for next run at 8:00 AM EST…")
    try:
        scheduler.start()
    except (KeyboardInterrupt, SystemExit):
        logging.info("Scheduler stopped.")


import os
import sys

if __name__ == "__main__":
    # GitHub Actions sets GITHUB_ACTIONS=true, most CI tools set CI=true
    if os.getenv("CI") or os.getenv("GITHUB_ACTIONS"):
        run_daily()
        sys.exit(0)
    else:
        schedule()

