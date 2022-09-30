import { createClient } from "@supabase/supabase-js";

/**
 * I have no idea why the process.env is not working.
 *
 */
//  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
//  const supabaseKey = process.env.REACT_APP_ANON_KEY;

const REACT_APP_SUPABASE_URL = "https://hxqhurutozrhusrwxeyq.supabase.co";
const REACT_APP_ANON_KEY = "";

// const supabase = createClient(supabaseUrl, supabaseKey);
const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_ANON_KEY);

export default supabase;
