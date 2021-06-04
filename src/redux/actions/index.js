import {
  LOADING, SUCCESS, ERROR,
} from './actionTypes';
import { fetchMeals, fetchMeal } from '../../API/api';

const loadingMeals = () => ({
  type: LOADING,
});

const successMeals = (data) => ({
  type: SUCCESS,
  data,
});

const errorMeals = (error) => ({
  type: ERROR,
  error,
});

const fetchMealsByCategory = (category) => (dispatch) => {
  dispatch(loadingMeals());
  const response = fetchMeals(category);
  response
    .then((data) => dispatch(successMeals(data.meals)))
    .catch(() => dispatch(errorMeals('Error while fetching data.')));
};

const searchMeals = (query) => (dispatch) => {
  console.log('searching meal', query);
  dispatch(loadingMeals);
};

const loadingMeal = () => ({
  type: LOADING,
});

const successMeal = (data) => ({
  type: SUCCESS,
  data,
});

const errorMeal = (error) => ({
  type: ERROR,
  error,
});

const fetchMealById = (id) => (dispatch) => {
  dispatch(loadingMeal());
  const response = fetchMeal(id);
  response
    .then((data) => dispatch(successMeal(data.meals[0])))
    .catch(() => dispatch(errorMeal('Error while fetching data.')));
};

export { fetchMealsByCategory, fetchMealById, searchMeals };
