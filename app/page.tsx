"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useAuth } from "@/hooks/use-auth"
import { AuthForm } from "@/components/auth/auth-form"
import { Navbar } from "@/components/layout/navbar"
import { HomePage } from "@/pages/home"
import { DishesPage } from "@/pages/dishes"
import { AddDishPage } from "@/pages/add-dish"
import { EditDishPage } from "@/pages/edit-dish"
import { ProfilePage } from "@/pages/profile"
import { Toaster } from "@/components/ui/toaster"

function AppContent() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading FoodDelight...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return <AuthForm />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dishes" element={<DishesPage />} />
        <Route path="/add-dish" element={<AddDishPage />} />
        <Route path="/edit-dish/:id" element={<EditDishPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default function Page() {
  return (
    <Router>
      <AppContent />
      <Toaster />
    </Router>
  )
}
