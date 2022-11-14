import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://pnsrggshqpkzukmuqxlh.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuc3JnZ3NocXBrenVrbXVxeGxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjY3MzMsImV4cCI6MTk4Mzc0MjczM30.bcZFZOHaH3HGoluzjclUTDyr_IjYEyi_NER2I4BJSUg";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}