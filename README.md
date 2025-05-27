# InsideCampus Supabase Setup

1. Replace `<your-project-id>` and `<your-anon-key>` in `supabase.js` with your actual project details from Supabase.
   - You can find these in your Supabase dashboard → Project Settings → API.

2. Upload `supabase.js` to your GitHub repo inside the `/utils` or `/lib` folder (or directly in `/pages` for now).

3. Import and use `supabase` wherever you want to query your database, like this:

    import { supabase } from './supabase'

    const { data, error } = await supabase
      .from('questions')
      .select('*')
      .eq('school', 'colby')


4. Let me know when you’re ready to display real questions on your site!
