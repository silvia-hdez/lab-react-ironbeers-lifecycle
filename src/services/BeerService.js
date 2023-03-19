import http from './BaseService'

export const list = () => http.get('/beers')

export const getBeerById = (id) => http.get(`/beers/${id}`)