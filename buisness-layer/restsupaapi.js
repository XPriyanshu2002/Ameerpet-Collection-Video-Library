const { createClient } = require("@supabase/supabase-js");

const supabase = createClient("https://vpkpskeqlbmjqztxizmk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwa3Bza2VxbGJtanF6dHhpem1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyMDM2MDUsImV4cCI6MjAzNDc3OTYwNX0.QAFYG3k2Z7dUdzDqabsLFLKk7GKO1DnMMekmQlP-U7A");


    const {data} = supabase.from("notes").insert({note:"Supabase doc"});
    console.log(data);

