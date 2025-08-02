"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { toast } from "@/hooks/use-toast"
import type { Database } from "@/lib/supabase"

type Dish = Database["public"]["Tables"]["dishes"]["Row"]
type DishInsert = Database["public"]["Tables"]["dishes"]["Insert"]
type DishUpdate = Database["public"]["Tables"]["dishes"]["Update"]

export function useDishes() {
  const [dishes, setDishes] = useState<Dish[]>([])
  const [loading, setLoading] = useState(true)

  const fetchDishes = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase.from("dishes").select("*").order("created_at", { ascending: false })

      if (error) throw error
      setDishes(data || [])
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch dishes",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const createDish = async (dish: Omit<DishInsert, "user_id">) => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) throw new Error("User not authenticated")

      const { data, error } = await supabase
        .from("dishes")
        .insert([{ ...dish, user_id: user.id }])
        .select()
        .single()

      if (error) throw error

      setDishes((prev) => [data, ...prev])
      toast({
        title: "Success!",
        description: "Dish created successfully",
      })
      return data
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
      throw error
    }
  }

  const updateDish = async (id: string, updates: DishUpdate) => {
    try {
      const { data, error } = await supabase.from("dishes").update(updates).eq("id", id).select().single()

      if (error) throw error

      setDishes((prev) => prev.map((dish) => (dish.id === id ? data : dish)))
      toast({
        title: "Success!",
        description: "Dish updated successfully",
      })
      return data
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
      throw error
    }
  }

  const deleteDish = async (id: string) => {
    try {
      const { error } = await supabase.from("dishes").delete().eq("id", id)

      if (error) throw error

      setDishes((prev) => prev.filter((dish) => dish.id !== id))
      toast({
        title: "Success!",
        description: "Dish deleted successfully",
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
      throw error
    }
  }

  const getDishById = async (id: string) => {
    try {
      const { data, error } = await supabase.from("dishes").select("*").eq("id", id).single()

      if (error) throw error
      return data
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch dish",
        variant: "destructive",
      })
      throw error
    }
  }

  useEffect(() => {
    fetchDishes()
  }, [])

  return {
    dishes,
    loading,
    fetchDishes,
    createDish,
    updateDish,
    deleteDish,
    getDishById,
  }
}
