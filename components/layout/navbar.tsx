"use client"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"
import { Link, useLocation } from "react-router-dom"
import { LogOut, Home, Plus, List, User } from "lucide-react"

export function Navbar() {
  const { user, signOut } = useAuth()
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-orange-600">FoodDelight</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant={isActive("/") ? "default" : "ghost"} size="sm" className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Home</span>
              </Button>
            </Link>

            <Link to="/dishes">
              <Button
                variant={isActive("/dishes") ? "default" : "ghost"}
                size="sm"
                className="flex items-center space-x-2"
              >
                <List className="h-4 w-4" />
                <span className="hidden sm:inline">Dishes</span>
              </Button>
            </Link>

            <Link to="/add-dish">
              <Button
                variant={isActive("/add-dish") ? "default" : "ghost"}
                size="sm"
                className="flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Add Dish</span>
              </Button>
            </Link>

            <Link to="/profile">
              <Button
                variant={isActive("/profile") ? "default" : "ghost"}
                size="sm"
                className="flex items-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Profile</span>
              </Button>
            </Link>

            <Button
              onClick={signOut}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2 bg-transparent"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
