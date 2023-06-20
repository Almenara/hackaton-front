export interface Neighbour {
    name: string,
    points: number,
    id: number,
    x: number,
    y: number
}

export interface User {
    name: string,
    surname: string, 
    email: string;
    neighbours: number[],
    id: number,
    points: number
}