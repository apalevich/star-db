export default class SwapiService {

    _baseUrl = 'https://swapi.dev/api';

    async getResource(path) {
        const res = await fetch(`${this._baseUrl}${path}`);

        if (!res.ok) {
        throw new Error(`Could not fetch ${path}, received ${res.status}`)
        }
        return await res.json();
        
    }

    async getAllPeople() {
        const res = await this.getResource('/people/');
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}/`)
    }

    async getAllPlanets() {
        const res = await this.getResource('/planets/');
        return res.results;
    }

    getPlanet(id) {
        return this.getResource(`/planets/${id}/`)
    }

    async getAllStarships() {
        const res = await this.getResource('/starships/');
        return res.results;
    }

    getStarship(id) {
        return this.getResource(`/starships/${id}/`)
    }
}