-- Enable Row Level Security
ALTER TABLE dishes ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own dishes" ON dishes
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own dishes" ON dishes
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own dishes" ON dishes
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own dishes" ON dishes
    FOR DELETE USING (auth.uid() = user_id);
