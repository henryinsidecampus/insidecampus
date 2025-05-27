import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

export default function StanfordPage() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    async function fetchQuestions() {
          async function fetchQuestions() {
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .eq('school', 'stanford')

      if (!error && data.length === 0) {
        await supabase.from('questions').insert([
          {
            school: 'stanford',
            question_text: 'What’s Greek life like at Stanford?',
            answer_text: 'It exists, but most people aren’t involved.',
            class_year: '2025',
            upvotes: 11
          },
          {
            school: 'stanford',
            question_text: 'How’s the weather year-round?',
            answer_text: 'Sunny almost every day.',
            class_year: '2026',
            upvotes: 9
          }
        ])
        const { data: newData } = await supabase
          .from('questions')
          .select('*')
          .eq('school', 'stanford')
          .order('created_at', { ascending: false })

        setQuestions(newData)
      } else if (!error) {
        setQuestions(data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)))
      }
    }
    fetchQuestions()
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'Inter, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Stanford University Q&A Hub</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Real, anonymous questions answered by verified Stanford students.
      </p>

      <div>
        <h3>Recent Questions</h3>
        {questions && questions.length > 0 ? (
          questions.map((q) => (
            <div key={q.id} style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e5e7eb' }}>
              <p style={{ fontWeight: '600' }}>{q.question_text}</p>
              <p style={{ marginTop: '0.5rem', color: '#374151' }}>{q.answer_text}</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
                {q.class_year} &middot; ▲ {q.upvotes}
              </p>
            </div>
          ))
        ) : (
          <p>No questions yet. Be the first to ask!</p>
        )}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <input
          type="text"
          placeholder="Ask a question..."
          style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
        />
        <button
          style={{
            marginTop: '0.75rem',
            backgroundColor: '#3A86FF',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            fontWeight: '600',
          }}
        >
          Submit
        </button>
      </div>
    </div>
  )
}
