import http from './BaseService'

export const list = () => http.get('/beers')

export const getBeerById = (id) => http.get(`/beers/${id}`)

export const createBeer = (beerBody) => http.post('/beers/new', beerBody)

export const randomBeer = () => http.get('/beers/random')