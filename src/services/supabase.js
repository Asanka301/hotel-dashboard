import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vgwpctlwkwgxqbmckovu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnd3BjdGx3a3dneHFibWNrb3Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5OTI0ODYsImV4cCI6MjAyMTU2ODQ4Nn0.Cn78gcW2qz9AC-9sR-F6f9tUqsr5X3W1Pt-HOMVnnag";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
