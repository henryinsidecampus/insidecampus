import { useEffect, useState } from 'react';
import supabase from '../supabase';
import Head from 'next/head';
export default function BowdoinPage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      let { data, error } = await supabase
        .from('questions')
        .select('*')
        .eq('school', 'bowdoin')
        .order('created_at', { ascending: false });

      if (error) {
        console.error(error);
        return;
      }

      if (data.length === 0) {
        const { error: insertError } = await supabase.from('questions').insert([
          {
            school: 'bowdoin',
            question_text: "What’s student life like at bowdoin?",
            answer_text: "It’s a mix of academics and social life.",
            class_year: '2025',
            upvotes: 8,
          },
          {
            school: 'bowdoin',
            question_text: 'Is housing guaranteed all 4 years?',
            answer_text: 'Yes, for most undergrads.',
            class_year: '2026',
            upvotes: 6,
          },
        ]);

        if (insertError) {
          console.error(insertError);
        } else {
          const { data: newData } = await supabase
            .from('questions')
            .select('*')
            .eq('school', 'bowdoin')
            .order('created_at', { ascending: false });
          data = newData;
        }
      }

      setQuestions(data);
    }
    fetchQuestions();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Inter, sans-serif' }}>
<Head>
    <titInsideCampus | Ask Students at Bowdoin College
    <meta name="description" content="Real,<meta name="description" content="Get unfiltered answers from verified Bowdoin students. Submit your questions about campus life, academics, and more — anonymously." />
  </Head>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Bowdoin Q&A Hub</h1>
      <p style={{ marginBottom: '1.5rem' }}>
        Real, anonymous questions answered by verified Bowdoin students.
      </p>
      <div>
        {questions.map((q) => (
          <div
            key={q.id}
            style={{
              padding: '1rem',
              marginBottom: '1rem',
              border: '1px solid #ccc',
            }}
          >
            <p>
              <strong>Q:</strong> {q.question_text}
            </p>
            <p>
              <strong>A:</strong> {q.answer_text}
            </p>
            <p>
              <em>
                Class of {q.class_year} • {q.upvotes} upvotes
              </em>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
