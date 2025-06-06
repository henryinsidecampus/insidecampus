"""AI agent idea generator using GPT-4o."""

from __future__ import annotations

import json
import logging
from datetime import datetime
from typing import List, Dict

from openai import OpenAI

client = OpenAI()


def  generate_agent_ideas(news_summary: str) -> List[Dict]:
    """
    Generates 10 new AI agent ideas tailored for Henry.
    """
    logging.info("Generating agent ideas")

    try:
        client = OpenAI()
        prompt = (
            "You are an expert AI product strategist.\n"
            "Based on the following summary of recent AI news, propose exactly 10 NEW and ORIGINAL AI agent ideas "
            "tailored for Henry: a student-athlete with ADHD, productivity-driven, and a creative builder.\n\n"
            "For each idea, provide a JSON object with the following keys: 'Title', 'Description' (max 40 words), "
            "'Use Case', and 'Source' (which news item inspired it). Return the ideas as a JSON list ONLY.\n\n"
            f"AI News Summary:\n{news_summary}"
        )

        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7,
        )

        ideas: List[Dict] = json.loads(response.choices[0].message.content)

    except Exception as e:
        logging.error(f"OpenAI generation failed: {e}")
        ideas = [
            {
                "Date": datetime.now().strftime("%Y-%m-%d"),
                "Title": f"Fallback Agent Idea {i}",
                "Description": "Placeholder description due to generation failure.",
                "Use Case": "Placeholder",
                "Source": "Fallback",
            }
            for i in range(1, 11)
        ]

    today = datetime.now().strftime("%Y-%m-%d")
    for idea in ideas:
        idea["Date"] = today

    return ideas
