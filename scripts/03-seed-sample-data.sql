-- Insert sample dishes (these will be associated with the authenticated user)
-- Note: This script should be run after authentication to get proper user_id
INSERT INTO dishes (name, description, price, category, image_url, user_id) VALUES
('Margherita Pizza', 'Classic pizza with tomato sauce, mozzarella, and fresh basil', 12.99, 'Pizza', '/placeholder.svg?height=200&width=300', auth.uid()),
('Chicken Biryani', 'Aromatic basmati rice with tender chicken and traditional spices', 15.99, 'Indian', '/placeholder.svg?height=200&width=300', auth.uid()),
('Caesar Salad', 'Fresh romaine lettuce with parmesan cheese and caesar dressing', 8.99, 'Salad', '/placeholder.svg?height=200&width=300', auth.uid()),
('Chocolate Brownie', 'Rich chocolate brownie served with vanilla ice cream', 6.99, 'Dessert', '/placeholder.svg?height=200&width=300', auth.uid()),
('Grilled Salmon', 'Fresh Atlantic salmon with herbs and lemon butter sauce', 18.99, 'Seafood', '/placeholder.svg?height=200&width=300', auth.uid());
