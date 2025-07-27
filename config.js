// supabaseClient.js
// import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'

const supabaseUrl = 'https://xwwowgklxvfmcjzdnhaq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3d293Z2tseHZmbWNqemRuaGFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1NDk4MzUsImV4cCI6MjA2OTEyNTgzNX0.X3gOUHHTcB5I1x9iZy5twify2bjY2Re_YMeR6veIUpQ'

export const client =  supabase.createClient(supabaseUrl, supabaseKey)
// config.js


// console.log("Initializing Supabase client...", client   );




