import { AnimeDbResponse, Anime } from '../interfaces/animeInterface';
import { useEffect, useState } from 'react';
import animeDB from '../api/animeDB';
import { AnimesRecomendations, AnimesRecomended } from '../interfaces/animeRecomended';

interface AnimesState {
    animes: Anime[];
    animesTop: Anime[];
    animesRecomendations: AnimesRecomendations[];
}

export const UseAnimes = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [animesState, setAnimesState] = useState<AnimesState>({
        animes: [],
        animesTop: [],
        animesRecomendations: []
    })

    const getAnimes = async () => {

        const animesPromise = animeDB.get<AnimeDbResponse>('/anime');
        const animesTopPromise = animeDB.get<AnimeDbResponse>('/top/anime');
        const AnimesRecomendationsPromise = animeDB.get<AnimesRecomended>('/recommendations/anime');

        const res = await Promise.all([animesPromise, animesTopPromise, AnimesRecomendationsPromise])

        setAnimesState({
            animes: res[0].data.data,
            animesTop: res[1].data.data,
            animesRecomendations: res[2].data.data

        })

        setIsLoading(false)
    }

    useEffect(() => {
        getAnimes();
    }, [])

    return {
        ...animesState,
        isLoading,

    }

}
