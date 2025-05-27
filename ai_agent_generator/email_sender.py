"""Email sender utility for the Daily AI Agent Generator."""

from __future__ import annotations

import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from typing import List, Dict

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587

# These should be set as environment variables in the runtime environment
FROM_EMAIL = os.getenv("FROM_EMAIL", "henrydoherty88@gmail.com")
EMAIL_APP_PASSWORD = os.getenv("EMAIL_APP_PASSWORD")


def _build_html_body(ideas: List[Dict], sheet_url: str) -> str:
    rows = "".join(
        f"<tr><td>{idea['Title']}</td><td>{idea['Description']}</td>"
        f"<td>{idea['Use Case']}</td><td>{idea['Source']}</td></tr>"
        for idea in ideas
    )

    return f"""
    <html>
      <body>
        <h2>Daily AI Agent Ideas</h2>
        <p>View in Google Sheet: <a href='{sheet_url}'>{sheet_url}</a></p>
        <table border='1' cellpadding='6' cellspacing='0'>
          <tr>
            <th>Title</th><th>Description</th><th>Use Case</th><th>Source</th>
          </tr>
          {rows}
        </table>
      </body>
    </html>
    """.strip()


def send_email(ideas: List[Dict], sheet_url: str, to_email: str = "henrydoherty88@gmail.com") -> None:
    if not EMAIL_APP_PASSWORD:
        raise EnvironmentError("EMAIL_APP_PASSWORD environment variable not set.")

    msg = MIMEMultipart("alternative")
    msg["Subject"] = "Daily AI Agent Ideas"
    msg["From"] = FROM_EMAIL
    msg["To"] = to_email

    html_body = _build_html_body(ideas, sheet_url)
    msg.attach(MIMEText(html_body, "html"))

    with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
        server.starttls()
        server.login(FROM_EMAIL, EMAIL_APP_PASSWORD)
        server.sendmail(FROM_EMAIL, [to_email], msg.as_string())
