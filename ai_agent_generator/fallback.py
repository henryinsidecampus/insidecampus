"""Automatic fallback helper that queries ChatGPT/Gemini for bug fixes."""

from __future__ import annotations

import logging
from openai import OpenAI

client = OpenAI()


def attempt_fix(error_trace: str) -> None:
    """Queries GPT-4o for a potential fix and logs the suggestion."""
    prompt = (
        "You are an expert Python developer. The following stacktrace was produced by a daily automation script. "
        "Explain the cause in plain English and propose a concise code patch. "
        "Respond in markdown with a short explanation followed by a Git-style patch.\n\n"
        + error_trace
    )

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            temperature=0,
        )
        logging.error("\n===== AUTOMATIC FIX SUGGESTION =====\n%s\n====================================", response.choices[0].message.content)
    except Exception as exc:
        logging.error("Failed to retrieve automatic fix suggestion: %s", exc)
