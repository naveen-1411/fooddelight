"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2 } from "lucide-react"
import { Link } from "react-router-dom"
import type { Database } from "@/lib/supabase"

type Dish = Database["public"]["Tables"]["dishes"]["Row"]

interface DishCardProps {
  dish: Dish
  onDelete: (id: string) => void
}

export function DishCard({ dish, onDelete }: DishCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <img
          src={dish.image_url || "/placeholder.svg?height=200&width=300&query=food+dish"}
          alt={dish.name}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold truncate">{dish.name}</h3>
          <Badge variant="secondary">{dish.category}</Badge>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{dish.description || "No description available"}</p>
        <p className="text-2xl font-bold text-orange-600">${dish.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link to={`/edit-dish/${dish.id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </Link>
        <Button variant="destructive" size="sm" onClick={() => onDelete(dish.id)} className="flex-1">
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}
