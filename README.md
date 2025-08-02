# FoodDelight 🍽️

A simplified food delivery platform built with React and Supabase, similar to Swiggy. This full-stack application allows users to manage their dishes with complete CRUD operations, authentication, and a responsive design.

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with functional components and hooks
- **TypeScript** - Type-safe development
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **Lucide React** - Beautiful icons

### Backend
- **Supabase** - PostgreSQL database with real-time features
- **Supabase Auth** - Authentication and user management
- **Row Level Security (RLS)** - Secure data access

## 📁 Project Structure

\`\`\`
src/
├── components/
│   ├── auth/
│   │   └── auth-form.tsx          # Authentication form component
│   ├── dishes/
│   │   ├── dish-card.tsx          # Individual dish display card
│   │   └── dish-form.tsx          # Form for creating/editing dishes
│   ├── layout/
│   │   └── navbar.tsx             # Navigation bar component
│   └── ui/                        # shadcn/ui components
├── hooks/
│   ├── use-auth.ts                # Authentication hook
│   ├── use-dishes.ts              # Dishes CRUD operations hook
│   └── use-toast.ts               # Toast notifications hook
├── lib/
│   └── supabase.ts                # Supabase client configuration
├── pages/
│   ├── home.tsx                   # Dashboard/home page
│   ├── dishes.tsx                 # Dishes listing with search/filter
│   ├── add-dish.tsx               # Add new dish page
│   ├── edit-dish.tsx              # Edit existing dish page
│   └── profile.tsx                # User profile and statistics
├── scripts/
│   ├── 01-create-dishes-table.sql # Database table creation
│   ├── 02-setup-rls-policies.sql  # Row Level Security setup
│   └── 03-seed-sample-data.sql    # Sample data insertion
├── utils/
│   └── cn.ts                      # Utility functions
├── app/
│   └── page.tsx                   # Main app component with routing
└── README.md
\`\`\`

## ✨ Features

### 🔐 Authentication
- **Sign Up** - Create new user accounts
- **Sign In** - Secure user login
- **Sign Out** - Safe session termination
- **Protected Routes** - Authenticated access only

### 📦 CRUD Operations
Complete Create, Read, Update, Delete functionality for dishes:

- **Create**: Add new dishes with form validation
- **Read**: View dishes in card layout with search and filtering
- **Update**: Edit existing dish information
- **Delete**: Remove dishes with confirmation

### 🍽️ Dish Management
Each dish includes:
- **Name** (required)
- **Description** (optional)
- **Price** (required, validated as positive number)
- **Category** (required, dropdown selection)
- **Image URL** (optional)

### 🎨 UI/UX Features
- **Responsive Design** - Works on all device sizes
- **Loading Indicators** - Visual feedback during API calls
- **Toast Notifications** - Success and error messages
- **Form Validation** - Client-side input validation
- **Search & Filter** - Find dishes by name/description and category
- **Statistics Dashboard** - User profile with dish analytics

## 🛠️ Setup and Installation

### Prerequisites
- Node.js 18+ and npm
- Supabase account

### 1. Clone and Install
\`\`\`bash
git clone <repository-url>
cd fooddelight
npm install
\`\`\`

### 2. Supabase Setup
1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Settings > API
3. Create environment variables:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
\`\`\`

### 3. Database Setup
Run the SQL scripts in order in your Supabase SQL Editor:
1. \`scripts/01-create-dishes-table.sql\` - Creates the dishes table
2. \`scripts/02-setup-rls-policies.sql\` - Sets up Row Level Security
3. \`scripts/03-seed-sample-data.sql\` - Adds sample data (optional)

### 4. Run the Application
\`\`\`bash
npm run dev
\`\`\`

Visit \`http://localhost:3000\` to see the application.

## 🤖 AI Tools Used

This project was developed with assistance from several AI tools:

### v0 by Vercel
- **Component Generation**: Used v0 to generate initial UI components and layouts
- **Code Structure**: Helped establish the project architecture and folder structure
- **TypeScript Integration**: Assisted with type definitions and interfaces

### Benefits of AI-Assisted Development:
- **Faster Prototyping**: Quickly generated component boilerplate
- **Best Practices**: AI suggested modern React patterns and hooks usage
- **Code Consistency**: Maintained consistent coding style across components
- **Error Prevention**: TypeScript integration helped catch potential issues early

## 🔒 Security Features

- **Row Level Security (RLS)** - Users can only access their own dishes
- **Input Validation** - Both client and server-side validation
- **Environment Variables** - Secure API key management
- **Authentication Required** - All routes protected by authentication

## 🌟 Key Highlights

- **Modern React Patterns** - Uses hooks, functional components, and TypeScript
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Real-time Updates** - Supabase provides real-time data synchronization
- **User Experience** - Loading states, error handling, and success feedback
- **Scalable Architecture** - Modular component structure for easy maintenance

## 🚀 Deployment

The application is ready for deployment on platforms like:
- **Vercel** (recommended for Next.js apps)
- **Netlify**
- **Railway**
- **Render**

Make sure to set environment variables in your deployment platform.

## 🔮 Future Improvements

- **Image Upload** - Direct image upload instead of URLs
- **Advanced Search** - Full-text search with filters
- **Dish Categories Management** - Custom category creation
- **Order Management** - Shopping cart and order functionality
- **User Roles** - Admin/customer role separation
- **Dark Mode** - Theme switching capability
- **PWA Features** - Offline functionality and app installation
- **Analytics** - Detailed usage statistics and insights

## 🐛 Known Issues

- Image URLs must be publicly accessible
- No image validation for broken links
- Limited to single user per session
- No bulk operations for dishes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using React, Supabase, and modern web technologies.
\`\`\`
