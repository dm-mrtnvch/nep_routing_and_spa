import {API_URL} from './config';


export const getMealById = async (mealId) => {
  const response = await fetch(API_URL + 'lookup.php?i=/' + mealId)
  return await response.json()
}

export const getAllCategories = async () => {
  const response = await fetch(API_URL + 'ategories.php')
  return await response.json()
}

export const getFilteredCategory = async (category) => {
  const response = await fetch(`${API_URL}filter.php?c=${category}`)
  return await response.json()
}

export {getMealById, getAllCategories, getFilteredCategory}