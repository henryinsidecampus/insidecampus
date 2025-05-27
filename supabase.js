import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mohwxiahjpnzrcgtdwiv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vaHd4aWFoanBuempjZ3Rkd2l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzNzEyNjcsImV4cCI6MjAzMTk0NzI2N30.wvX1xy7yL8ZnZCl_k-RsNTctT_AqCdlxQW1eAxfdNq4'

export const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
