export interface Neighborhood {
    name: string,
    points: number,
    id: number,
    x: number,
    y: number
}

export interface User {
    name: string,
    surname: string, 
    email: string,
    neighborhoods: number[],
    id: number,
    points: number
}