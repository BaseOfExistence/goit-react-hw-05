import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const trending = '/trending/movie/day?language=en-US'
const settings = {
    headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGU4ZWQwM2M5MzQzODc5NzI4NWYzMGY3MjYyMjc1ZSIsInN1YiI6IjY2MGQ2ZjI2MTVkZWEwMDE3YzM2NTdiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xyx7fsEWHrP8PezxeWjmmXheT9APa9uoa-RnFa-yxhE',
    },
    params: {
      language: "en",
      api_key: "f0e8ed03c93438797285f30f7262275e",
    }
}
export const trendingData = async () => {
    const woviesData = await axios.get(trending, settings)
    return woviesData.data.results
}
export const movieData = async (movie_id) => {
    const movie = `/movie/${movie_id}?language=en-US`
    const movieAray = await axios.get(movie, settings)
    return movieAray.data
}
export const creditsData = async (movie_id) => {
    const credits = `/movie/${movie_id}/credits?language=en-US`
    const creditsAray = await axios.get(credits, settings)
    return creditsAray.data
}
export const reviewsData = async (movie_id) => {
    const reviews = `/movie/${movie_id}/reviews?language=en-US&page=1`
    const reviewsAray = await axios.get(reviews, settings)
    return reviewsAray.data.results
}
export const searchData = async (query) => {
    const search = `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    const searchAray = await axios.get(search, settings)
    return searchAray.data.results
}