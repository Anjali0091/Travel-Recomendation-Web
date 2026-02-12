export interface Recommendation {
    id: number;
    placeName: string;
    placeType: string;
    budget: string;
    location: string;
    description: string;
}

export interface UserInput {
    placeType: string;
    budget: string;
    location: string;
}

export interface ApiResponse {
    success: boolean;
    data?: Recommendation[];
    message?: string;
}