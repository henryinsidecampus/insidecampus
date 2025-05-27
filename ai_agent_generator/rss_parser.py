"""RSS parsing and summarization utilities for the Daily AI Agent Generator."""

from __future__ import annotations

import feedparser
from typing import List, Dict

from openai import OpenAI

from feeds_config import RSS_FEEDS


client = OpenAI()  # Assumes OPENAI_API_KEY env var is set


def fetch_feed_entries(limit_per_feed: int = 5) -> List[Dict]:
    """Fetches and returns recent entries from configured RSS feeds."""
    entries: List[Dict] = []
    for url in RSS_FEEDS:
        parsed = feedparser.parse(url)
        entries.extend(parsed.entries[:limit_per_feed])
    return entries


def summarize_entries(entries: List[Dict], word_limit: int = 200) -> str:
    """Generate a concise summary of the collected RSS entries using GPT‑4o."""
    # Build a concatenated context string (trimmed to avoid token overflow)
    snippets: List[str] = []
    for e in entries:
        title = getattr(e, "title", "")
        summary = getattr(e, "summary", getattr(e, "description", ""))
        snippets.append(f"Title: {title}\nSummary: {summary}")

    context = "\n\n".join(snippets)[:12000]

    prompt = (
        "You are an expert AI news analyst. "
        f"Write a {word_limit}-word maximum digest summarizing the most important points "
        "from the following AI‑related news updates. Focus on breakthroughs, releases, and research. "
        "Be concise and clear.\n\n" + context
    )

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3,
    )

    return response.choices[0].message.content.strip()


def fetch_and_summarize() -> str:
    """Convenience wrapper to fetch feeds and return a summary string."""
    entries = fetch_feed_entries()
    return summarize_entries(entries)
