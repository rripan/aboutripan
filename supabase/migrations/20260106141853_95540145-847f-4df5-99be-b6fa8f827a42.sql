-- Create guestbook entries table
CREATE TABLE public.guestbook_entries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.guestbook_entries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read entries
CREATE POLICY "Anyone can view guestbook entries" 
ON public.guestbook_entries 
FOR SELECT 
USING (true);

-- Allow anyone to insert entries
CREATE POLICY "Anyone can add guestbook entries" 
ON public.guestbook_entries 
FOR INSERT 
WITH CHECK (true);

-- Enable realtime for guestbook entries
ALTER PUBLICATION supabase_realtime ADD TABLE public.guestbook_entries;