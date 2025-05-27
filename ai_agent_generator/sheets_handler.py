"""Google Sheets handler for logging generated AI agent ideas."""

from __future__ import annotations

from typing import List, Dict

import gspread
from google.oauth2.service_account import Credentials

# Adjust the path if your service account file lives elsewhere
CREDS_FILE = "service_account.json"
SCOPE = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive",
]

SPREADSHEET_NAME = "Daily AI Agent Ideas"


def _authorize_client():
    creds = Credentials.from_service_account_file(CREDS_FILE, scopes=SCOPE)
    return gspread.authorize(creds)


def _get_or_create_sheet(gc):
    try:
        sh = gc.open(SPREADSHEET_NAME)
    except gspread.SpreadsheetNotFound:
        sh = gc.create(SPREADSHEET_NAME)
        # Share with Henry's email for visibility (read-only)
        sh.share("henrydoherty88@gmail.com", perm_type="user", role="reader")
    return sh.sheet1


def append_to_sheet(ideas: List[Dict]) -> str:
    """Appends the list of ideas to the Google Sheet and returns the sheet URL."""
    gc = _authorize_client()
    sheet = _get_or_create_sheet(gc)

    rows = [
        [idea.get("Date"), idea.get("Title"), idea.get("Description"), idea.get("Use Case"), idea.get("Source")]
        for idea in ideas
    ]

    sheet.append_rows(rows, value_input_option="RAW")
    return sheet.spreadsheet.url
