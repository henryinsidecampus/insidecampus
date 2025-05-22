import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

export default function ColbyPage() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    async function fetchQuestions() {
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .eq('school', 'colby')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching questions:', error)
      } else {
        setQuestions(data)
      }
    }

    fetchQuestions()
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'Inter, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Colby College Q&A Hub</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Real, anonymous questions answered by verified Colby students.
      </p>

      <div>
        <h3>Recent Questions</h3>

        {questions.length === 0 ? (
          <p>No questions posted yet.</p>
        ) : (
          questions.map((q) => (
            <div key={q.id} style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #eee', borderRadius: '6px' }}>
              <p style={{ fontWeight: 'bold' }}>{q.question_text}</p>
              <p style={{ margin: '0.5rem 0' }}>{q.answer_text}</p>
              <div style={{ fontSize: '0.9rem', color: '#777' }}>
                Answered by <strong>{q.class_year}</strong> • <span>↑ {q.upvotes}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
