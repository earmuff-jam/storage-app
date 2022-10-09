import { createClient } from "@supabase/supabase-js";

/**
 * I have no idea why the process.env is not working.
 *
 */
//  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
//  const supabaseKey = process.env.REACT_APP_ANON_KEY;

const REACT_APP_SUPABASE_URL = "https://hxqhurutozrhusrwxeyq.supabase.co";
const REACT_APP_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4cWh1cnV0b3pyaHVzcnd4ZXlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ0NTIyMjQsImV4cCI6MTk4MDAyODIyNH0.kV4GD5-TF2I1Opr7it76weWhxN4wHPog40QFJxgRa6g";

// const supabase = createClient(supabaseUrl, supabaseKey);
const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_ANON_KEY);

export default supabase;
