export interface Pokemonresponse {
    count: number;
    next: string;
    prev: null | string;
    results: Pokemonre[];
}

interface Pokemonre {
    name: string;
    url: string;
}
