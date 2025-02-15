"use server"

import { connectToDatabase } from "../database/index.js"
import Category from "../database/models/category.model.js"
import { handleError } from "../utils.js"

export const createCategory = async ({ categoryName }) => {
  try {
    await connectToDatabase();

    const newCategory = await Category.create({ name: categoryName });

    return JSON.parse(JSON.stringify(newCategory));
  } catch (error) {
    handleError(error)
  }
}

export const getAllCategories = async () => {
  try {
    await connectToDatabase();

    const categories = await Category.find();

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    handleError(error)
  }
}