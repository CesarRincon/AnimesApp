import { useState, useEffect } from 'react';
import animeDB from '../api/animeDB';
import { StudiosResponse, Studios } from '../interfaces/animeStudiosInterface';
interface StudiosAnime {
    isLoading: boolean,
    animeStudios?: Studios
}
export const useAnimeStudios = (studiosId: number) => {
    const [state, setState] = useState<StudiosAnime>({
        isLoading: true,
        animeStudios: undefined
    });

    const getAnimeStudios = async() => {
        const res = (await animeDB.get<StudiosResponse>(`/producers/${studiosId}/full`)).data;       
        setState({
            isLoading: false,
            animeStudios: res.data
        })
    }
    
    useEffect(() => {
        getAnimeStudios();
    }, [])

    return {
        ...state
    }
}
