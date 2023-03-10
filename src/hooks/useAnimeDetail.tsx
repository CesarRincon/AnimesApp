import { useState, useEffect } from 'react';
import animeDB from '../api/animeDB';
import { AnimeFull, Data } from '../interfaces/animeFull';
interface AnimeDetail {
    isLoading: boolean,
    animeFull?: Data
}
export const useAnimeDetail = (movieId: number) => {
    const [state, setState] = useState<AnimeDetail>({
        isLoading: true,
        animeFull: undefined
    });

    const getAnimeDetails = async() => {
        const res = (await animeDB.get<AnimeFull>(`/anime/${movieId}/full`)).data;       
        setState({
            isLoading: false,
            animeFull: res.data
        })
    }
    
    useEffect(() => {
        getAnimeDetails();
    }, [])

    return {
        ...state
    }
}
