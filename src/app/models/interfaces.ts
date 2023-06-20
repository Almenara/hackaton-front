export interface Zone {
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
    zones: number[],
    id: number,
    points: number
}